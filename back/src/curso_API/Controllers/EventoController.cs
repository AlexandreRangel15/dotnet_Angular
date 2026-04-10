using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using curso_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace curso_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        public IEnumerable<Evento> _evento = new Evento[] {
            new Evento() {
              EventoId = 1,
              Local = "São Paulo",
                DataEvento = DateTime.Now.AddMonths(2).ToString("dd/MM/yyyy")   ,
                Tema = "Festa da Música",
                QtdPessoas = 100,
                Lote = "1º Lote",
                ImagemURL = "https://example.com/imagem.jpg"  
                },
                
                new Evento() {
              EventoId = 2,
              Local = "Rio de Janeiro",
                DataEvento = DateTime.Now.AddMonths(3).ToString("dd/MM/yyyy")   ,
                Tema = "Festa do Cinema",
                QtdPessoas = 200,
                Lote = "1º Lote",
                ImagemURL = "https://example.com/imagem.jpg"  
                }
        };
        public EventoController()
        {
           
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _evento;
        }

        [HttpGet]
        public IEnumerable<Evento> GetById(int id)
        {
            return _evento.Where(evento => evento.EventoId == id);
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
