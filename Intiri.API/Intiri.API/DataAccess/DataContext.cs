using Intiri.API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Intiri.API.Models.Style;
using Intiri.API.Models.Room;
using Intiri.API.Models.Material;
using Intiri.API.Models.IntiriColor;
using Intiri.API.Models.Product;
using Intiri.API.Models.Project;
using Intiri.API.Models.Moodboard;
using Intiri.API.Models.ChatMessage;

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
		public DbSet<Color> Colors { get; set; }
		public DbSet<Product> Products { get; set; }
		public DbSet<ProductType> ProductTypes { get; set; }
		public DbSet<ColorPalette> ColorPalettes { get; set; }
		public DbSet<RoomDetails> RoomDetails { get; set; }
		public DbSet<Project> Projects { get; set; }
		public DbSet<Moodboard> Moodboards { get; set; }
		public DbSet<Partner> Partners { get; set; }
		public DbSet<ShareMoodboard> ShareMoodboards { get; set; }

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			builder.Entity<User>()
				.HasMany(ur => ur.Roles)
				.WithOne(u => u.User)
				.HasForeignKey(ur => ur.UserId)
				.IsRequired();

			builder.Entity<EndUser>()
				.HasMany(p => p.CreatedProjects)
				.WithOne(eu => eu.EndUser);

			builder.Entity<Designer>()
				.HasMany(m => m.CreatedMoodboards)
				.WithOne(d => d.Designer);

			builder.Entity<PartnerContact>()
				.HasOne(p => p.Partner)
				.WithMany(pc => pc.PartnerContacts);


			builder.Entity<Role>()
				.HasMany(ur => ur.Users)
				.WithOne(u => u.Role)
				.HasForeignKey(ur => ur.RoleId)
				.IsRequired();

			builder.Entity<Product>()
				.HasOne(p => p.ProductType)
				.WithMany(pt => pt.Products)
				.OnDelete(DeleteBehavior.SetNull);

			builder.Entity<Moodboard>()
				.HasMany<ColorPalette>(m => m.ColorPalettes)
				.WithMany(cp => cp.Moodboards)
				.UsingEntity(cm => cm.ToTable("MoodboardColorPalette"));

			builder.Entity<Moodboard>()
				.HasMany<Material>(mood => mood.Materials)
				.WithMany(mat => mat.Moodboards)
				.UsingEntity(mm => mm.ToTable("MoodboardMaterial"));

			builder.Entity<Moodboard>()
				.HasMany<Product>(mood => mood.Products)
				.WithMany(prod => prod.Moodboards)
				.UsingEntity(mp => mp.ToTable("MoodboardProduct"));

			builder.Entity<ShareMoodboard>()
				.HasKey(k => new { k.SenderUserId, k.RecipientUserId });

			builder.Entity<ShareMoodboard>()
				.HasOne(s => s.SenderUser)
				.WithMany(l => l.SendMoodboards)
				.HasForeignKey(s => s.SenderUserId)
				.OnDelete(DeleteBehavior.NoAction);

			builder.Entity<ShareMoodboard>()
				.HasOne(s => s.RecipientUser)
				.WithMany(l => l.ReceivedMoodboards)
				.HasForeignKey(s => s.RecipientUserId)
				.OnDelete(DeleteBehavior.Cascade);

			builder.Entity<ChatMessage>()
				   .HasOne(m => m.Sender)
				   .WithMany(u => u.MessagesSent)
				   .OnDelete(DeleteBehavior.Restrict);

			builder.Entity<ChatMessage>()
				   .HasOne(m => m.Recipient)
				   .WithMany(u => u.MessagesReceived)
				   .OnDelete(DeleteBehavior.Restrict);
		}
	}
}
