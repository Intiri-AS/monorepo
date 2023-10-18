using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class UsersEntitiesModified : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Color",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true
            );

            migrationBuilder.AddColumn<int>(
                name: "PartnerId",
                table: "Products",
                type: "int",
                nullable: true
            );

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: ""
            );

            migrationBuilder.AddColumn<float>(
                name: "HourlyRate",
                table: "AspNetUsers",
                type: "real",
                nullable: true
            );

            migrationBuilder.AddColumn<int>(
                name: "PartnerId",
                table: "AspNetUsers",
                type: "int",
                nullable: true
            );

            migrationBuilder.AddColumn<int>(
                name: "StyleId",
                table: "AspNetUsers",
                type: "int",
                nullable: true
            );

            migrationBuilder.CreateTable(
                name: "Partners",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "int", nullable: false)
                            .Annotation("SqlServer:Identity", "1, 1"),
                        Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                        PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        Street = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        PostalCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        Country = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        CountryCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        LogoPath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        LogoPublicId = table.Column<string>(type: "nvarchar(max)", nullable: true)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Partners", x => x.Id);
                }
            );

            migrationBuilder.CreateIndex(
                name: "IX_Products_PartnerId",
                table: "Products",
                column: "PartnerId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_PartnerId",
                table: "AspNetUsers",
                column: "PartnerId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_StyleId",
                table: "AspNetUsers",
                column: "StyleId"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Partners_PartnerId",
                table: "AspNetUsers",
                column: "PartnerId",
                principalTable: "Partners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade
            );

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Styles_StyleId",
                table: "AspNetUsers",
                column: "StyleId",
                principalTable: "Styles",
                principalColumn: "Id"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Partners_PartnerId",
                table: "Products",
                column: "PartnerId",
                principalTable: "Partners",
                principalColumn: "Id"
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Partners_PartnerId",
                table: "AspNetUsers"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Styles_StyleId",
                table: "AspNetUsers"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_Products_Partners_PartnerId",
                table: "Products"
            );

            migrationBuilder.DropTable(name: "Partners");

            migrationBuilder.DropIndex(name: "IX_Products_PartnerId", table: "Products");

            migrationBuilder.DropIndex(name: "IX_AspNetUsers_PartnerId", table: "AspNetUsers");

            migrationBuilder.DropIndex(name: "IX_AspNetUsers_StyleId", table: "AspNetUsers");

            migrationBuilder.DropColumn(name: "Color", table: "Products");

            migrationBuilder.DropColumn(name: "PartnerId", table: "Products");

            migrationBuilder.DropColumn(name: "Discriminator", table: "AspNetUsers");

            migrationBuilder.DropColumn(name: "HourlyRate", table: "AspNetUsers");

            migrationBuilder.DropColumn(name: "PartnerId", table: "AspNetUsers");

            migrationBuilder.DropColumn(name: "StyleId", table: "AspNetUsers");
        }
    }
}
