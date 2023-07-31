﻿using AutoMapper;
using Intiri.API.Controllers.Base;
using Intiri.API.DataAccess;
using Intiri.API.Extension;
using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO.Moodboard;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Material;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Payment;
using Intiri.API.Models.PolicyNames;
using Intiri.API.Models.Product;
using Intiri.API.Models.RoleNames;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Net;

namespace Intiri.API.Controllers
{
	[Authorize]
	public class MoodboardsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;

		#endregion Fields

		#region Constructors

		public MoodboardsController(IUnitOfWork unitOfWork, IMapper mapper): base(unitOfWork)
		{
			_mapper = mapper;
		}

		#endregion Constructors

		#region Public methods

		[HttpGet]
		public async Task<ActionResult<IEnumerable<MoodboardOutDTO>>> GetMoodboards()
		{
			IEnumerable<Moodboard> moodboards = await _unitOfWork.MoodboardRepository.GetMoodboards();

			IEnumerable<MoodboardOutDTO> moodboardsOut = _mapper.Map<IEnumerable<MoodboardOutDTO>>(moodboards);

			return Ok(moodboardsOut);
		}

		[HttpGet("id/{moodboardId}")]
		public async Task<ActionResult<MoodboardOutDTO>> GetMoodboardById(int moodboardId)
		{
			Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(moodboardId);

			if (moodboard == null)
			{
				return BadRequest($"Moodboard with id {moodboardId} doesn't exist");
			}

			MoodboardOutDTO moodboardOut = _mapper.Map<MoodboardOutDTO>(moodboard);

			moodboardOut.ColorPalettes = await _unitOfWork.ColorPaletteRepository.UpdateColorPalettesWithNCSAsync(moodboardOut.ColorPalettes);

            return Ok(moodboardOut);
		}

		[Authorize(Policy = PolicyNames.ClientPolicy)]
		[HttpGet("client/moodboardOffers")]
		public async Task<ActionResult<IEnumerable<MoodboardOutDTO>>> GetMoodboardOffers()
		{
			EndUser endUser = await _unitOfWork.UserRepository.GetEndUserWithConsultationPaymentsAsync(User.GetUserId());
			if (endUser == null) return Unauthorized("Invalid client.");

			List<Moodboard> moodboardOffers = new List<Moodboard>();
			foreach (ConsultationPayment cp in endUser.ConsultationPayments)
			{
				if (cp.MoodboardOfferId != null)
				{
					moodboardOffers.Add(await _unitOfWork.MoodboardRepository.GetFullMoodboardById(cp.MoodboardOfferId.Value));
				}
			}

			IEnumerable<MoodboardOutDTO> moodboardOffersOut = _mapper.Map<IEnumerable<MoodboardOutDTO>>(moodboardOffers);

			return Ok(moodboardOffersOut);
		}

		[Authorize(Policy = PolicyNames.MoodboardPolicy)]
		[HttpPost("add")]
		public async Task<ActionResult<MoodboardOutDTO>> AddMoodboard(MoodboardInDTO moodboardIn)
		{
			Moodboard moodboard = _mapper.Map<Moodboard>(moodboardIn);

			moodboard.Designer = await _unitOfWork.UserRepository.GetByID(User.GetUserId());

			Style style = await _unitOfWork.StyleRepository.GetByID(moodboardIn.StyleId);
			moodboard.Style = style;

			Room room = await _unitOfWork.RoomRepository.GetRoomByIdAsync(moodboardIn.RoomId);
			moodboard.Room = room;

			IEnumerable<Material> materials = await _unitOfWork.MaterialRepository.GetMaterialsByIdsListAsync(moodboardIn.MaterialIds);
			moodboard.Materials = materials.ToArray();

			IEnumerable<ColorPalette> colorPalettes = await _unitOfWork.ColorPaletteRepository.GetColorPalettesByIdsListAsync(moodboardIn.ColorPaletteIds);
			moodboard.ColorPalettes = colorPalettes.ToArray();

			IEnumerable<Product> products = await _unitOfWork.ProductRepository.GetProductsByIdsListAsync(moodboardIn.ProductIds);
			moodboard.Products = products.ToArray();

            IEnumerable<StyleImage> styleImages = await _unitOfWork.StyleImageRepository.GetStyleImagesByIdsListAsync(moodboardIn.StyleImageIds);
            moodboard.StyleImages = styleImages.ToArray();

			_unitOfWork.MoodboardRepository.Insert(moodboard);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<MoodboardOutDTO>(moodboard));
			}

			return BadRequest("Problem occured while adding moodboard");
		}

		[Authorize(Policy = PolicyNames.DesignerPolicy)]
		[HttpPost("addMoodboardOffer")]
		public async Task<ActionResult<MoodboardOutDTO>> AddMoodboardOffer(MoodboardOfferInDTO moodboardOfferIn)
		{
			Designer designer = await _unitOfWork.UserRepository.GetDesignerUserByIdAsync(User.GetUserId());
			if (designer == null) return Unauthorized("Invalid designer.");

			ConsultationPayment consultationPayment = await _unitOfWork.ConsultationPaymentRepository.GetBaseConsultationPaymentByIdAsync(moodboardOfferIn.ConsultationPaymentId);
			if (consultationPayment == null && consultationPayment.Receiver != designer)
			{
				return BadRequest("Invalid consultation payment.");
			}

			ClientMoodboard moodboard = _mapper.Map<ClientMoodboard>(moodboardOfferIn.MoodboardOffer);

			moodboard.Designer = designer;

			Style style = await _unitOfWork.StyleRepository.GetByID(moodboardOfferIn.MoodboardOffer.StyleId);
			moodboard.Style = style;

			Room room = await _unitOfWork.RoomRepository.GetRoomByIdAsync(moodboardOfferIn.MoodboardOffer.RoomId);
			moodboard.Room = room;

			IEnumerable<Material> materials = await _unitOfWork.MaterialRepository.GetMaterialsByIdsListAsync(moodboardOfferIn.MoodboardOffer.MaterialIds);
			moodboard.Materials = materials.ToArray();

			IEnumerable<ColorPalette> colorPalettes = await _unitOfWork.ColorPaletteRepository.GetColorPalettesByIdsListAsync(moodboardOfferIn.MoodboardOffer.ColorPaletteIds);
			moodboard.ColorPalettes = colorPalettes.ToArray();

			IEnumerable<Product> products = await _unitOfWork.ProductRepository.GetProductsByIdsListAsync(moodboardOfferIn.MoodboardOffer.ProductIds);
			moodboard.Products = products.ToArray();

			_unitOfWork.MoodboardRepository.Insert(moodboard);

			consultationPayment.MoodboardOffer = moodboard;
			_unitOfWork.ConsultationPaymentRepository.Update(consultationPayment);


			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<MoodboardOutDTO>(moodboard));
			}

			return BadRequest("Problem occured while adding moodboard offer");
		}

		[HttpPut("edit")]
		public async Task<ActionResult<ProjectOutDTO>> EditMoodboard([FromBody] MoodboardEditInDTO modifyDTO)
		{
			Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetFullMoodboardById(modifyDTO.MoodboardId);

			if (moodboard == null)
			{
				return BadRequest($"Moodboard with Id={modifyDTO.MoodboardId} not found");
			}

			if (modifyDTO.ColorPaletteIds != null)
			{
				IEnumerable<ColorPalette> colorPalettes =
					await _unitOfWork.ColorPaletteRepository.GetColorPalettesByIdsListAsync(modifyDTO.ColorPaletteIds);

				moodboard.ColorPalettes = colorPalettes.ToList();
			}

			if (modifyDTO.MaterialIds != null)
			{
				IEnumerable<Material> materials =
					await _unitOfWork.MaterialRepository.GetMaterialsByIdsListAsync(modifyDTO.MaterialIds);

				moodboard.Materials = materials.ToList();
			}

			if (modifyDTO.ProductIds != null)
			{
				IEnumerable<Product> products =
					await _unitOfWork.ProductRepository.GetProductsByIdsListAsync(modifyDTO.ProductIds);

				moodboard.Products = products.ToList();
			}

			moodboard.Updated = DateTime.UtcNow;

			_unitOfWork.MoodboardRepository.Update(moodboard);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok(_mapper.Map<MoodboardOutDTO>(moodboard));
			}

			return BadRequest("Something went wrong while modifying moodboard");
		}

		[Authorize(Policy = PolicyNames.AdminPolicy)]
		[HttpPatch("templateSet")]
		public async Task<ActionResult> SetMoodboardAsTemplate(MoodboardAsTemplateInDTO moodboardInDTO)
		{
			Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetByID(moodboardInDTO.MoodboardId);

			if (moodboard == null)
			{
				return BadRequest($"Moodboard with Id={moodboardInDTO.MoodboardId} not found");
			}

			moodboard.IsTemplate = moodboardInDTO.IsTemplate;

			_unitOfWork.MoodboardRepository.Update(moodboard);

			if (await _unitOfWork.SaveChanges())
			{
				return Ok();
			}

			return BadRequest("Something went wrong while set template moodboard");
		}

		[Authorize(Policy = PolicyNames.MoodboardPolicy)]
		[HttpDelete("delete/{moodboardId}")]
		public async Task<ActionResult> DeleteMoodboard(int moodboardId)
		{
			Moodboard moodboard = await _unitOfWork.MoodboardRepository.GetByID(moodboardId);
			if (moodboard == null) return BadRequest("Moodboard doesn't exist");

			try
			{
				await _unitOfWork.MoodboardRepository.Delete(moodboard.Id);
				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return BadRequest($"Internal error: {ex}");
			}

			return Ok();
		}

		// TODO: Clear cloudinary sketch file
		[Authorize(Policy = PolicyNames.ClientPolicy)]
		[HttpDelete("deleteClient/{moodboardId}")]
		public async Task<ActionResult> DeleteClientMoodboard(int moodboardId)
		{
			ClientMoodboard moodboard = await _unitOfWork.MoodboardRepository.GetClientMoodboardById(moodboardId);
			if (moodboard == null) return BadRequest("Client moodboard doesn't exist");

			try
			{
				await _unitOfWork.MoodboardRepository.Delete(moodboard.Id);
				await _unitOfWork.SaveChanges();
			}
			catch (Exception ex)
			{
				return BadRequest($"Internal error: {ex.InnerException.Message}");
			}

			return Ok();
		}

		#endregion Public methods
	}
}