using CursoDotNet.Domain;
using Microsoft.EntityFrameworkCore;

namespace CursoDotNet.Persistence.Contextos
{
    public class CursoDotNetContext : DbContext
    {
        public CursoDotNetContext(DbContextOptions<CursoDotNetContext> options) : base(options)        { }
        public DbSet<Evento> Eventos { get; set; }
        public DbSet<Lote> Lotes { get; set; }
        public DbSet<RedeSocial> RedesSociais { get; set; }
        public DbSet<PalestranteEvento> PalestrantesEventos { get; set; }
        public DbSet<Palestrante> Palestrantes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PalestranteEvento>()
                .HasKey(PE => new { PE.EventoId, PE.PalestranteId });
            
            modelBuilder.Entity<Evento>()
                .HasMany(e => e.RedesSociais)
                .WithOne(rs => rs.Evento)
                .HasForeignKey(rs => rs.EventoId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Palestrante>()
                .HasMany(p => p.RedesSociais)
                .WithOne(rs => rs.Palestrante)
                .HasForeignKey(rs => rs.PalestranteId)
                .OnDelete(DeleteBehavior.Cascade);    

        }
    }
}