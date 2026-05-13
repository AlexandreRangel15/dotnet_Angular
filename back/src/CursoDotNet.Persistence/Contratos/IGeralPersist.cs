using System.Threading.Tasks;
using CursoDotNet.Domain;

namespace CursoDotNet.Persistence.Contratos
{
    public interface IGeralPersist
    {
        // Geral
            void add<T>(T entity) where T : class;  
            void update<T>(T entity) where T : class;  
            void delete<T>(T entity) where T : class;  
            void DeleteRange<T>(T[] entities) where T : class;  

    }
}