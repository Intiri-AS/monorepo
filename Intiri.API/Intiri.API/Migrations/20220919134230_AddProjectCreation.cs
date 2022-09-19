using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class AddProjectCreation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MoodboardColorPallete_ColorPalletes_ColorPalletesId",
                table: "MoodboardColorPallete");

            migrationBuilder.RenameColumn(
                name: "ColorPalletesId",
                table: "MoodboardColorPallete",
                newName: "ColorPalettesId");

            migrationBuilder.AddColumn<DateTime>(
                name: "Created",
                table: "Projects",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddForeignKey(
                name: "FK_MoodboardColorPallete_ColorPalletes_ColorPalettesId",
                table: "MoodboardColorPallete",
                column: "ColorPalettesId",
                principalTable: "ColorPalletes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MoodboardColorPallete_ColorPalletes_ColorPalettesId",
                table: "MoodboardColorPallete");

            migrationBuilder.DropColumn(
                name: "Created",
                table: "Projects");

            migrationBuilder.RenameColumn(
                name: "ColorPalettesId",
                table: "MoodboardColorPallete",
                newName: "ColorPalletesId");

            migrationBuilder.AddForeignKey(
                name: "FK_MoodboardColorPallete_ColorPalletes_ColorPalletesId",
                table: "MoodboardColorPallete",
                column: "ColorPalletesId",
                principalTable: "ColorPalletes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
