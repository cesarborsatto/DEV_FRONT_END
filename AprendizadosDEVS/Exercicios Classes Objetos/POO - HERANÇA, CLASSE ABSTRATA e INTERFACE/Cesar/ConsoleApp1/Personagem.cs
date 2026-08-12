namespace ConsoleApp1
{
    internal abstract class Personagem
    {


        public string Nome { get; private set; } = string.Empty;
        public int Vida { get; private set; }

        // -- Construtor
        public Personagem(string nome, int vida)
        {
            Nome = nome;
            Vida = vida;
        }

        // -- metodo

        public virtual void ExibirStatus()
        {
            Console.WriteLine($"Nome: {Nome}");
            Console.WriteLine($"Vida: {Vida}");
        }

        public void ReceberDano(int dano)
        {
            Vida -= dano;
        }
    }
}
