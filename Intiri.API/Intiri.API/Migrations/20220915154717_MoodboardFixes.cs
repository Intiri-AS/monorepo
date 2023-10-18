using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class MoodboardFixes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Materials_Moodboards_MoodboardId",
                table: "Materials"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_Moodboards_ColorPalletes_ColorPalleteId",
                table: "Moodboards"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_Products_MaterialTypes_MaterialTypeId",
                table: "Products"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_Products_Moodboards_MoodboardId",
                table: "Products"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_Products_ProductTypes_ProductTypeId",
                table: "Products"
            );

            migrationBuilder.DropIndex(name: "IX_Products_MaterialTypeId", table: "Products");

            migrationBuilder.DropIndex(name: "IX_Products_MoodboardId", table: "Products");

            migrationBuilder.DropIndex(name: "IX_Moodboards_ColorPalleteId", table: "Moodboards");

            migrationBuilder.DropIndex(name: "IX_Materials_MoodboardId", table: "Materials");

            migrationBuilder.DropColumn(name: "ColorHexValue", table: "Products");

            migrationBuilder.DropColumn(name: "MaterialTypeId", table: "Products");

            migrationBuilder.DropColumn(name: "MoodboardId", table: "Products");

            migrationBuilder.DropColumn(name: "ColorPalleteId", table: "Moodboards");

            migrationBuilder.DropColumn(name: "MoodboardId", table: "Materials");

            migrationBuilder.AlterColumn<int>(
                name: "ProductTypeId",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true
            );

            migrationBuilder.AddColumn<int>(
                name: "StyleId",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0
            );

            migrationBuilder.CreateTable(
                name: "MoodboardColorPallete",
                columns: table =>
                    new
                    {
                        ColorPalletesId = table.Column<int>(type: "int", nullable: false),
                        MoodboardsId = table.Column<int>(type: "int", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey(
                        "PK_MoodboardColorPallete",
                        x => new { x.ColorPalletesId, x.MoodboardsId }
                    );
                    table.ForeignKey(
                        name: "FK_MoodboardColorPallete_ColorPalletes_ColorPalletesId",
                        column: x => x.ColorPalletesId,
                        principalTable: "ColorPalletes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                    table.ForeignKey(
                        name: "FK_MoodboardColorPallete_Moodboards_MoodboardsId",
                        column: x => x.MoodboardsId,
                        principalTable: "Moodboards",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateTable(
                name: "MoodboardMaterial",
                columns: table =>
                    new
                    {
                        MaterialsId = table.Column<int>(type: "int", nullable: false),
                        MoodboardsId = table.Column<int>(type: "int", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey(
                        "PK_MoodboardMaterial",
                        x => new { x.MaterialsId, x.MoodboardsId }
                    );
                    table.ForeignKey(
                        name: "FK_MoodboardMaterial_Materials_MaterialsId",
                        column: x => x.MaterialsId,
                        principalTable: "Materials",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                    table.ForeignKey(
                        name: "FK_MoodboardMaterial_Moodboards_MoodboardsId",
                        column: x => x.MoodboardsId,
                        principalTable: "Moodboards",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateTable(
                name: "MoodboardProduct",
                columns: table =>
                    new
                    {
                        MoodboardsId = table.Column<int>(type: "int", nullable: false),
                        ProductsId = table.Column<int>(type: "int", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey(
                        "PK_MoodboardProduct",
                        x => new { x.MoodboardsId, x.ProductsId }
                    );
                    table.ForeignKey(
                        name: "FK_MoodboardProduct_Moodboards_MoodboardsId",
                        column: x => x.MoodboardsId,
                        principalTable: "Moodboards",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                    table.ForeignKey(
                        name: "FK_MoodboardProduct_Products_ProductsId",
                        column: x => x.ProductsId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateIndex(
                name: "IX_Products_StyleId",
                table: "Products",
                column: "StyleId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_MoodboardColorPallete_MoodboardsId",
                table: "MoodboardColorPallete",
                column: "MoodboardsId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_MoodboardMaterial_MoodboardsId",
                table: "MoodboardMaterial",
                column: "MoodboardsId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_MoodboardProduct_ProductsId",
                table: "MoodboardProduct",
                column: "ProductsId"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Products_ProductTypes_ProductTypeId",
                table: "Products",
                column: "ProductTypeId",
                principalTable: "ProductTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Styles_StyleId",
                table: "Products",
                column: "StyleId",
                principalTable: "Styles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_ProductTypes_ProductTypeId",
                table: "Products"
            );

            migrationBuilder.DropForeignKey(name: "FK_Products_Styles_StyleId", table: "Products");

            migrationBuilder.DropTable(name: "MoodboardColorPallete");

            migrationBuilder.DropTable(name: "MoodboardMaterial");

            migrationBuilder.DropTable(name: "MoodboardProduct");

            migrationBuilder.DropIndex(name: "IX_Products_StyleId", table: "Products");

            migrationBuilder.DropColumn(name: "StyleId", table: "Products");

            migrationBuilder.AlterColumn<int>(
                name: "ProductTypeId",
                table: "Products",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int"
            );

            migrationBuilder.AddColumn<string>(
                name: "ColorHexValue",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true
            );

            migrationBuilder.AddColumn<int>(
                name: "MaterialTypeId",
                table: "Products",
                type: "int",
                nullable: true
            );

            migrationBuilder.AddColumn<int>(
                name: "MoodboardId",
                table: "Products",
                type: "int",
                nullable: true
            );

            migrationBuilder.AddColumn<int>(
                name: "ColorPalleteId",
                table: "Moodboards",
                type: "int",
                nullable: true
            );

            migrationBuilder.AddColumn<int>(
                name: "MoodboardId",
                table: "Materials",
                type: "int",
                nullable: true
            );

            migrationBuilder.CreateIndex(
                name: "IX_Products_MaterialTypeId",
                table: "Products",
                column: "MaterialTypeId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_Products_MoodboardId",
                table: "Products",
                column: "MoodboardId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_Moodboards_ColorPalleteId",
                table: "Moodboards",
                column: "ColorPalleteId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_Materials_MoodboardId",
                table: "Materials",
                column: "MoodboardId"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Materials_Moodboards_MoodboardId",
                table: "Materials",
                column: "MoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Moodboards_ColorPalletes_ColorPalleteId",
                table: "Moodboards",
                column: "ColorPalleteId",
                principalTable: "ColorPalletes",
                principalColumn: "Id"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Products_MaterialTypes_MaterialTypeId",
                table: "Products",
                column: "MaterialTypeId",
                principalTable: "MaterialTypes",
                principalColumn: "Id"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Moodboards_MoodboardId",
                table: "Products",
                column: "MoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Products_ProductTypes_ProductTypeId",
                table: "Products",
                column: "ProductTypeId",
                principalTable: "ProductTypes",
                principalColumn: "Id"
            );
        }
    }
}
