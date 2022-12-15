using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class ProductChangeMaterialByMaterialType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Materials_MaterialId",
                table: "Products");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_MaterialTypes_MaterialId",
                table: "Products",
                column: "MaterialId",
                principalTable: "MaterialTypes",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_MaterialTypes_MaterialId",
                table: "Products");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Materials_MaterialId",
                table: "Products",
                column: "MaterialId",
                principalTable: "Materials",
                principalColumn: "Id");
        }
    }
}
