using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TraceServerAPI.Migrations
{
    /// <inheritdoc />
    public partial class uploadimage : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "ImageData",
                table: "actionEvents",
                type: "varbinary(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImagePath",
                table: "actionEvents",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageData",
                table: "actionEvents");

            migrationBuilder.DropColumn(
                name: "ImagePath",
                table: "actionEvents");
        }
    }
}
