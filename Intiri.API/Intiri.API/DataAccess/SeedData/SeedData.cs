using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.DTO.InputDTO.Moodboard;
using Intiri.API.Models.DTO.OutputDTO;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Material;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.Product;
using Intiri.API.Models.Project;
using Intiri.API.Models.Rating;
using Intiri.API.Models.RoleNames;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Intiri.API.Models.UserLanguage;
using Intiri.API.Services;
using Intiri.API.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NLog;
using System.ComponentModel.Design;
using System.Text.Json;

namespace Intiri.API.DataAccess.SeedData
{
	public class SeedData
	{
		public static async Task SeedTestData(
			IAccountService accountService,
			IUnitOfWork unitOfWork,
			UserManager<User> userManager,
			RoleManager<Role> roleManager)
		{
			if (await userManager.Users.AnyAsync())
			{
				return;
			}

			await SeedPartners(unitOfWork);
			await SeedUsers(accountService, userManager, roleManager, unitOfWork);
			await SeedStyles(unitOfWork);
			await SeedRoomTypes(unitOfWork);
			await SeedMaterialTypes(unitOfWork);
			await SeedProductTypes(unitOfWork);
			await SeedColors(unitOfWork);
			await SeedStylesImages(unitOfWork);
			await SeedRooms(unitOfWork);
			await SeedMaterials(unitOfWork);
			await SeedProducts(unitOfWork);
			await SeedColorPalettes(unitOfWork);
			await SeedMoodboards(unitOfWork);
			//await SeedProjects(unitOfWork);
			//await SeedRoomDetails(unitOfWork);
		}

		public static async Task SeedUsers(IAccountService accountService, UserManager<User> userManager, RoleManager<Role> roleManager, IUnitOfWork unitOfWork)
		{
			//create users
			string usersData = await File.ReadAllTextAsync("DataAccess/SeedData/UserSeedData.json");
			List<User> users = JsonSerializer.Deserialize<List<User>>(usersData);
			if (users == null) return;

			var roles = new List<Role>
			{
				new Role{Name = RoleNames.Admin},
				new Role{Name = RoleNames.FreeEndUser},
				new Role{Name = RoleNames.PremiumEndUser},
				new Role{Name = RoleNames.InternalDesigner},
				new Role{Name = RoleNames.ExternalDesigner},
				new Role{Name = RoleNames.Partner},
			};

			foreach (var role in roles)
			{
				await roleManager.CreateAsync(role);
			}

			User u1 = new User() { FirstName = "Dina", LastName = "Admin", CountryCode = "47", PhoneNumber = "1231231", UserName = "471231231" };
			Designer u2 = new Designer() { FirstName = "Cora", LastName = "InternalDesigner", CountryCode = "47", PhoneNumber = "1231232", UserName = "471231232", Language = Language.Norway };
			u2.Description = "I'm a top-level designer, with more than 13 year experience who is addicted to the visual arts.";
			Designer u3 = new Designer() { FirstName = "Drina", LastName = "InternalDesigner", CountryCode = "47", PhoneNumber = "1231233", UserName = "471231233", Language = Language.NorwayEnglish };
			u3.Description = "Professional traditional designer with more than 10-year experience who is addicted to minimal and classical.";
			EndUser u4 = new EndUser() { FirstName = "Tod", LastName = "FreeEndUser", CountryCode = "47", PhoneNumber = "1231234", UserName = "471231234" };
			EndUser u5 = new EndUser() { FirstName = "Moss", LastName = "FreeEndUser", CountryCode = "47", PhoneNumber = "1231235", UserName = "471231235" };
			PartnerContact u6 = new PartnerContact() { FirstName = "Day", LastName = "Partner", CountryCode = "47", PhoneNumber = "1231236", UserName = "471231236" };
			u6.Partner = await unitOfWork.PartnerRepository.GetByID(1);

			EndUser uChanette = new EndUser() { FirstName = "Chanette", LastName = "Suopanki Blindheim", CountryCode = "47", PhoneNumber = "95970309", UserName = "4795970309" };

			await accountService.CreateUserAsync(u1);
			await accountService.CreateUserAsync(u2);
			await accountService.CreateUserAsync(u3);
			await accountService.CreateUserAsync(u4);
			await accountService.CreateUserAsync(u5);
			await accountService.CreateUserAsync(u6);
			await accountService.CreateUserAsync(uChanette);

			await userManager.AddToRoleAsync(u1, RoleNames.Admin);
			await userManager.AddToRoleAsync(u2, RoleNames.InternalDesigner);
			await userManager.AddToRoleAsync(u3, RoleNames.InternalDesigner);
			await userManager.AddToRoleAsync(u4, RoleNames.FreeEndUser);
			await userManager.AddToRoleAsync(u5, RoleNames.FreeEndUser);
			await userManager.AddToRoleAsync(u6, RoleNames.Partner);
			await userManager.AddToRoleAsync(uChanette, RoleNames.FreeEndUser);

			u6.Partner.PartnerContacts.Add(u6);

			// Rating
			DesignerRating u2DesignerRating = new DesignerRating();
			u2DesignerRating.Designer = u2;
			DesignerRating u3DesignerRating = new DesignerRating();
			u2DesignerRating.Designer = u3;
			unitOfWork.DesignerRatingRepository.Insert(u2DesignerRating);
			unitOfWork.DesignerRatingRepository.Insert(u3DesignerRating);
			u2.DesignerRating = u2DesignerRating;
			u3.DesignerRating = u3DesignerRating;

			//Inspiration
			await SeedInspirationFiles(unitOfWork, u4, u5);

			await unitOfWork.SaveChanges();
		}

		public static async Task SeedPartners(IUnitOfWork unitOfWork)
		{
			string partnersData = await File.ReadAllTextAsync("DataAccess/SeedData/PartnerSeedData.json");
			List<Partner> partners = JsonSerializer.Deserialize<List<Partner>>(partnersData);

			foreach (Partner partner in partners)
			{
				unitOfWork.PartnerRepository.Insert(partner);
			}

			await unitOfWork.SaveChanges();
		}

		public static async Task SeedStyles(IUnitOfWork unitOfWork)
		{
			string stylesData = await File.ReadAllTextAsync("DataAccess/SeedData/StylesSeedData.json");
			List<Style> styles = JsonSerializer.Deserialize<List<Style>>(stylesData);

			foreach (Style style in styles)
			{
				unitOfWork.StyleRepository.Insert(style);
			}

			await unitOfWork.SaveChanges();
		}

		public static async Task SeedStylesImages(IUnitOfWork unitOfWork)
		{
			string styleImageData = await File.ReadAllTextAsync("DataAccess/SeedData/StyleImagesSeedData.json");

			List<StyleImage> styleImages = JsonSerializer.Deserialize<List<StyleImage>>(styleImageData);

			foreach (StyleImage styleImage in styleImages)
			{
				Style style = await unitOfWork.StyleRepository.SingleOrDefaultAsync(s => s.Id == styleImage.Id);
				styleImage.Style = style;

				unitOfWork.StyleImageRepository.Insert(styleImage);
			}

			await unitOfWork.SaveChanges();
		}

		public static async Task SeedRoomTypes(IUnitOfWork unitOfWork)
		{
			string roomTypeData = await File.ReadAllTextAsync("DataAccess/SeedData/RoomTypesSeedData.json");
			List<RoomType> roomTypes = JsonSerializer.Deserialize<List<RoomType>>(roomTypeData);

			foreach (RoomType roomType in roomTypes)
			{
				unitOfWork.RoomTypeRepository.Insert(roomType);
			}

			await unitOfWork.SaveChanges();
		}

		public static async Task SeedRooms(IUnitOfWork unitOfWork)
		{
			string roomData = await File.ReadAllTextAsync("DataAccess/SeedData/RoomsSeedData.json");
			List<Room> rooms = JsonSerializer.Deserialize<List<Room>>(roomData);

			foreach (Room room in rooms)
			{
				RoomType roomType = await unitOfWork.RoomTypeRepository.SingleOrDefaultAsync(rt => rt.Id == room.RoomTypeId);
				room.RoomType = roomType;

				unitOfWork.RoomRepository.Insert(room);
			}

			await unitOfWork.SaveChanges();
		}

		public static async Task SeedMaterialTypes(IUnitOfWork unitOfWork)
		{
			string materialTypeData = await File.ReadAllTextAsync("DataAccess/SeedData/MaterialTypesSeedData.json");
			List<MaterialType> materialTypes = JsonSerializer.Deserialize<List<MaterialType>>(materialTypeData);

			foreach (MaterialType materialType in materialTypes)
			{
				unitOfWork.MaterialTypeRepository.Insert(materialType);
			}
			await unitOfWork.SaveChanges();
		}

		public static async Task SeedMaterials(IUnitOfWork unitOfWork)
		{
			string materialsData = await File.ReadAllTextAsync("DataAccess/SeedData/MaterialsSeedData.json");
			List<Material> materials = JsonSerializer.Deserialize<List<Material>>(materialsData);

			foreach (Material material in materials)
			{
				MaterialType materialType = await unitOfWork.MaterialTypeRepository.SingleOrDefaultAsync(mt => mt.Id == material.MaterialTypeId);
				material.MaterialType = materialType;

				unitOfWork.MaterialRepository.Insert(material);
			}

			await unitOfWork.SaveChanges();
		}

		public static async Task SeedProductTypes(IUnitOfWork unitOfWork)
		{
			string productTypesData = await File.ReadAllTextAsync("DataAccess/SeedData/ProductTypesSeedData.json");
			List<ProductType> productTypes = JsonSerializer.Deserialize<List<Models.Product.ProductType>>(productTypesData);

			foreach (ProductType productType in productTypes)
			{
				unitOfWork.ProductTypeRepository.Insert(productType);
			}
			await unitOfWork.SaveChanges();
		}

		public static async Task SeedProducts(IUnitOfWork unitOfWork)
		{

			string productData = await File.ReadAllTextAsync("DataAccess/SeedData/ProductsSeedData.json");
			List<ProductInDTO> inDTO = JsonSerializer.Deserialize<List<ProductInDTO>>(productData);
			List<Product> products = JsonSerializer.Deserialize<List<Product>>(productData);

			Partner partner = await unitOfWork.PartnerRepository.GetByID(1);

			for (int i = 0; i < products.Count; i++)
			{
				Product product = products[i];
				products[i].ProductType = await unitOfWork.ProductTypeRepository.SingleOrDefaultAsync(pt => pt.Id == product.ProductType.Id);
				product.Material = await unitOfWork.MaterialRepository.GetByID(inDTO[i].MaterialId);
				product.Partner = partner;

				unitOfWork.ProductRepository.Insert(product);
				partner.Products.Add(product);
			}

			await unitOfWork.SaveChanges();
		}

		public static async Task SeedColors(IUnitOfWork unitOfWork)
		{
			string colorData = await File.ReadAllTextAsync("DataAccess/SeedData/ColorsSeedData.json");
			List<Color> colors = JsonSerializer.Deserialize<List<Color>>(colorData);

			foreach (Color color in colors)
			{
				unitOfWork.ColorRepository.Insert(color);
			}

			await unitOfWork.SaveChanges();
		}

		public static async Task SeedColorPalettes(IUnitOfWork unitOfWork)
		{
			string colorPaletteData = await File.ReadAllTextAsync("DataAccess/SeedData/ColorPaletteData.json");
			List<ColorPalette> colorPalettes = JsonSerializer.Deserialize<List<ColorPalette>>(colorPaletteData);

			foreach (ColorPalette colorPalette in colorPalettes)
			{
				unitOfWork.ColorPaletteRepository.Insert(colorPalette);
			}

			await unitOfWork.SaveChanges();
		}

		public static async Task SeedRoomDetails(IUnitOfWork unitOfWork)
		{
			string roomDetailsData = await File.ReadAllTextAsync("DataAccess/SeedData/RoomDetailsSeedData.json");
			List<RoomDetails> roomDetails = JsonSerializer.Deserialize<List<RoomDetails>>(roomDetailsData);

			foreach (RoomDetails roomDetail in roomDetails)
			{
				unitOfWork.RoomDetailsRepository.Insert(roomDetail);
			}

			await unitOfWork.SaveChanges();
		}

		public static async Task SeedProjects(IUnitOfWork unitOfWork)
		{
			string projectsData =
				await File.ReadAllTextAsync("DataAccess/SeedData/ProjectsSeedData.json");

			List<Project> projects =
				JsonSerializer.Deserialize<List<Project>>(projectsData);
			foreach (Project project in projects)
			{
				unitOfWork.ProjectRepository.Insert(project);
				project.EndUser = await unitOfWork.UserRepository.GetEndUserByIdAsync(project.EndUserId);
				project.Room = await unitOfWork.RoomRepository.GetByID(1);
				project.StyleImages.Add(await unitOfWork.StyleImageRepository.GetByID(1));
				project.StyleImages.Add(await unitOfWork.StyleImageRepository.GetByID(2));
				project.StyleImages.Add(await unitOfWork.StyleImageRepository.GetByID(3));
				project.ColorPalettes.Add(await unitOfWork.ColorPaletteRepository.GetByID(1));
				project.ColorPalettes.Add(await unitOfWork.ColorPaletteRepository.GetByID(3));
				//Moodboard moodboard = await unitOfWork.MoodboardRepository.GetByID(2);
				//project.ProjectMoodboards.Add(moodboard);
				//moodboard.Project = project;
			}
			await unitOfWork.SaveChanges();
		}

		public static async Task SeedMoodboards(IUnitOfWork unitOfWork)
		{
			string moodboardsData =
				await File.ReadAllTextAsync("DataAccess/SeedData/MoodboardsSeedData.json");

			List<MoodboardInDTO> inDTO =
				JsonSerializer.Deserialize<List<MoodboardInDTO>>(moodboardsData);

			List<Moodboard> moodboards =
				JsonSerializer.Deserialize<List<Moodboard>>(moodboardsData);

			for (int i = 0; i < moodboards.Count; i++)
			{
				unitOfWork.MoodboardRepository.Insert(moodboards[i]);

				moodboards[i].Designer = await unitOfWork.UserRepository.GetDesignerUserByIdAsync(inDTO[i].DesignerId);
				moodboards[i].Designer.CreatedMoodboards.Add(moodboards[i]);

				moodboards[i].Style = await unitOfWork.StyleRepository.SingleOrDefaultAsync(s => s.Id == inDTO[i].StyleId);
				moodboards[i].Room = await unitOfWork.RoomRepository.SingleOrDefaultAsync(r => r.Id == inDTO[i].RoomId);
				moodboards[i].Materials = (ICollection<Material>)await unitOfWork.MaterialRepository.GetMaterialsByIdsListAsync(inDTO[i].MaterialIds);
				moodboards[i].ColorPalettes = (ICollection<ColorPalette>)await unitOfWork.ColorPaletteRepository.GetColorPalettesByIdsListAsync(inDTO[i].ColorPaletteIds);
				moodboards[i].Products = (ICollection<Product>)await unitOfWork.ProductRepository.GetProductsByIdsListAsync(inDTO[i].ProductIds);
			}

			await unitOfWork.SaveChanges();
		}

		public static async Task SeedInspirationFiles(IUnitOfWork unitOfWork, EndUser u4, EndUser u5)
		{
			string inspirationsData = await File.ReadAllTextAsync("DataAccess/SeedData/InspirationsSeedData.json");

			List<Inspiration> inspirations = JsonSerializer.Deserialize<List<Inspiration>>(inspirationsData);

			for (int i = 0; i < 4; i++)
			{
				unitOfWork.InspirationRepository.Insert(inspirations[i]);
				inspirations[i].EndUser = u4;
				u4.Inspirations.Add(inspirations[i]);
			}

			for (int i = 4; i < 8; i++)
			{
				unitOfWork.InspirationRepository.Insert(inspirations[i]);
				inspirations[i].EndUser = u5;
				u5.Inspirations.Add(inspirations[i]);
			}

			await unitOfWork.SaveChanges();
		}
	}
}
