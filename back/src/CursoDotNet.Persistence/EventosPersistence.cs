 using System.Linq;
using System.Threading.Tasks;
using CursoDotNet.Domain;
using CursoDotNet.Persistence.Contextos;
using CursoDotNet.Persistence.Contratos;
using Microsoft.EntityFrameworkCore;

namespace CursoDotNet.Persistence 
{
 public class EventoPersistence : IEventoPersist
    {
        private readonly CursoDotNetContext _context;
       

        public EventoPersistence(CursoDotNetContext context)
        {
            _context = context;
        }
 public async Task<Evento[]> GetAllEventosAsync(bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos
                .Include(e => e.Lotes)
                .Include(e => e.RedesSociais);

                if(includePalestrantes)
                {
                    query = query.Include(e => e.PalestrantesEventos)
                        .ThenInclude(pe => pe.Palestrante);
                }

            query = query.OrderBy(e => e.Id);

            return await query.ToArrayAsync();
        }

        public  async Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes = false)
        {
             IQueryable<Evento> query = _context.Eventos
                .Include(e => e.Lotes)
                .Include(e => e.RedesSociais);

                if(includePalestrantes)
                {
                    query = query.Include(e => e.PalestrantesEventos)
                        .ThenInclude(pe => pe.Palestrante);
                }

            query = query.OrderBy(e => e.Id).Where(e => e.Tema.ToLower().Contains(tema.ToLower()));

            return await query.ToArrayAsync();
        }

        public  async Task<Evento> GetEventoByIdAsync(int EventoId, bool includePalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos
                .Include(e => e.Lotes)
                .Include(e => e.RedesSociais);

                if(includePalestrantes)
                {
                    query = query.Include(e => e.PalestrantesEventos)
                        .ThenInclude(pe => pe.Palestrante);
                }

            query = query.OrderBy(e => e.Id).Where(e => e.Id == EventoId);

            return await query.FirstOrDefaultAsync();
        }
    }
}