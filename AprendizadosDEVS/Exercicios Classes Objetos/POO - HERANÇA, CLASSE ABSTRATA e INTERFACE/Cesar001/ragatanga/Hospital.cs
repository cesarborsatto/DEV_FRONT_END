namespace ragatanga
{
    internal class Hospital
    {
        public string Nome { get; private set; } = string.Empty;
        private List<Entidade> Entidade { get; set; } = new();

        public Hospital(string nome)
        {
            Nome = nome;
        }

        public void ReceberEntidade(Entidade entidade)
        {
            Entidade.Add(entidade);
        }

        public void ExibirPresentes()
        {
            Entidade.ForEach(entidade =>
            {
                Console.WriteLine($"Nome do persongem: {entidade.Nome}");
            });

        }
    }
}
