using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class PaymentTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ConsultationPayment",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "int", nullable: false)
                            .Annotation("SqlServer:Identity", "1, 1"),
                        PayerId = table.Column<int>(type: "int", nullable: false),
                        ReceiverId = table.Column<int>(type: "int", nullable: false),
                        Amount = table.Column<long>(type: "bigint", nullable: false),
                        Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                        ExpirationDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConsultationPayment", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ConsultationPayment_AspNetUsers_PayerId",
                        column: x => x.PayerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict
                    );
                    table.ForeignKey(
                        name: "FK_ConsultationPayment_AspNetUsers_ReceiverId",
                        column: x => x.ReceiverId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict
                    );
                }
            );

            migrationBuilder.CreateIndex(
                name: "IX_ConsultationPayment_PayerId",
                table: "ConsultationPayment",
                column: "PayerId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_ConsultationPayment_ReceiverId",
                table: "ConsultationPayment",
                column: "ReceiverId"
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "ConsultationPayment");
        }
    }
}
