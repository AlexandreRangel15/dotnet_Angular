using System.Collections.Generic;
using System.Linq;
using CursoDotNet.Domain;
using Microsoft.AspNetCore.Mvc;
using CursoDotNet.Persistence.Contextos;

namespace curso_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        private readonly CursoDotNetContext _context;

        public EventoController(CursoDotNetContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _context.Eventos;
        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id)
        {
            return _context.Eventos.Where(evento => evento.Id == id);
        }

        [HttpPost]
        public string Post()
        {
            return "exemplo de post";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"exemplo de put para o ID {id}";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"exemplo de delete para o ID {id}";
        }
    }
}
