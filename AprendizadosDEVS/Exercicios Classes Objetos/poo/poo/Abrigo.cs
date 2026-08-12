namespace P_O_O
{
    internal class Abrigo
    {
        //-- ATRIBUTOS --//
        public string Nome { get; private set; } = string.Empty;

        private List<Explorador> Exploradores { get; set; } = new();



        //-- CONSTRUTOR --//
        public Abrigo(string nome)
        {
            Nome = nome;
        }

        //-- METOTOS --//
        public void ReceberExplorador(Explorador explorador)
        {
            Exploradores.Add(explorador);
        }

        public void ExibirMoradores()
        {
            Exploradores.ForEach(explorador =>
            {
                Console.WriteLine($"Nome do explorador no abrigo {explorador.Nome}");
            });
        }
    }
}
