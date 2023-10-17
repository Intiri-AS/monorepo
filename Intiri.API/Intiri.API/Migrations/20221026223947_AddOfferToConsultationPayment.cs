using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class AddOfferToConsultationPayment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MoodboardOfferId",
                table: "ConsultationPayment",
                type: "int",
                nullable: true
            );

            migrationBuilder.CreateIndex(
                name: "IX_ConsultationPayment_MoodboardOfferId",
                table: "ConsultationPayment",
                column: "MoodboardOfferId"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_ConsultationPayment_Moodboards_MoodboardOfferId",
                table: "ConsultationPayment",
                column: "MoodboardOfferId",
                principalTable: "Moodboards",
                principalColumn: "Id"
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ConsultationPayment_Moodboards_MoodboardOfferId",
                table: "ConsultationPayment"
            );

            migrationBuilder.DropIndex(
                name: "IX_ConsultationPayment_MoodboardOfferId",
                table: "ConsultationPayment"
            );

            migrationBuilder.DropColumn(name: "MoodboardOfferId", table: "ConsultationPayment");
        }
    }
}
