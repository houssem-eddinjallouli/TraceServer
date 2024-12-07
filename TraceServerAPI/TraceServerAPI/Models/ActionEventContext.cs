using Microsoft.EntityFrameworkCore;

namespace TraceServerAPI.Models
{
    public class ActionEventContext : DbContext
    {
        public ActionEventContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<ActionEvent> actionEvents { get; set; }
    }
}
