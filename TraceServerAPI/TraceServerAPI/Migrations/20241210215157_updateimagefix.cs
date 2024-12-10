using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TraceServerAPI.Migrations
{
    /// <inheritdoc />
    public partial class updateimagefix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImagePath",
                table: "actionEvents");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImagePath",
                table: "actionEvents",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true);
        }
    }
}
