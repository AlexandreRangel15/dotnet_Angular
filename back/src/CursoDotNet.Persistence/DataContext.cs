using CursoDotNet.Domain;
using Microsoft.EntityFrameworkCore;

namespace Curso_API.Persistence
{
    public class CursoDotNetContext : DbContext
    {
        public CursoDotNetContext(DbContextOptions<CursoDotNetContext> options) : base(options)        { }
        public DbSet<Evento> Eventos { get; set; }
    }
}