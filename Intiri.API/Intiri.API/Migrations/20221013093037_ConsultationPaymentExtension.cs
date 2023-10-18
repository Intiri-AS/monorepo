using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class ConsultationPaymentExtension : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MoodboardId",
                table: "ConsultationPayment",
                type: "int",
                nullable: true
            );

            migrationBuilder.AddColumn<int>(
                name: "NumberOfConsultations",
                table: "ConsultationPayment",
                type: "int",
                nullable: false,
                defaultValue: 0
            );

            migrationBuilder.CreateIndex(
                name: "IX_ConsultationPayment_MoodboardId",
                table: "ConsultationPayment",
                column: "MoodboardId"
            );

            migrationBuilder.AddForeignKey(
                name: "FK_ConsultationPayment_Moodboards_MoodboardId",
                table: "ConsultationPayment",
                column: "MoodboardId",
                principalTable: "Moodboards",
                principalColumn: "Id"
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ConsultationPayment_Moodboards_MoodboardId",
                table: "ConsultationPayment"
            );

            migrationBuilder.DropIndex(
                name: "IX_ConsultationPayment_MoodboardId",
                table: "ConsultationPayment"
            );

            migrationBuilder.DropColumn(name: "MoodboardId", table: "ConsultationPayment");

            migrationBuilder.DropColumn(
                name: "NumberOfConsultations",
                table: "ConsultationPayment"
            );
        }
    }
}
