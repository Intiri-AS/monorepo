using Intiri.API.Models;
using Intiri.API.Models.DTO.InputDTO;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Material;
using Intiri.API.Models.Product;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NLog;
using System.Text.Json;

namespace Intiri.API.DataAccess.SeedData
{
	public class SeedData
	{
		public static async Task SeedTestData(
			IUnitOfWork unitOfWork,
			UserManager<User> userManager,
			RoleManager<Role> roleManager)
		{
			if (await userManager.Users.AnyAsync())
			{
				return;
			}

			await SeedUsers(userManager, roleManager);
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
			await SeedProjects(unitOfWork);
			await SeedRoomDetails(unitOfWork);
		}

		public static async Task SeedUsers(UserManager<User> userManager, RoleManager<Role> roleManager)
		{
			//create users
			string usersData = await File.ReadAllTextAsync("DataAccess/SeedData/UserSeedData.json");
			List<User> users = JsonSerializer.Deserialize<List<User>>(usersData);
			if (users == null) return;

			string commonPassword = "Pa$$w0rd";

			var roles = new List<Role>
			{
				new Role{Name = "EndUser"},
				new Role{Name = "Admin"},
				new Role{Name = "Designer"},
			};

			foreach (var role in roles)
			{
				await roleManager.CreateAsync(role);
			}

			foreach (User user in users)
			{
				user.UserName = user.UserName.ToLower();

				await userManager.CreateAsync(user, commonPassword);
				await userManager.AddToRoleAsync(user, "EndUser");
			}
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
			List<Product> products = JsonSerializer.Deserialize<List<Product>>(productData);

			foreach (Product product in products)
			{
				ProductType productType = await unitOfWork.ProductTypeRepository.SingleOrDefaultAsync(pt => pt.Id == product.ProductType.Id);
				product.ProductType = productType;

				Style style = await unitOfWork.StyleRepository.SingleOrDefaultAsync(s => s.Id == product.StyleId);
				product.Style = style;

				unitOfWork.ProductRepository.Insert(product);
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

			List<ProjectInDTO> projectInDTOs = 
				JsonSerializer.Deserialize<List<ProjectInDTO>>(projectsData);

			foreach (ProjectInDTO inDTO in projectInDTOs)
			{
				Project project = new()
				{
					Name = inDTO.Name,
					BudgetId = inDTO.BudgetId,
					StyleImages = (ICollection<StyleImage>)await unitOfWork.StyleImageRepository
						.GetStyleImagesByIdsListAsync(inDTO.StyleImageIds),
					ColorPalette = await unitOfWork.ColorPaletteRepository
						.SingleOrDefaultAsync(cp => cp.Id == inDTO.ColorPaletteId),
					Room = await unitOfWork.RoomRepository
						.SingleOrDefaultAsync(r => r.Id == inDTO.RoomId),
					Moodboard = await unitOfWork.MoodboardRepository
						.SingleOrDefaultAsync(m => m.Id == inDTO.MoodboardId)
				};
				unitOfWork.ProjectRepository.Insert(project);
			}
			await unitOfWork.SaveChanges();
		}

		public static async Task SeedMoodboards(IUnitOfWork unitOfWork)
		{
			string moodboardsData = 
				await File.ReadAllTextAsync("DataAccess/SeedData/MoodboardsSeedData.json");

			List<MoodboardInDTO> moodboardInDTOs = 
				JsonSerializer.Deserialize<List<MoodboardInDTO>>(moodboardsData);

			foreach (MoodboardInDTO inDTO in moodboardInDTOs)
			{
				Moodboard moodboard = new()
				{
					Name = inDTO.Name,
					Description = inDTO.Description,
					Designer = inDTO.Designer,
					Style = await unitOfWork.StyleRepository
						.SingleOrDefaultAsync(s => s.Id == inDTO.StyleId),
					Room = await unitOfWork.RoomRepository
						.SingleOrDefaultAsync(r => r.Id == inDTO.RoomId),
					Materials = (ICollection<Material>)await unitOfWork.MaterialRepository
						.GetMaterialsByIdsListAsync(inDTO.MaterialIds),
					ColorPalettes = (ICollection<ColorPalette>) await unitOfWork.ColorPaletteRepository
						.GetColorPalettesByIdsListAsync(inDTO.ColorPaletteIds),
					Products = (ICollection<Product>)await unitOfWork.ProductRepository
						.GetProductsByIdsListAsync(inDTO.ProductIds)
				};

				unitOfWork.MoodboardRepository.Insert(moodboard);

				await unitOfWork.SaveChanges();
			}
		}
	}
}
