using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class ProductUpdate2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "productLink",
                table: "Products",
                newName: "ProductLink"
            );

            migrationBuilder.RenameColumn(
                name: "partnerName",
                table: "Products",
                newName: "PartnerName"
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProductLink",
                table: "Products",
                newName: "productLink"
            );

            migrationBuilder.RenameColumn(
                name: "PartnerName",
                table: "Products",
                newName: "partnerName"
            );
        }
    }
}
