using Intiri.API.Models;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Material;
using Intiri.API.Models.Room;
using Intiri.API.Models.Style;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;

namespace Intiri.API.DataAccess.SeedData
{
	public class SeedData
	{
		public static async Task SeedTestData(IUnitOfWork unitOfWork, UserManager<User> userManager, RoleManager<Role> roleManager)
		{
			await SeedUsers(userManager, roleManager);
			await SeedStyles(unitOfWork);
			await SeedRoomTypes(unitOfWork);
			await SeedColors(unitOfWork);
			await SeedStylesImages(unitOfWork);
			await SeedRooms(unitOfWork);
			await SeedColorPalletes(unitOfWork);
		}

		public static async Task SeedUsers(UserManager<User> userManager, RoleManager<Role> roleManager)
		{
			if (await userManager.Users.AnyAsync())
			{
				return;
			}

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
			//create users
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

		public static async Task SeedColorPalletes(IUnitOfWork unitOfWork)
		{
			string colorPalleteData = await File.ReadAllTextAsync("DataAccess/SeedData/ColorPalleteData.json");
			List<ColorPallete> colorPalletes = JsonSerializer.Deserialize<List<ColorPallete>>(colorPalleteData);

			foreach (ColorPallete colorPallete in colorPalletes)
			{
				unitOfWork.ColorPalleteRepository.Insert(colorPallete);
			}

			await unitOfWork.SaveChanges();
		}
	}
}
