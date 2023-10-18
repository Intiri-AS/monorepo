using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class newish : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RoomDetails_Projects_ProjectId",
                table: "RoomDetails"
            );

            migrationBuilder.DropIndex(name: "IX_RoomDetails_ProjectId", table: "RoomDetails");

            migrationBuilder.DropColumn(name: "ProjectId", table: "RoomDetails");

            migrationBuilder.AddColumn<int>(
                name: "RoomDetailsId",
                table: "Projects",
                type: "int",
                nullable: true
            );

            migrationBuilder.CreateIndex(
                name: "IX_Projects_RoomDetailsId",
                table: "Projects",
                column: "RoomDetailsId"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_RoomDetails_RoomDetailsId",
                table: "Projects",
                column: "RoomDetailsId",
                principalTable: "RoomDetails",
                principalColumn: "Id"
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Projects_RoomDetails_RoomDetailsId",
                table: "Projects"
            );

            migrationBuilder.DropIndex(name: "IX_Projects_RoomDetailsId", table: "Projects");

            migrationBuilder.DropColumn(name: "RoomDetailsId", table: "Projects");

            migrationBuilder.AddColumn<int>(
                name: "ProjectId",
                table: "RoomDetails",
                type: "int",
                nullable: false,
                defaultValue: 0
            );

            migrationBuilder.CreateIndex(
                name: "IX_RoomDetails_ProjectId",
                table: "RoomDetails",
                column: "ProjectId",
                unique: true
            );

            migrationBuilder.AddForeignKey(
                name: "FK_RoomDetails_Projects_ProjectId",
                table: "RoomDetails",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade
            );
        }
    }
}
