using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class ChangeDesignerToUserType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Moodboards_AspNetUsers_DesignerId",
                table: "Moodboards"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_Moodboards_AspNetUsers_EndUserId",
                table: "Moodboards"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_Moodboards_Projects_ProjectId",
                table: "Moodboards"
            );

            migrationBuilder.DropIndex(name: "IX_Moodboards_EndUserId", table: "Moodboards");

            migrationBuilder.DropColumn(name: "EndUserId", table: "Moodboards");

            migrationBuilder.AddForeignKey(
                name: "FK_Moodboards_AspNetUsers_DesignerId",
                table: "Moodboards",
                column: "DesignerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Moodboards_Projects_ProjectId",
                table: "Moodboards",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id"
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Moodboards_AspNetUsers_DesignerId",
                table: "Moodboards"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_Moodboards_Projects_ProjectId",
                table: "Moodboards"
            );

            migrationBuilder.AddColumn<int>(
                name: "EndUserId",
                table: "Moodboards",
                type: "int",
                nullable: true
            );

            migrationBuilder.CreateIndex(
                name: "IX_Moodboards_EndUserId",
                table: "Moodboards",
                column: "EndUserId"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Moodboards_AspNetUsers_DesignerId",
                table: "Moodboards",
                column: "DesignerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Moodboards_AspNetUsers_EndUserId",
                table: "Moodboards",
                column: "EndUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_Moodboards_Projects_ProjectId",
                table: "Moodboards",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade
            );
        }
    }
}
