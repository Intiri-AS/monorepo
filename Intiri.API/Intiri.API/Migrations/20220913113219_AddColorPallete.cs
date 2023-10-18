using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class AddColorPallete : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ColorPalletes",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "int", nullable: false)
                            .Annotation("SqlServer:Identity", "1, 1"),
                        Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        Number = table.Column<int>(type: "int", nullable: false),
                        MainColor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        ShadeColorLight = table.Column<string>(
                            type: "nvarchar(max)",
                            nullable: true
                        ),
                        ShadeColorMedium = table.Column<string>(
                            type: "nvarchar(max)",
                            nullable: true
                        ),
                        ShadeColorDark = table.Column<string>(type: "nvarchar(max)", nullable: true)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ColorPalletes", x => x.Id);
                }
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "ColorPalletes");
        }
    }
}
