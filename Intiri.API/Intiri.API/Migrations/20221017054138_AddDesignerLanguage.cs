using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class AddDesignerLanguage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Styles_StyleId",
                table: "AspNetUsers"
            );

            migrationBuilder.DropIndex(name: "IX_AspNetUsers_StyleId", table: "AspNetUsers");

            migrationBuilder.DropColumn(name: "HourlyRate", table: "AspNetUsers");

            migrationBuilder.DropColumn(name: "StyleId", table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "Language",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "Language", table: "AspNetUsers");

            migrationBuilder.AddColumn<float>(
                name: "HourlyRate",
                table: "AspNetUsers",
                type: "real",
                nullable: true
            );

            migrationBuilder.AddColumn<int>(
                name: "StyleId",
                table: "AspNetUsers",
                type: "int",
                nullable: true
            );

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_StyleId",
                table: "AspNetUsers",
                column: "StyleId"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Styles_StyleId",
                table: "AspNetUsers",
                column: "StyleId",
                principalTable: "Styles",
                principalColumn: "Id"
            );
        }
    }
}
