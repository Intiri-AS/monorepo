using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class designerUpdate3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Featured",
                table: "DesignerPortfolio",
                type: "int",
                nullable: false,
                defaultValue: 0
            );

            migrationBuilder.AddColumn<string>(
                name: "ProfileDescription",
                table: "DesignerInfo",
                type: "nvarchar(max)",
                nullable: true
            );

            migrationBuilder.AddColumn<string>(
                name: "ProfileDescription_NO",
                table: "DesignerInfo",
                type: "nvarchar(max)",
                nullable: true
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "Featured", table: "DesignerPortfolio");

            migrationBuilder.DropColumn(name: "ProfileDescription", table: "DesignerInfo");

            migrationBuilder.DropColumn(name: "ProfileDescription_NO", table: "DesignerInfo");
        }
    }
}
