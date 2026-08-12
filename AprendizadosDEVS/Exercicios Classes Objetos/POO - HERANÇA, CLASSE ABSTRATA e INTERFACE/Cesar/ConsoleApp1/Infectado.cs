namespace ConsoleApp1
{
    internal class Infectado : Personagem, ICombatente
    {
        public int ForcaAtaque { get; private set; }



        // -- construtor
        public Infectado(string nome, int vida, int forcaAtaque) : base(nome, vida)
        {
            ForcaAtaque = forcaAtaque;
        }

        //Metodo
        public void Atacar(Personagem alvo)
        {
            alvo.ReceberDano(ForcaAtaque);
        }

        public override void ExibirStatus()
        {
            base.ExibirStatus();
            Console.WriteLine($"Infectado força ataque: {ForcaAtaque}");
        }
    }
}

