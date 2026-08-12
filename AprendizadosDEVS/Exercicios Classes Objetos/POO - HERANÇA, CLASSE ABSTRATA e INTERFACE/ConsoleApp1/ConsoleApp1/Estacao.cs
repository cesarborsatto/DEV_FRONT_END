namespace ConsoleApp1
{
    internal class Estacao
    {
        public string Nome { get; private set; } = string.Empty;
        private List<Personagem> Personagem { get; set; } = new();
        

        public Estacao(string nome)
        {
            Nome = nome; 
        }

        // -- Metodos 

        public void ReceberPersonagem(Personagem personagem)
        {
            Personagem.Add(personagem);
        }

        public void ExibirPresentes()
        {
            Personagem.ForEach(personagem =>
            {
                Console.WriteLine($"Nome do persongem: {personagem.Nome}");
            });
        }
    }
}
