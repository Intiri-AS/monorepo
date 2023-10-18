using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Intiri.API.Migrations
{
    public partial class AddConsultationEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Consultations",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "int", nullable: false)
                            .Annotation("SqlServer:Identity", "1, 1"),
                        Duration = table.Column<int>(type: "int", nullable: false),
                        Price = table.Column<float>(type: "real", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consultations", x => x.Id);
                }
            );

            migrationBuilder.InsertData(
                table: "Consultations",
                columns: new[] { "Id", "Duration", "Price" },
                values: new object[] { 1, 60, 950f }
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "Consultations");
        }
    }
}
