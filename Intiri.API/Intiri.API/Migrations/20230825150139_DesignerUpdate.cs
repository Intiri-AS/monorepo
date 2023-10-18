using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class DesignerUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DesignerInfo",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "int", nullable: false)
                            .Annotation("SqlServer:Identity", "1, 1"),
                        Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        OpenToHomeVist = table.Column<bool>(type: "bit", nullable: false),
                        TravelDistance = table.Column<string>(
                            type: "nvarchar(max)",
                            nullable: true
                        ),
                        AreaOfExpertise = table.Column<string>(
                            type: "nvarchar(max)",
                            nullable: true
                        ),
                        AreaofExpertiseForProfile = table.Column<string>(
                            type: "nvarchar(max)",
                            nullable: true
                        ),
                        DesignerId = table.Column<int>(type: "int", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DesignerInfo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DesignerInfo_AspNetUsers_DesignerId",
                        column: x => x.DesignerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateTable(
                name: "DesignerPortfolio",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "int", nullable: false)
                            .Annotation("SqlServer:Identity", "1, 1"),
                        DesignerId = table.Column<int>(type: "int", nullable: false),
                        ImagePath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        PublicId = table.Column<string>(type: "nvarchar(max)", nullable: true)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DesignerPortfolio", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DesignerPortfolio_AspNetUsers_DesignerId",
                        column: x => x.DesignerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateIndex(
                name: "IX_DesignerInfo_DesignerId",
                table: "DesignerInfo",
                column: "DesignerId",
                unique: true
            );

            migrationBuilder.CreateIndex(
                name: "IX_DesignerPortfolio_DesignerId",
                table: "DesignerPortfolio",
                column: "DesignerId"
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "DesignerInfo");

            migrationBuilder.DropTable(name: "DesignerPortfolio");
        }
    }
}
