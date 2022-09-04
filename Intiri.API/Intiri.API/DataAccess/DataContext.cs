﻿using Intiri.API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Intiri.API.Models.Style;
using Intiri.API.Models.Room;
using Intiri.API.Models.Material;

namespace Intiri.API.DataAccess
{
	public class DataContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>, UserRole,
								IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
	{
		#region ctors

		public DataContext(DbContextOptions options) : base(options)
		{

		}

		#endregion ctors

		public DbSet<Style> Styles { get; set; }
		public DbSet<StyleImage> StyleImages { get; set; }
		public DbSet<Room> Rooms { get; set; }
		public DbSet<RoomType> RoomTypes { get; set; }
		public DbSet<Material> Materials { get; set; }
		public DbSet<MaterialType> MaterialTypes { get; set; }

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			builder.Entity<User>()
				.HasMany(ur => ur.Roles)
				.WithOne(u => u.User)
				.HasForeignKey(ur => ur.UserId)
				.IsRequired();

			builder.Entity<Role>()
				.HasMany(ur => ur.Users)
				.WithOne(u => u.Role)
				.HasForeignKey(ur => ur.RoleId)
				.IsRequired();
		}
	}
}
