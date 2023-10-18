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
using Intiri.API.Models.Payment;
using Intiri.API.Models.Rating;
using System.Reflection.Emit;

namespace Intiri.API.DataAccess
{
    public class DataContext
        : IdentityDbContext<
            User,
            Role,
            int,
            IdentityUserClaim<int>,
            UserRole,
            IdentityUserLogin<int>,
            IdentityRoleClaim<int>,
            IdentityUserToken<int>
        >
    {
        #region ctors

        public DataContext(DbContextOptions options)
            : base(options)
        {
            this.Database.SetCommandTimeout(TimeSpan.FromSeconds(120));
        }

        #endregion ctors

        public DbSet<Style> Styles { get; set; }
        public DbSet<StyleImage> StyleImages { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<RoomType> RoomTypes { get; set; }
        public DbSet<Material> Materials { get; set; }
        public DbSet<MaterialType> MaterialTypes { get; set; }
        public DbSet<Models.IntiriColor.Color> Colors { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<ColorPalette> ColorPalettes { get; set; }
        public DbSet<RoomDetails> RoomDetails { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Moodboard> Moodboards { get; set; }
        public DbSet<Partner> Partners { get; set; }
        public DbSet<ShareMoodboard> ShareMoodboards { get; set; }
        public DbSet<DesignerRating> DesignerRatings { get; set; }
        public DbSet<DesignerReview> DesignerReviews { get; set; }
        public DbSet<ConsultationPayment> ConsultationPayment { get; set; }
        public DbSet<ColorNCS> ColorNCS { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder
                .Entity<User>()
                .HasMany(ur => ur.Roles)
                .WithOne(u => u.User)
                .HasForeignKey(ur => ur.UserId)
                .IsRequired();

            builder.Entity<EndUser>().HasMany(p => p.CreatedProjects).WithOne(eu => eu.EndUser);

            builder
                .Entity<ClientMoodboard>()
                .HasOne(rd => rd.Project)
                .WithMany(cm => cm.ProjectMoodboards)
                .OnDelete(DeleteBehavior.ClientCascade);

            builder
                .Entity<PartnerContact>()
                .HasOne(p => p.Partner)
                .WithMany(pc => pc.PartnerContacts);

            builder
                .Entity<Role>()
                .HasMany(ur => ur.Users)
                .WithOne(u => u.Role)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();

            builder
                .Entity<Product>()
                .HasOne(p => p.ProductType)
                .WithMany(pt => pt.Products)
                .OnDelete(DeleteBehavior.SetNull);

            builder
                .Entity<Moodboard>()
                .HasMany<ColorPalette>(m => m.ColorPalettes)
                .WithMany(cp => cp.Moodboards)
                .UsingEntity(cm => cm.ToTable("MoodboardColorPalette"));

            builder
                .Entity<Moodboard>()
                .HasMany<Material>(mood => mood.Materials)
                .WithMany(mat => mat.Moodboards)
                .UsingEntity(mm => mm.ToTable("MoodboardMaterial"));

            builder
                .Entity<Moodboard>()
                .HasMany<Product>(mood => mood.Products)
                .WithMany(prod => prod.Moodboards)
                .UsingEntity(mp => mp.ToTable("MoodboardProduct"));

            builder
                .Entity<Moodboard>()
                .HasMany<StyleImage>(img => img.StyleImages)
                .WithMany(si => si.Moodboards)
                .UsingEntity(mp => mp.ToTable("MoodboardStyleImage"));

            builder.Entity<ShareMoodboard>().HasKey(k => new { k.SenderUserId, k.RecipientUserId });

            builder
                .Entity<ShareMoodboard>()
                .HasOne(s => s.SenderUser)
                .WithMany(l => l.SendMoodboards)
                .HasForeignKey(s => s.SenderUserId)
                .OnDelete(DeleteBehavior.NoAction);

            builder
                .Entity<ShareMoodboard>()
                .HasOne(s => s.RecipientUser)
                .WithMany(l => l.ReceivedMoodboards)
                .HasForeignKey(s => s.RecipientUserId)
                .OnDelete(DeleteBehavior.Cascade);

            builder
                .Entity<ChatMessage>()
                .HasOne(m => m.Sender)
                .WithMany(u => u.MessagesSent)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .Entity<ChatMessage>()
                .HasOne(m => m.Recipient)
                .WithMany(u => u.MessagesReceived)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .Entity<ConsultationPayment>()
                .HasOne(p => p.Payer)
                .WithMany(eu => eu.ConsultationPayments)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .Entity<ConsultationPayment>()
                .HasOne(p => p.Receiver)
                .WithMany(d => d.ConsultationPaymentsReceived)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .Entity<Consultation>()
                .HasData(
                    new Consultation
                    {
                        Id = 1,
                        Duration = 60,
                        Price = 950
                    }
                );

            // Payment user dependency
            builder
                .Entity<Designer>()
                .HasMany(s => s.ConsultationPaymentsReceived)
                .WithOne(l => l.Receiver)
                .HasForeignKey(s => s.ReceiverId)
                .OnDelete(DeleteBehavior.Cascade);

            builder
                .Entity<EndUser>()
                .HasMany(s => s.ConsultationPayments)
                .WithOne(l => l.Payer)
                .HasForeignKey(s => s.PayerId)
                .OnDelete(DeleteBehavior.Restrict);

            // Moodboard payment dependency
            builder
                .Entity<ClientMoodboard>()
                .HasOne(c => c.ConsultationPaymentSend)
                .WithOne(m => m.Moodboard)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .Entity<ClientMoodboard>()
                .HasOne(c => c.ConsultationPaymentReceive)
                .WithOne(m => m.MoodboardOffer)
                .OnDelete(DeleteBehavior.Restrict);

            // StyleImage and room dependency
            builder
                .Entity<StyleImage>()
                .HasOne(c => c.Room)
                .WithMany(m => m.StyleImages)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .Entity<Room>()
                .HasMany(si => si.StyleImages)
                .WithOne(r => r.Room)
                .HasForeignKey(r => r.RoomId)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .Entity<Product>()
                .HasOne(s => s.Partner)
                .WithMany(p => p.Products)
                .OnDelete(DeleteBehavior.ClientCascade);
        }
    }
}
