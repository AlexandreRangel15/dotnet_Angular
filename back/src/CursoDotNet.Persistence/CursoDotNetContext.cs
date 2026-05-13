using CursoDotNet.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace CursoDotNet.Persistence
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

        }
    }
}