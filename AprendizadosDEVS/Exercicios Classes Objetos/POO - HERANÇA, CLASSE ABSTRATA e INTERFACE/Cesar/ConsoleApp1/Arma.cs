namespace ConsoleApp1
{
    internal class Arma
    {
        public string Nome { get; private set; } = string.Empty;
        public int Dano { get; private set; }

        public Arma(string nome, int dano)
        {
            Nome = nome;
            Dano = dano;
        }
    }
}
