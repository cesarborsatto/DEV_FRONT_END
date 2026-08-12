using System;
using System.Collections.Generic;
using System.Text;

namespace ragatanga
{
    internal class Equipamento
    {
        public string Nome { get; private set; } = string.Empty;
        public int Impacto { get; private set; }

        // -- Construtor
        public Equipamento(string nome, int impacto)
        {
            Nome = nome;
            Impacto = impacto;
        }


    }
}
