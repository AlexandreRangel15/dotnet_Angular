using System.Threading.Tasks;
using CursoDotNet.Domain;

namespace CursoDotNet.Persistence.Contratos
{
    public interface IEventoPersist
    {
            // Eventos
            Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes);
            Task<Evento[]> GetAllEventosAsync( bool includePalestrantes);
            Task<Evento> GetEventoByIdAsync(int EventoId, bool includePalestrantes);

    }
}