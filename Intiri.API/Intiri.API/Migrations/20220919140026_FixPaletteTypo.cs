using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class FixPaletteTypo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MoodboardColorPallete_ColorPalletes_ColorPalettesId",
                table: "MoodboardColorPallete"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_MoodboardColorPallete_Moodboards_MoodboardsId",
                table: "MoodboardColorPallete"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_ColorPalletes_ColorPalleteId",
                table: "Projects"
            );

            migrationBuilder.DropPrimaryKey(
                name: "PK_MoodboardColorPallete",
                table: "MoodboardColorPallete"
            );

            migrationBuilder.DropPrimaryKey(name: "PK_ColorPalletes", table: "ColorPalletes");

            migrationBuilder.RenameTable(
                name: "MoodboardColorPallete",
                newName: "MoodboardColorPalette"
            );

            migrationBuilder.RenameTable(name: "ColorPalletes", newName: "ColorPalettes");

            migrationBuilder.RenameColumn(
                name: "ColorPalleteId",
                table: "Projects",
                newName: "ColorPaletteId"
            );

            migrationBuilder.RenameIndex(
                name: "IX_Projects_ColorPalleteId",
                table: "Projects",
                newName: "IX_Projects_ColorPaletteId"
            );

            migrationBuilder.RenameIndex(
                name: "IX_MoodboardColorPallete_MoodboardsId",
                table: "MoodboardColorPalette",
                newName: "IX_MoodboardColorPalette_MoodboardsId"
            );

            migrationBuilder.AddPrimaryKey(
                name: "PK_MoodboardColorPalette",
                table: "MoodboardColorPalette",
                columns: new[] { "ColorPalettesId", "MoodboardsId" }
            );

            migrationBuilder.AddPrimaryKey(
                name: "PK_ColorPalettes",
                table: "ColorPalettes",
                column: "Id"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_MoodboardColorPalette_ColorPalettes_ColorPalettesId",
                table: "MoodboardColorPalette",
                column: "ColorPalettesId",
                principalTable: "ColorPalettes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade
            );

            migrationBuilder.AddForeignKey(
                name: "FK_MoodboardColorPalette_Moodboards_MoodboardsId",
                table: "MoodboardColorPalette",
                column: "MoodboardsId",
                principalTable: "Moodboards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_ColorPalettes_ColorPaletteId",
                table: "Projects",
                column: "ColorPaletteId",
                principalTable: "ColorPalettes",
                principalColumn: "Id"
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MoodboardColorPalette_ColorPalettes_ColorPalettesId",
                table: "MoodboardColorPalette"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_MoodboardColorPalette_Moodboards_MoodboardsId",
                table: "MoodboardColorPalette"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_ColorPalettes_ColorPaletteId",
                table: "Projects"
            );

            migrationBuilder.DropPrimaryKey(
                name: "PK_MoodboardColorPalette",
                table: "MoodboardColorPalette"
            );

            migrationBuilder.DropPrimaryKey(name: "PK_ColorPalettes", table: "ColorPalettes");

            migrationBuilder.RenameTable(
                name: "MoodboardColorPalette",
                newName: "MoodboardColorPallete"
            );

            migrationBuilder.RenameTable(name: "ColorPalettes", newName: "ColorPalletes");

            migrationBuilder.RenameColumn(
                name: "ColorPaletteId",
                table: "Projects",
                newName: "ColorPalleteId"
            );

            migrationBuilder.RenameIndex(
                name: "IX_Projects_ColorPaletteId",
                table: "Projects",
                newName: "IX_Projects_ColorPalleteId"
            );

            migrationBuilder.RenameIndex(
                name: "IX_MoodboardColorPalette_MoodboardsId",
                table: "MoodboardColorPallete",
                newName: "IX_MoodboardColorPallete_MoodboardsId"
            );

            migrationBuilder.AddPrimaryKey(
                name: "PK_MoodboardColorPallete",
                table: "MoodboardColorPallete",
                columns: new[] { "ColorPalettesId", "MoodboardsId" }
            );

            migrationBuilder.AddPrimaryKey(
                name: "PK_ColorPalletes",
                table: "ColorPalletes",
                column: "Id"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_MoodboardColorPallete_ColorPalletes_ColorPalettesId",
                table: "MoodboardColorPallete",
                column: "ColorPalettesId",
                principalTable: "ColorPalletes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade
            );

            migrationBuilder.AddForeignKey(
                name: "FK_MoodboardColorPallete_Moodboards_MoodboardsId",
                table: "MoodboardColorPallete",
                column: "MoodboardsId",
                principalTable: "Moodboards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_ColorPalletes_ColorPalleteId",
                table: "Projects",
                column: "ColorPalleteId",
                principalTable: "ColorPalletes",
                principalColumn: "Id"
            );
        }
    }
}
