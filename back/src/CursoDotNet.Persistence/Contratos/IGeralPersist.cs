using System.Threading.Tasks;
using CursoDotNet.Domain;

namespace CursoDotNet.Persistence.Contratos
{
    public interface IGeralPersist
    {
        // Geral
            void Add<T>(T entity) where T : class;  
            void Update<T>(T entity) where T : class;  
            void Delete<T>(T entity) where T : class;  
            void DeleteRange<T>(T[] entities) where T : class;
        Task<bool> SaveChangesAsync();
    }
}