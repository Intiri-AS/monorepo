using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class DesignerRatingAndReview : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DesignerRatings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OneStar = table.Column<int>(type: "int", nullable: false),
                    TwoStar = table.Column<int>(type: "int", nullable: false),
                    ThreeStar = table.Column<int>(type: "int", nullable: false),
                    FourStar = table.Column<int>(type: "int", nullable: false),
                    FiveStar = table.Column<int>(type: "int", nullable: false),
                    AverageRating = table.Column<double>(type: "float", nullable: false),
                    DesignerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DesignerRatings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DesignerRatings_AspNetUsers_DesignerId",
                        column: x => x.DesignerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DesignerReviews",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Rating = table.Column<int>(type: "int", nullable: false),
                    Comment = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RatingDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DesignerId = table.Column<int>(type: "int", nullable: false),
                    EndUserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DesignerReviews", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DesignerReviews_AspNetUsers_DesignerId",
                        column: x => x.DesignerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DesignerReviews_AspNetUsers_EndUserId",
                        column: x => x.EndUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_DesignerRatings_DesignerId",
                table: "DesignerRatings",
                column: "DesignerId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DesignerReviews_DesignerId",
                table: "DesignerReviews",
                column: "DesignerId");

            migrationBuilder.CreateIndex(
                name: "IX_DesignerReviews_EndUserId",
                table: "DesignerReviews",
                column: "EndUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DesignerRatings");

            migrationBuilder.DropTable(
                name: "DesignerReviews");
        }
    }
}
