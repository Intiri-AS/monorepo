using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class ProjectAndMoodboard : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MoodboardId",
                table: "Products",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MoodboardId",
                table: "Materials",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Moodboards",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Designer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StyleId = table.Column<int>(type: "int", nullable: true),
                    RoomId = table.Column<int>(type: "int", nullable: true),
                    ColorPalleteId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Moodboards", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Moodboards_ColorPalletes_ColorPalleteId",
                        column: x => x.ColorPalleteId,
                        principalTable: "ColorPalletes",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Moodboards_Rooms_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Rooms",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Moodboards_Styles_StyleId",
                        column: x => x.StyleId,
                        principalTable: "Styles",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ColorPalleteId = table.Column<int>(type: "int", nullable: true),
                    RoomId = table.Column<int>(type: "int", nullable: true),
                    BudgetId = table.Column<int>(type: "int", nullable: false),
                    MoodboardId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Projects_ColorPalletes_ColorPalleteId",
                        column: x => x.ColorPalleteId,
                        principalTable: "ColorPalletes",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Projects_Rooms_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Rooms",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ProjectStyleImage",
                columns: table => new
                {
                    ProjectsId = table.Column<int>(type: "int", nullable: false),
                    StyleImagesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectStyleImage", x => new { x.ProjectsId, x.StyleImagesId });
                    table.ForeignKey(
                        name: "FK_ProjectStyleImage_Projects_ProjectsId",
                        column: x => x.ProjectsId,
                        principalTable: "Projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProjectStyleImage_StyleImages_StyleImagesId",
                        column: x => x.StyleImagesId,
                        principalTable: "StyleImages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RoomDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Shape = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Size = table.Column<double>(type: "float", nullable: false),
                    ProjectId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoomDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RoomDetails_Projects_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "Projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Products_MoodboardId",
                table: "Products",
                column: "MoodboardId");

            migrationBuilder.CreateIndex(
                name: "IX_Materials_MoodboardId",
                table: "Materials",
                column: "MoodboardId");

            migrationBuilder.CreateIndex(
                name: "IX_Moodboards_ColorPalleteId",
                table: "Moodboards",
                column: "ColorPalleteId");

            migrationBuilder.CreateIndex(
                name: "IX_Moodboards_RoomId",
                table: "Moodboards",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_Moodboards_StyleId",
                table: "Moodboards",
                column: "StyleId");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_ColorPalleteId",
                table: "Projects",
                column: "ColorPalleteId");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_RoomId",
                table: "Projects",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectStyleImage_StyleImagesId",
                table: "ProjectStyleImage",
                column: "StyleImagesId");

            migrationBuilder.CreateIndex(
                name: "IX_RoomDetails_ProjectId",
                table: "RoomDetails",
                column: "ProjectId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Materials_Moodboards_MoodboardId",
                table: "Materials",
                column: "MoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Moodboards_MoodboardId",
                table: "Products",
                column: "MoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Materials_Moodboards_MoodboardId",
                table: "Materials");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_Moodboards_MoodboardId",
                table: "Products");

            migrationBuilder.DropTable(
                name: "Moodboards");

            migrationBuilder.DropTable(
                name: "ProjectStyleImage");

            migrationBuilder.DropTable(
                name: "RoomDetails");

            migrationBuilder.DropTable(
                name: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Products_MoodboardId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Materials_MoodboardId",
                table: "Materials");

            migrationBuilder.DropColumn(
                name: "MoodboardId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "MoodboardId",
                table: "Materials");
        }
    }
}
