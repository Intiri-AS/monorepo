using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class MoveRoomDetailsToMoodboard : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Moodboards_Projects_ProjectId",
                table: "Moodboards");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_RoomDetails_RoomDetailsId",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Projects_RoomDetailsId",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "BudgetRate",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "RoomDetailsId",
                table: "Projects");

            migrationBuilder.AddColumn<int>(
                name: "BudgetRate",
                table: "RoomDetails",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MoodboardId",
                table: "RoomDetails",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "SketchPublicId",
                table: "RoomDetails",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SketchUrl",
                table: "RoomDetails",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_RoomDetails_MoodboardId",
                table: "RoomDetails",
                column: "MoodboardId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Moodboards_Projects_ProjectId",
                table: "Moodboards",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

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
                name: "FK_Moodboards_Projects_ProjectId",
                table: "Moodboards");

            migrationBuilder.DropForeignKey(
                name: "FK_RoomDetails_Moodboards_MoodboardId",
                table: "RoomDetails");

            migrationBuilder.DropIndex(
                name: "IX_RoomDetails_MoodboardId",
                table: "RoomDetails");

            migrationBuilder.DropColumn(
                name: "BudgetRate",
                table: "RoomDetails");

            migrationBuilder.DropColumn(
                name: "MoodboardId",
                table: "RoomDetails");

            migrationBuilder.DropColumn(
                name: "SketchPublicId",
                table: "RoomDetails");

            migrationBuilder.DropColumn(
                name: "SketchUrl",
                table: "RoomDetails");

            migrationBuilder.AddColumn<int>(
                name: "BudgetRate",
                table: "Projects",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "RoomDetailsId",
                table: "Projects",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Projects_RoomDetailsId",
                table: "Projects",
                column: "RoomDetailsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Moodboards_Projects_ProjectId",
                table: "Moodboards",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_RoomDetails_RoomDetailsId",
                table: "Projects",
                column: "RoomDetailsId",
                principalTable: "RoomDetails",
                principalColumn: "Id");
        }
    }
}
