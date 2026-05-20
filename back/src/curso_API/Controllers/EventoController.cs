using System.Collections.Generic;
using System.Linq;
using CursoDotNet.Domain;
using Microsoft.AspNetCore.Mvc;
using CursoDotNet.Persistence.Contextos;
using CursoDotNet.Application.Contratos;
using System.Threading.Tasks;
using CursoDotNet.Persistence.Contratos;
using System;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace curso_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        private readonly IEventoService _eventoService;
        private readonly IGeralPersist _geralPersist;

        public EventoController(IEventoService eventoService, IGeralPersist geralPersist)
        {
            _eventoService = eventoService;
            _geralPersist = geralPersist;
        }

        [HttpGet]
        public async Task <IActionResult> Get()
        {
            try
            {
                var eventos = await _eventoService.GetAllEventosAsync();
                if(eventos == null) return NotFound("Nenhum evento encontrado.");

                return Ok(eventos);
            }
            catch (Exception ex)
            {
                return this.StatusCode(500, $"Erro ao tentar recuperar eventos. Erro: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task <IActionResult> GetById(int id)
        {
            try
            {
                var evento = await _eventoService.GetEventoByIdAsync(id, false);
                if(evento == null) return NotFound("Evento por ID não encontrado.");

                return Ok(evento);
            }
            catch (Exception ex)
            {
                return this.StatusCode(500, $"Erro ao tentar recuperar evento. Erro: {ex.Message}");
            }
        }


        [HttpGet("{Tema}/tema")]
        public async Task <IActionResult> GetByTema(string tema)
        {
            try
            {
                var evento = await _eventoService.GetAllEventosByTemaAsync(tema, false);
                if(evento == null) return NotFound("Eventos por tema não encontrados.");

                return Ok(evento);
            }
            catch (Exception ex)
            {
                return this.StatusCode(500, $"Erro ao tentar recuperar evento. Erro: {ex.Message}");
            }
        }


        [HttpPost]
        public async Task <IActionResult> Post(Evento model)
        {
            try
            {
                var evento = await _eventoService.AddEventos(model);
                if(evento == null) return BadRequest("Erro ao tentar adicionar evento.");

                return Ok(evento);
            }
            catch (Exception ex)
            {
                return this.StatusCode(500, $"Erro ao tentar adicionar evento. Erro: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task <IActionResult> Put(int id, Evento model)
        {
            try
            {
                var evento = await _eventoService.UpdateEventos(id, model);
                if(evento == null) return BadRequest("Erro ao tentar atualizar evento.");

                return Ok(evento);
            }
            catch (Exception ex)
            {
                return this.StatusCode(500, $"Erro ao tentar atualizar evento. Erro: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task <IActionResult> Delete(int id)
        {
            try
            {
                var evento = await _eventoService.GetEventoByIdAsync(id, false);
                if(evento == null) return NotFound("Evento não encontrado.");

                _geralPersist.Delete(evento);
                if (await _geralPersist.SaveChangesAsync())
                {
                    return Ok("Evento deletado.");
                }

                return BadRequest("Erro ao tentar deletar evento.");
            }
            catch (Exception ex)
            {
                return this.StatusCode(500, $"Erro ao tentar deletar evento. Erro: {ex.Message}");
            }
        }
    }
}
