using System.Threading.Tasks;
using CursoDotNet.Domain;

namespace CursoDotNet.Persistence.Contratos
{
    public interface IEventoPersist
    {
            // Eventos
            Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes = false);
            Task<Evento[]> GetAllEventosAsync( bool includePalestrantes = false);
            Task<Evento> GetEventoByIdAsync(int eventoId, bool includePalestrantes = false);

    }
}