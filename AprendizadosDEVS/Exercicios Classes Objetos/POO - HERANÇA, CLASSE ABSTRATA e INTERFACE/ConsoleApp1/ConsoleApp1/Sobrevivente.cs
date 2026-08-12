namespace ConsoleApp1
{
    internal class Sobrevivente : Personagem, ICombatente
    {

        public int Municao { get; private set; }
        private Arma Arma { get; set; }


        //-- construtor
        public Sobrevivente(string nome, int vida, int municao, string nomeArma, int danoArma) : base(nome, vida)
        {
            Municao = municao;
            Arma = new Arma(nomeArma, danoArma);
        }

        
        // -- Metodos
        public void Atacar(Personagem alvo)
        {

            if(Municao < 1)
            {
                Console.WriteLine("Não há munição restante");
                return;
            }

            alvo.ReceberDano(Arma.Dano);

            Municao -= 1;
        }

        public override void ExibirStatus()
        {
            Console.WriteLine($"Sobrevivente nome: {Nome}");
            Console.WriteLine($"Sobrevivente vida: {Vida}");
            Console.WriteLine($"Sobrevivente munição: {Municao}");
            Console.WriteLine($"Sobrevivente nome arma: {Arma.Nome}");
            Console.WriteLine($"Sobrevivente dano arma {Arma.Dano}");
        }
    }
}
