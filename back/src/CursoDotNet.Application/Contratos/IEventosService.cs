using System.Threading.Tasks;
using CursoDotNet.Domain;

namespace CursoDotNet.Application.Contratos
{
    public interface IEventoService
    {
        Task<Evento> AddEventos(Evento model);
        Task<Evento> UpdateEventos(int eventoId, Evento model);
        Task<bool> DeleteEvento(int eventoId);

        Task<Evento[]> GetAllEventosAsync( bool includePalestrantes = false);
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes = false);
        Task<Evento> GetEventoByIdAsync(int eventoId, bool includePalestrantes = false);

    }
}