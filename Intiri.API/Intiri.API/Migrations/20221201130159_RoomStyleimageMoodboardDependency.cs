using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class RoomStyleimageMoodboardDependency : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RoomId",
                table: "StyleImages",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "MoodboardStyleImage",
                columns: table => new
                {
                    MoodboardsId = table.Column<int>(type: "int", nullable: false),
                    StyleImagesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MoodboardStyleImage", x => new { x.MoodboardsId, x.StyleImagesId });
                    table.ForeignKey(
                        name: "FK_MoodboardStyleImage_Moodboards_MoodboardsId",
                        column: x => x.MoodboardsId,
                        principalTable: "Moodboards",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MoodboardStyleImage_StyleImages_StyleImagesId",
                        column: x => x.StyleImagesId,
                        principalTable: "StyleImages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_StyleImages_RoomId",
                table: "StyleImages",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_MoodboardStyleImage_StyleImagesId",
                table: "MoodboardStyleImage",
                column: "StyleImagesId");

            migrationBuilder.AddForeignKey(
                name: "FK_StyleImages_Rooms_RoomId",
                table: "StyleImages",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StyleImages_Rooms_RoomId",
                table: "StyleImages");

            migrationBuilder.DropTable(
                name: "MoodboardStyleImage");

            migrationBuilder.DropIndex(
                name: "IX_StyleImages_RoomId",
                table: "StyleImages");

            migrationBuilder.DropColumn(
                name: "RoomId",
                table: "StyleImages");
        }
    }
}
