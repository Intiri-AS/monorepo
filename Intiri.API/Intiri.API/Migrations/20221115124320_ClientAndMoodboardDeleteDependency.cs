using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class ClientAndMoodboardDeleteDependency : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ConsultationPayment_AspNetUsers_ReceiverId",
                table: "ConsultationPayment"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_ConsultationPayment_Moodboards_MoodboardId",
                table: "ConsultationPayment"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_ConsultationPayment_Moodboards_MoodboardOfferId",
                table: "ConsultationPayment"
            );

            migrationBuilder.DropIndex(
                name: "IX_ConsultationPayment_MoodboardId",
                table: "ConsultationPayment"
            );

            migrationBuilder.DropIndex(
                name: "IX_ConsultationPayment_MoodboardOfferId",
                table: "ConsultationPayment"
            );

            migrationBuilder.AlterColumn<int>(
                name: "PayerId",
                table: "ConsultationPayment",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int"
            );

            migrationBuilder.CreateIndex(
                name: "IX_ConsultationPayment_MoodboardId",
                table: "ConsultationPayment",
                column: "MoodboardId",
                unique: true,
                filter: "[MoodboardId] IS NOT NULL"
            );

            migrationBuilder.CreateIndex(
                name: "IX_ConsultationPayment_MoodboardOfferId",
                table: "ConsultationPayment",
                column: "MoodboardOfferId",
                unique: true,
                filter: "[MoodboardOfferId] IS NOT NULL"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_ConsultationPayment_AspNetUsers_ReceiverId",
                table: "ConsultationPayment",
                column: "ReceiverId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade
            );

            migrationBuilder.AddForeignKey(
                name: "FK_ConsultationPayment_Moodboards_MoodboardId",
                table: "ConsultationPayment",
                column: "MoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict
            );

            migrationBuilder.AddForeignKey(
                name: "FK_ConsultationPayment_Moodboards_MoodboardOfferId",
                table: "ConsultationPayment",
                column: "MoodboardOfferId",
                principalTable: "Moodboards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ConsultationPayment_AspNetUsers_ReceiverId",
                table: "ConsultationPayment"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_ConsultationPayment_Moodboards_MoodboardId",
                table: "ConsultationPayment"
            );

            migrationBuilder.DropForeignKey(
                name: "FK_ConsultationPayment_Moodboards_MoodboardOfferId",
                table: "ConsultationPayment"
            );

            migrationBuilder.DropIndex(
                name: "IX_ConsultationPayment_MoodboardId",
                table: "ConsultationPayment"
            );

            migrationBuilder.DropIndex(
                name: "IX_ConsultationPayment_MoodboardOfferId",
                table: "ConsultationPayment"
            );

            migrationBuilder.AlterColumn<int>(
                name: "PayerId",
                table: "ConsultationPayment",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true
            );

            migrationBuilder.CreateIndex(
                name: "IX_ConsultationPayment_MoodboardId",
                table: "ConsultationPayment",
                column: "MoodboardId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_ConsultationPayment_MoodboardOfferId",
                table: "ConsultationPayment",
                column: "MoodboardOfferId"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_ConsultationPayment_AspNetUsers_ReceiverId",
                table: "ConsultationPayment",
                column: "ReceiverId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict
            );

            migrationBuilder.AddForeignKey(
                name: "FK_ConsultationPayment_Moodboards_MoodboardId",
                table: "ConsultationPayment",
                column: "MoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_ConsultationPayment_Moodboards_MoodboardOfferId",
                table: "ConsultationPayment",
                column: "MoodboardOfferId",
                principalTable: "Moodboards",
                principalColumn: "Id"
            );
        }
    }
}
