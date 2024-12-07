using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TraceServerAPI.Models
{
    public class ActionEvent
    {
        [Key]
        public int ActionEventId { get; set; }
        [Required]
        [StringLength(16, ErrorMessage = "Title can't be longer than 16 characters.")]
        [Column(TypeName = "nvarchar(16)")]
        public string Title { get; set; } = string.Empty;
        [Required]
        [StringLength(100, ErrorMessage = "Description can't be longer than 100 characters.")]
        [Column(TypeName = "nvarchar(100)")]
        public string Description { get; set; } = string.Empty;
        [DataType(DataType.DateTime)]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        [DataType(DataType.DateTime)]
        public DateTime? UpdatedAt { get; set; } = null;
        public bool IsDeleted { get; set; } = false;

        public void MarkAsDeleted()
        {
            IsDeleted = true;
            UpdatedAt = DateTime.UtcNow;
        }

    }
}
