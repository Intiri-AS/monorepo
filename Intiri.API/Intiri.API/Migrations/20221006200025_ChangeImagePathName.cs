using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class ChangeImagePathName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Path",
                table: "StyleImages",
                newName: "ImagePath");

            migrationBuilder.RenameColumn(
                name: "ImagePublicId",
                table: "Rooms",
                newName: "IconPublicId");

            migrationBuilder.RenameColumn(
                name: "ImagePath",
                table: "Rooms",
                newName: "IconPath");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImagePath",
                table: "StyleImages",
                newName: "Path");

            migrationBuilder.RenameColumn(
                name: "IconPublicId",
                table: "Rooms",
                newName: "ImagePublicId");

            migrationBuilder.RenameColumn(
                name: "IconPath",
                table: "Rooms",
                newName: "ImagePath");
        }
    }
}
