using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class MaterialUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Link",
                table: "Materials",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Provider",
                table: "Materials",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Link",
                table: "Materials");

            migrationBuilder.DropColumn(
                name: "Provider",
                table: "Materials");
        }
    }
}
