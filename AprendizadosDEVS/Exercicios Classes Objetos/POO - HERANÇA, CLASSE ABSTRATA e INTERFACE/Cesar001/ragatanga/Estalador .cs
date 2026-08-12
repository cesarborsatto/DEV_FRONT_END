namespace ragatanga
{
    internal class Estalador : Entidade, IAmeaca
    {
        public int ForcaSonora { get; private set; }
        public Estalador(string nome, int vida, int forcaSonora) : base(nome, vida)
        {
            ForcaSonora = forcaSonora;
        }

        public void Atacar(Entidade alvo)
        {
            alvo.ReceberDano(ForcaSonora);
        }

        public void ExibirStatus()
        {
            base.ExibirStatus();
            Console.WriteLine($"Força Sonora: {ForcaSonora}");
        }
    }
}
