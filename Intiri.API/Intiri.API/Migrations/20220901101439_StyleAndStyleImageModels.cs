using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class StyleAndStyleImageModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUserRoles_AspNetRoles_RoleId1",
                table: "AspNetUserRoles"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUserRoles_AspNetUsers_UserId1",
                table: "AspNetUserRoles"
            );

            migrationBuilder.DropIndex(
                name: "IX_AspNetUserRoles_RoleId1",
                table: "AspNetUserRoles"
            );

            migrationBuilder.DropIndex(
                name: "IX_AspNetUserRoles_UserId1",
                table: "AspNetUserRoles"
            );

            migrationBuilder.DropColumn(name: "RoleId1", table: "AspNetUserRoles");

            migrationBuilder.DropColumn(name: "UserId1", table: "AspNetUserRoles");

            migrationBuilder.CreateTable(
                name: "Styles",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "int", nullable: false)
                            .Annotation("SqlServer:Identity", "1, 1"),
                        Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        ImagePath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Styles", x => x.Id);
                }
            );

            migrationBuilder.CreateTable(
                name: "StyleImages",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "int", nullable: false)
                            .Annotation("SqlServer:Identity", "1, 1"),
                        Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        StyleId = table.Column<int>(type: "int", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StyleImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StyleImages_Styles_StyleId",
                        column: x => x.StyleId,
                        principalTable: "Styles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateIndex(
                name: "IX_StyleImages_StyleId",
                table: "StyleImages",
                column: "StyleId"
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "StyleImages");

            migrationBuilder.DropTable(name: "Styles");

            migrationBuilder.AddColumn<int>(
                name: "RoleId1",
                table: "AspNetUserRoles",
                type: "int",
                nullable: true
            );

            migrationBuilder.AddColumn<int>(
                name: "UserId1",
                table: "AspNetUserRoles",
                type: "int",
                nullable: true
            );

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId1",
                table: "AspNetUserRoles",
                column: "RoleId1"
            );

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_UserId1",
                table: "AspNetUserRoles",
                column: "UserId1"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUserRoles_AspNetRoles_RoleId1",
                table: "AspNetUserRoles",
                column: "RoleId1",
                principalTable: "AspNetRoles",
                principalColumn: "Id"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUserRoles_AspNetUsers_UserId1",
                table: "AspNetUserRoles",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id"
            );
        }
    }
}
