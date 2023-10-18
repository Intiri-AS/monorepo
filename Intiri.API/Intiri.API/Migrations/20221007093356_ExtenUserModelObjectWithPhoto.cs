using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class ExtenUserModelObjectWithPhoto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StreetAddress",
                table: "AspNetUsers",
                newName: "Street"
            );

            migrationBuilder.AddColumn<string>(
                name: "CountryCode",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true
            );

            migrationBuilder.AddColumn<string>(
                name: "PhotoPath",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true
            );

            migrationBuilder.AddColumn<string>(
                name: "PublicId",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "CountryCode", table: "AspNetUsers");

            migrationBuilder.DropColumn(name: "PhotoPath", table: "AspNetUsers");

            migrationBuilder.DropColumn(name: "PublicId", table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "Street",
                table: "AspNetUsers",
                newName: "StreetAddress"
            );
        }
    }
}
