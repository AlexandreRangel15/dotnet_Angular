using System.Collections;
using System.Collections.Generic;
using System.Globalization;

namespace curso_API.Models
{
    public class Palestrante
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public StringInfo MiniCurriculo { get; set; }
        public StringInfo ImagemURL     { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public IEnumerable<RedeSocial> RedesSociais { get; set; }

        public IEnumerable<PalestranteEvento> PalestrantesEventos { get; set; }

    }
}
