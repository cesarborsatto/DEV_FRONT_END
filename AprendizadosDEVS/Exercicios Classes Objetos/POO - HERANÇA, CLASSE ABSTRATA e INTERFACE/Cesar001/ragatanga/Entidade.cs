namespace ragatanga
{
    internal abstract class Entidade
    {
        public string Nome { get; private set; } = string.Empty;
        public int Vida { get; private set; }

        // -- Construtor
        public Entidade(string nome, int vida)
        {
            Nome = nome;

            if (vida >= 0 && vida <= 100)
            {
            Vida = vida;
            }
        }

        public void ExibirStatus()
        {
            Console.WriteLine($"Nome Entidade: {Nome}");
            Console.WriteLine($"Vida Entidade: {Vida}");
        }

        public void ReceberDano(int dano)
        {
            Vida -= dano;
        }
    }
}
