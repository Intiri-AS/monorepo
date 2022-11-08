using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class ModifyColorMoodboardRoomDetailsModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ColorPalettes_Projects_ProjectId",
                table: "ColorPalettes");

            migrationBuilder.DropForeignKey(
                name: "FK_Moodboards_Moodboards_SourceMoodboardId",
                table: "Moodboards");

            migrationBuilder.DropForeignKey(
                name: "FK_RoomDetails_Moodboards_MoodboardId",
                table: "RoomDetails");

            migrationBuilder.DropIndex(
                name: "IX_RoomDetails_MoodboardId",
                table: "RoomDetails");

            migrationBuilder.DropIndex(
                name: "IX_Moodboards_SourceMoodboardId",
                table: "Moodboards");

            migrationBuilder.DropIndex(
                name: "IX_ColorPalettes_ProjectId",
                table: "ColorPalettes");

            migrationBuilder.DropColumn(
                name: "ProjectId",
                table: "ColorPalettes");

            migrationBuilder.AlterColumn<int>(
                name: "MoodboardId",
                table: "RoomDetails",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "ColorPaletteProject",
                columns: table => new
                {
                    ColorPalettesId = table.Column<int>(type: "int", nullable: false),
                    ProjectsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ColorPaletteProject", x => new { x.ColorPalettesId, x.ProjectsId });
                    table.ForeignKey(
                        name: "FK_ColorPaletteProject_ColorPalettes_ColorPalettesId",
                        column: x => x.ColorPalettesId,
                        principalTable: "ColorPalettes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ColorPaletteProject_Projects_ProjectsId",
                        column: x => x.ProjectsId,
                        principalTable: "Projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RoomDetails_MoodboardId",
                table: "RoomDetails",
                column: "MoodboardId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ColorPaletteProject_ProjectsId",
                table: "ColorPaletteProject",
                column: "ProjectsId");

            migrationBuilder.AddForeignKey(
                name: "FK_RoomDetails_Moodboards_MoodboardId",
                table: "RoomDetails",
                column: "MoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RoomDetails_Moodboards_MoodboardId",
                table: "RoomDetails");

            migrationBuilder.DropTable(
                name: "ColorPaletteProject");

            migrationBuilder.DropIndex(
                name: "IX_RoomDetails_MoodboardId",
                table: "RoomDetails");

            migrationBuilder.AlterColumn<int>(
                name: "MoodboardId",
                table: "RoomDetails",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ProjectId",
                table: "ColorPalettes",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_RoomDetails_MoodboardId",
                table: "RoomDetails",
                column: "MoodboardId",
                unique: true,
                filter: "[MoodboardId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Moodboards_SourceMoodboardId",
                table: "Moodboards",
                column: "SourceMoodboardId");

            migrationBuilder.CreateIndex(
                name: "IX_ColorPalettes_ProjectId",
                table: "ColorPalettes",
                column: "ProjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_ColorPalettes_Projects_ProjectId",
                table: "ColorPalettes",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Moodboards_Moodboards_SourceMoodboardId",
                table: "Moodboards",
                column: "SourceMoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_RoomDetails_Moodboards_MoodboardId",
                table: "RoomDetails",
                column: "MoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id");
        }
    }
}
