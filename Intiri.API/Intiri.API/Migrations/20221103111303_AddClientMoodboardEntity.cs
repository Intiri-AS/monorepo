using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class AddClientMoodboardEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RoomDetails_Moodboards_MoodboardId",
                table: "RoomDetails");

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

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Moodboards",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_RoomDetails_MoodboardId",
                table: "RoomDetails",
                column: "MoodboardId",
                unique: true,
                filter: "[MoodboardId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_RoomDetails_Moodboards_MoodboardId",
                table: "RoomDetails",
                column: "MoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RoomDetails_Moodboards_MoodboardId",
                table: "RoomDetails");

            migrationBuilder.DropIndex(
                name: "IX_RoomDetails_MoodboardId",
                table: "RoomDetails");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Moodboards");

            migrationBuilder.AlterColumn<int>(
                name: "MoodboardId",
                table: "RoomDetails",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_RoomDetails_MoodboardId",
                table: "RoomDetails",
                column: "MoodboardId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_RoomDetails_Moodboards_MoodboardId",
                table: "RoomDetails",
                column: "MoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
