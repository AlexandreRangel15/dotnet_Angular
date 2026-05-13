using System.Linq;
using System.Threading.Tasks;
using CursoDotNet.Domain;
using CursoDotNet.Persistence.Contextos;
using CursoDotNet.Persistence.Contratos;
using Microsoft.EntityFrameworkCore;

namespace CursoDotNet.Persistence 
{
    public class PalestrantePersistence : IPalestrantePersist
        {
            private readonly CursoDotNetContext _context;
         
    
            public PalestrantePersistence(CursoDotNetContext context)
            {
                _context = context;
            }
  public async Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos = false)
        {
            IQueryable<Palestrante> query = _context.Palestrantes           
                .Include(p => p.RedesSociais);

                if(includeEventos)
                {
                    query = query.Include(p => p.PalestrantesEventos)
                        .ThenInclude(pe => pe.Evento);
                }

            query = query.OrderBy(p => p.Id);

            return await query.ToArrayAsync();
        }

        public async Task<Palestrante[]> GetAllPalestrantesByNameAsync(string nome, bool includeEventos = false)
        {
             IQueryable<Palestrante> query = _context.Palestrantes           
                .Include(p => p.RedesSociais);

                if(includeEventos)
                {
                    query = query.Include(p => p.PalestrantesEventos)
                        .ThenInclude(pe => pe.Evento);
                }

            query = query.OrderBy(p => p.Id)
            .Where(p => p.Nome.ToLower().Contains(nome.ToLower()));

            return await query.ToArrayAsync();
        }

        public async Task<Palestrante> GetPalestranteByIdAsync(int PalestranteId, bool includeEventos = false)
        {
            IQueryable<Palestrante> query = _context.Palestrantes           
                .Include(p => p.RedesSociais);

                if(includeEventos)
                {
                    query = query.Include(p => p.PalestrantesEventos)
                        .ThenInclude(pe => pe.Evento);
                }

            query = query.OrderBy(p => p.Id)
            .Where(p => p.Id == PalestranteId);

            return await query.FirstOrDefaultAsync();
        }
    }
}