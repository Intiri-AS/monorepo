using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class style_shortdescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ShortDescription",
                table: "Styles",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ShortDescription",
                table: "Styles");
        }
    }
}
