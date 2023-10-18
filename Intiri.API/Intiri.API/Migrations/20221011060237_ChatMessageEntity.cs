using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class ChatMessageEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ChatMessage",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "int", nullable: false)
                            .Annotation("SqlServer:Identity", "1, 1"),
                        SenderId = table.Column<int>(type: "int", nullable: false),
                        RecipientId = table.Column<int>(type: "int", nullable: false),
                        Content = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        DateRead = table.Column<DateTime>(type: "datetime2", nullable: true),
                        MessageSentDate = table.Column<DateTime>(
                            type: "datetime2",
                            nullable: false
                        ),
                        SenderDeleted = table.Column<bool>(type: "bit", nullable: false),
                        RecipientDeleted = table.Column<bool>(type: "bit", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChatMessage", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChatMessage_AspNetUsers_RecipientId",
                        column: x => x.RecipientId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict
                    );
                    table.ForeignKey(
                        name: "FK_ChatMessage_AspNetUsers_SenderId",
                        column: x => x.SenderId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict
                    );
                }
            );

            migrationBuilder.CreateIndex(
                name: "IX_ChatMessage_RecipientId",
                table: "ChatMessage",
                column: "RecipientId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_ChatMessage_SenderId_RecipientId",
                table: "ChatMessage",
                columns: new[] { "SenderId", "RecipientId" }
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "ChatMessage");
        }
    }
}
