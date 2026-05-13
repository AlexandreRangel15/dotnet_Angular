using System.Threading.Tasks;
using CursoDotNet.Domain;

namespace CursoDotNet.Persistence.Contratos
{
    public interface IPalestrantePersist
    {
            // Palestrantes
            Task<Palestrante[]> GetAllPalestrantesByNameAsync(string nome, bool includeEventos);
            Task<Palestrante[]> GetAllPalestrantesAsync( bool includeEventos);
            Task<Palestrante> GetPalestranteByIdAsync(int PalestranteId, bool includeEventos);
    }
}