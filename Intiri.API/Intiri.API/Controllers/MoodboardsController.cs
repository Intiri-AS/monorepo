using AutoMapper;
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
using System.Text;
using IronPdf;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Intiri.API.Models.DTO;
using Twilio.TwiML.Messaging;
using System.Drawing.Printing;

namespace Intiri.API.Controllers
{
	[Authorize]
	public class MoodboardsController : BaseApiController
	{
		#region Fields

		private readonly IMapper _mapper;

        #endregion Fields

        #region Constructors

        public MoodboardsController(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork)
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

            if (modifyDTO.StyleImageIds != null)
            {
                IEnumerable<StyleImage> styleImages =
                    await _unitOfWork.StyleImageRepository.GetStyleImagesByIdsListAsync(modifyDTO.StyleImageIds);

                moodboard.StyleImages = styleImages.ToList();
            }

            Style style = await _unitOfWork.StyleRepository.GetByID(modifyDTO.StyleId);
            moodboard.Style = style;

            Room room = await _unitOfWork.RoomRepository.GetRoomByIdAsync(modifyDTO.RoomId);
            moodboard.Room = room;

            if (modifyDTO.SlotInfo != null)
            {
                moodboard.SlotInfo = modifyDTO.SlotInfo;
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

        [HttpGet("CreateMoodboardPDF")]
		[AllowAnonymous]
        public async Task<IActionResult> CreateMoodboardPDF(int moodboardId,string lng = "")
        {
			#region text
			string SubTitle1 = "Congratulations on your new mood board";
			string SubTitle2 = "Exciting News: Unlock discounts using Intiri’s promo codes at different stores – simply scroll down for the codes!";
			string ProductList = "Product List";
			string PromoCodes = "Promo Codes";
			string DiscountCode = "Discount code";
			string Trustedby = "Trusted by top brands";

            if (lng == "no")
            {
                SubTitle1 = "Gratulerer med ditt nye stemningskart";
                SubTitle2 = "Spennende nyheter: Lås opp rabatter ved å bruke Intiris kampanjekoder i ulike butikker – rull bare nedover for kodene!";
                ProductList = "Produktliste";
                PromoCodes = "Rabattkode";
                DiscountCode = "Rabattkode";
                Trustedby = "Våre samarbeidspartnere";
            }
            #endregion

            var htmlPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/assets", "PDF.HTML");
            string contents = System.IO.File.ReadAllText(htmlPath);

            ClientMoodboard moodboard = await _unitOfWork.MoodboardRepository.GetClientMoodboardOptimizedById(moodboardId);
            
            if (moodboard == null)
            {
                return BadRequest($"Moodboard with id {moodboardId} doesn't exist");
            }

			contents = contents.Replace("#ProjectName#", moodboard.Project.Name);
			contents = contents.Replace("#SubTitle1#", SubTitle1);
			contents = contents.Replace("#StyleName#", moodboard.Style?.Name);
			contents = contents.Replace("#RoomName#", moodboard.Room?.Name);
			contents = contents.Replace("#SubTitle2#", SubTitle2);
			contents = contents.Replace("#ProductList#", ProductList);
			contents = contents.Replace("#PromoCodes#", PromoCodes);
			contents = contents.Replace("#DiscountCode#", DiscountCode);
			contents = contents.Replace("#Trustedby#", Trustedby);

            MoodboardOutDTO moodboardOut = _mapper.Map<MoodboardOutDTO>(moodboard);
            moodboardOut.ColorPalettes = await _unitOfWork.ColorPaletteRepository.UpdateColorPalettesWithNCSAsync(moodboardOut.ColorPalettes);
			List<SlotInfo> allSlots = new List<SlotInfo>();
			try
			{
                JObject slotInfo = JObject.Parse(moodboardOut.SlotInfo);
                foreach (var pair in slotInfo)
                {
                    var slot = System.Text.Json.JsonSerializer.Deserialize<SlotInfo>(pair.Value.ToString());
                    slot.slotId = pair.Key;
                    allSlots.Add(slot);
                }
            }
			catch { }

			foreach (var item in allSlots)
			{
				string slotHtml = "";

				if(!string.IsNullOrEmpty(item.entityImagePath))
				{
                    slotHtml = "<div class=\"image-container\"><a href=\"#Link#\" target=\"_blank\"><img src=\"#ImgSrc#\" alt=\"Image Description\" /></a></div>";
                    slotHtml = slotHtml.Replace("#ImgSrc#", item.entityImagePath);

					string link = getProviderLinkFromSlot(item, moodboardOut);
                    if (string.IsNullOrEmpty(link) || link == "null")
                    {
                        slotHtml = slotHtml.Replace("<a href=\"#Link#\">", "");
                        slotHtml = slotHtml.Replace("</a>", "");
                    }
                    else
                    {
                        slotHtml = slotHtml.Replace("#Link#", link);
                    }
                }
				
				//Colors
				if(item.slotId == "12" || item.slotId == "13" || item.slotId == "14" || item.slotId == "15")
				{
					var color = moodboardOut.ColorPalettes.FirstOrDefault();
					if(color != null)
					{
                        slotHtml = "<div class=\"image-container\"><a href=\"https://www.flugger.com\"><img src=\"#ImgSrc#\" alt=\"Image Description\" /></a></div>";
                        if (item.slotId == "12")
						{
							slotHtml = slotHtml.Replace("#ImgSrc#", color.ShadeColorLightData.ImagePath);
						}
						if (item.slotId == "13")
						{
							slotHtml = slotHtml.Replace("#ImgSrc#", color.ShadeColorMediumData.ImagePath);
						}
						if (item.slotId == "14")
						{
							slotHtml = slotHtml.Replace("#ImgSrc#", color.MainColorData.ImagePath);
						}
                        if (item.slotId == "15")
                        {
                            slotHtml = slotHtml.Replace("#ImgSrc#", color.ShadeColorDarkData.ImagePath);
                        }
                    }

				}

				contents = contents.Replace("#slot"+ item.slotId + "#", slotHtml);
            }

			string shoppingItems = "";
         //   string shoppingItem = @"<div class=""box-css"">
									//	<div class=""box-one"">
									//		<div class=""image-container-box"">
									//			<a href=""#Link#"">
									//				<img src=""#ImageLink#""
									//					 alt=""Image Description"" />
									//			</a>
									//		</div>
									//	</div>
									//	<div class=""text-box"">#Name#</div>
									//</div>";

            string shoppingItem = @"
				<div class=""product-box"">
                    <div class=""product-image-box"">
                        <img src=""#ImageLink#"" alt=""Image Description"" />
                    </div>
                    <div class=""text-box"">#Name#</div>
                </div>";

            //Products
            foreach (var item in moodboardOut.Products)
			{
				string sItem = shoppingItem;
				sItem = sItem.Replace("#Name#", item.Name);
				sItem = sItem.Replace("#ImageLink#", item.ImagePath);
				if (string.IsNullOrEmpty(item.ProductLink) || item.ProductLink == "null")
				{
					sItem = sItem.Replace("<a href=\"#Link#\">", "");
					sItem = sItem.Replace("</a>", "");
				}
				else
				{
					sItem = sItem.Replace("#Link#", item.ProductLink);
				}

                shoppingItems = shoppingItems + sItem;
			}

            //StyleImages
            foreach (var item in moodboardOut.StyleImages)
			{
				string sItem = shoppingItem;
				sItem = sItem.Replace("#Name#", item.StyleName);
				sItem = sItem.Replace("#ImageLink#", item.ImagePath);
				sItem = sItem.Replace("<a href=\"#Link#\">", "");
				sItem = sItem.Replace("</a>", "");

				shoppingItems = shoppingItems + sItem;
			}

			//Materials
			foreach (var item in moodboardOut.Materials)
			{
				string sItem = shoppingItem;
				sItem = sItem.Replace("#Name#", item.Name);
				sItem = sItem.Replace("#ImageLink#", item.ImagePath);
				if (string.IsNullOrEmpty(item.Link) || item.Link == "null")
				{
					sItem = sItem.Replace("<a href=\"#Link#\">", "");
					sItem = sItem.Replace("</a>", "");
				}
				else
				{
					sItem = sItem.Replace("#Link#", item.Link);
				}

				shoppingItems = shoppingItems + sItem;
			}

            string shoppingItemColorPalette = @"
				<div class=""product-box"">
					<div class=""product-image-box"">
						<div class=""palette-container"">
							<div class=""grid-item mainColor"" style=""background-image: url('#mainColor_Link#'); ""><label>#mainColor_ColorName#</label></div>
							<div class=""grid-item shadeColorLight"" style=""background-image: url('#shadeColorLight_Link#'); ""><label>#shadeColorLight_ColorName#</label></div>
							<div class=""grid-item shadeColorMedium"" style=""background-image: url('#shadeColorMedium_Link#'); ""><label>#shadeColorMedium_ColorName#</label></div>
							<div class=""grid-item shadeColorDark"" style=""background-image: url('#shadeColorDark_Link#'); ""><label>#shadeColorDark_ColorName#</label></div>
						</div>
					</div>
					<div class=""text-box"">
						#Number# / #Name#
					</div>
				</div>";

            //colorPalettes
            foreach (var item in moodboardOut.ColorPalettes)
            {
                string sItem = shoppingItemColorPalette;
                sItem = sItem.Replace("#Number#", item.Number.ToString());
                sItem = sItem.Replace("#Name#", item.Name);
                sItem = sItem.Replace("#mainColor_Link#", item.MainColorData.ImagePath);
                sItem = sItem.Replace("#shadeColorLight_Link#", item.ShadeColorLightData.ImagePath);
                sItem = sItem.Replace("#shadeColorMedium_Link#", item.ShadeColorMediumData.ImagePath);
				sItem = sItem.Replace("#shadeColorDark_Link#", item.ShadeColorDarkData.ImagePath);
                sItem = sItem.Replace("#mainColor_ColorName#", item.MainColorData.Name);
                sItem = sItem.Replace("#shadeColorLight_ColorName#", item.ShadeColorLightData.Name);
                sItem = sItem.Replace("#shadeColorMedium_ColorName#", item.ShadeColorMediumData.Name);
                sItem = sItem.Replace("#shadeColorDark_ColorName#", item.ShadeColorDarkData.Name);

                shoppingItems = shoppingItems + sItem;
            }

            contents = contents.Replace("#ShoppingItems#", shoppingItems);
            string header = "<div class=\"header\" style=\"padding: 20px;\">\r\n            <img src=\"https://res.cloudinary.com/dezushtwk/image/upload/v1692359070/ejhchz5mns3ee7egupvs.svg\" style=\"height: 20px;\">\r\n        </div>";

            var renderer = new ChromePdfRenderer();
            renderer.RenderingOptions.MarginTop = 0;
            renderer.RenderingOptions.MarginLeft = 0;
            renderer.RenderingOptions.MarginRight = 0;
            renderer.RenderingOptions.MarginBottom = 0;
            renderer.RenderingOptions.PaperSize = IronPdf.Rendering.PdfPaperSize.A4;
            renderer.RenderingOptions.PaperOrientation = IronPdf.Rendering.PdfPaperOrientation.Landscape;
            renderer.RenderingOptions.HtmlHeader = new HtmlHeaderFooter()
            {
                HtmlFragment = header,
            };
            var pdf = renderer.RenderHtmlAsPdf(contents);
            pdf.CompressImages(99);
            return File(pdf.BinaryData, "application/pdf", "MoodBoard.pdf");
		}

		private string getProviderLinkFromSlot(SlotInfo slotInfo, MoodboardOutDTO moodboarddata)
		{
			string link = string.Empty;

			if (slotInfo.entity == "product")
			{
				var product = moodboarddata.Products.Where(x => x.Id.ToString() == slotInfo.entityId.ToString()).FirstOrDefault();
				if (product != null)
				{
					link = product.ProductLink;
				}
			}
            else if (slotInfo.entity == "material")
            {
                var material = moodboarddata.Materials.Where(x => x.Id.ToString() == slotInfo.entityId.ToString()).FirstOrDefault();
                if (material != null)
                {
                    link = material.Link;
                }
            }

            return link;
		}

		#endregion Public methods
	}
}