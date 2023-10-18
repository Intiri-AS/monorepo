using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class AddImagePublicIds : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImagePublicId",
                table: "Styles",
                type: "nvarchar(max)",
                nullable: true
            );

            migrationBuilder.AddColumn<string>(
                name: "ImagePublicId",
                table: "Rooms",
                type: "nvarchar(max)",
                nullable: true
            );

            migrationBuilder.AddColumn<string>(
                name: "ImagePublicId",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true
            );

            migrationBuilder.AddColumn<string>(
                name: "ImagePublicId",
                table: "Materials",
                type: "nvarchar(max)",
                nullable: true
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "ImagePublicId", table: "Styles");

            migrationBuilder.DropColumn(name: "ImagePublicId", table: "Rooms");

            migrationBuilder.DropColumn(name: "ImagePublicId", table: "Products");

            migrationBuilder.DropColumn(name: "ImagePublicId", table: "Materials");
        }
    }
}
