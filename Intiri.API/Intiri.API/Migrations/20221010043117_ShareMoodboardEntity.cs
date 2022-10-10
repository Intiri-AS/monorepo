using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class ShareMoodboardEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ShareMoodboards",
                columns: table => new
                {
                    SenderUserId = table.Column<int>(type: "int", nullable: false),
                    RecipientUserId = table.Column<int>(type: "int", nullable: false),
                    SharedTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MoodboardSharedId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShareMoodboards", x => new { x.SenderUserId, x.RecipientUserId });
                    table.ForeignKey(
                        name: "FK_ShareMoodboards_AspNetUsers_RecipientUserId",
                        column: x => x.RecipientUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ShareMoodboards_AspNetUsers_SenderUserId",
                        column: x => x.SenderUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ShareMoodboards_Moodboards_MoodboardSharedId",
                        column: x => x.MoodboardSharedId,
                        principalTable: "Moodboards",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ShareMoodboards_MoodboardSharedId",
                table: "ShareMoodboards",
                column: "MoodboardSharedId");

            migrationBuilder.CreateIndex(
                name: "IX_ShareMoodboards_RecipientUserId",
                table: "ShareMoodboards",
                column: "RecipientUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ShareMoodboards");
        }
    }
}
