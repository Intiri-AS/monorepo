using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class ProjectToMoodboard : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "MoodboardId",
                table: "Projects",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int"
            );

            migrationBuilder.CreateIndex(
                name: "IX_Projects_MoodboardId",
                table: "Projects",
                column: "MoodboardId"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Moodboards_MoodboardId",
                table: "Projects",
                column: "MoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id"
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Projects_Moodboards_MoodboardId",
                table: "Projects"
            );

            migrationBuilder.DropIndex(name: "IX_Projects_MoodboardId", table: "Projects");

            migrationBuilder.AlterColumn<int>(
                name: "MoodboardId",
                table: "Projects",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true
            );
        }
    }
}
