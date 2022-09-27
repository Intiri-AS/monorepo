using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class ExpandProjectAndMoodboard : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Moodboards_AspNetUsers_UserId",
                table: "Moodboards");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_AspNetUsers_UserId",
                table: "Projects");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_ColorPalettes_ColorPaletteId",
                table: "Projects");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_Moodboards_MoodboardId",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Projects_ColorPaletteId",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Projects_MoodboardId",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Projects_UserId",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "ColorPaletteId",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "MoodboardId",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "Designer",
                table: "Moodboards");

            migrationBuilder.RenameColumn(
                name: "BudgetId",
                table: "Projects",
                newName: "EndUserId");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Moodboards",
                newName: "SourceMoodboardId");

            migrationBuilder.RenameIndex(
                name: "IX_Moodboards_UserId",
                table: "Moodboards",
                newName: "IX_Moodboards_SourceMoodboardId");

            migrationBuilder.AddColumn<int>(
                name: "BudgetRate",
                table: "Projects",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "Updated",
                table: "Projects",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "DesignerId",
                table: "Moodboards",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsTemplate",
                table: "Moodboards",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "ProjectId",
                table: "Moodboards",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ProjectId",
                table: "ColorPalettes",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Projects_EndUserId",
                table: "Projects",
                column: "EndUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Moodboards_DesignerId",
                table: "Moodboards",
                column: "DesignerId");

            migrationBuilder.CreateIndex(
                name: "IX_Moodboards_ProjectId",
                table: "Moodboards",
                column: "ProjectId");

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
                name: "FK_Moodboards_AspNetUsers_DesignerId",
                table: "Moodboards",
                column: "DesignerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Moodboards_Moodboards_SourceMoodboardId",
                table: "Moodboards",
                column: "SourceMoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Moodboards_Projects_ProjectId",
                table: "Moodboards",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_AspNetUsers_EndUserId",
                table: "Projects",
                column: "EndUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ColorPalettes_Projects_ProjectId",
                table: "ColorPalettes");

            migrationBuilder.DropForeignKey(
                name: "FK_Moodboards_AspNetUsers_DesignerId",
                table: "Moodboards");

            migrationBuilder.DropForeignKey(
                name: "FK_Moodboards_Moodboards_SourceMoodboardId",
                table: "Moodboards");

            migrationBuilder.DropForeignKey(
                name: "FK_Moodboards_Projects_ProjectId",
                table: "Moodboards");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_AspNetUsers_EndUserId",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Projects_EndUserId",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Moodboards_DesignerId",
                table: "Moodboards");

            migrationBuilder.DropIndex(
                name: "IX_Moodboards_ProjectId",
                table: "Moodboards");

            migrationBuilder.DropIndex(
                name: "IX_ColorPalettes_ProjectId",
                table: "ColorPalettes");

            migrationBuilder.DropColumn(
                name: "BudgetRate",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "Updated",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "DesignerId",
                table: "Moodboards");

            migrationBuilder.DropColumn(
                name: "IsTemplate",
                table: "Moodboards");

            migrationBuilder.DropColumn(
                name: "ProjectId",
                table: "Moodboards");

            migrationBuilder.DropColumn(
                name: "ProjectId",
                table: "ColorPalettes");

            migrationBuilder.RenameColumn(
                name: "EndUserId",
                table: "Projects",
                newName: "BudgetId");

            migrationBuilder.RenameColumn(
                name: "SourceMoodboardId",
                table: "Moodboards",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Moodboards_SourceMoodboardId",
                table: "Moodboards",
                newName: "IX_Moodboards_UserId");

            migrationBuilder.AddColumn<int>(
                name: "ColorPaletteId",
                table: "Projects",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MoodboardId",
                table: "Projects",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Projects",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Designer",
                table: "Moodboards",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Projects_ColorPaletteId",
                table: "Projects",
                column: "ColorPaletteId");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_MoodboardId",
                table: "Projects",
                column: "MoodboardId");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_UserId",
                table: "Projects",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Moodboards_AspNetUsers_UserId",
                table: "Moodboards",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_AspNetUsers_UserId",
                table: "Projects",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_ColorPalettes_ColorPaletteId",
                table: "Projects",
                column: "ColorPaletteId",
                principalTable: "ColorPalettes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Moodboards_MoodboardId",
                table: "Projects",
                column: "MoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id");
        }
    }
}
