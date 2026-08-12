namespace ragatanga
{
    internal class Patrulheiro : Entidade, IAmeaca
    {
        public int Resistencia { get; private set; }
        private Equipamento Equipamento { get; set; }



        public Patrulheiro(string nome, int vida, int resistencia, string nomeEquipamento, int impactoEquipamento) : base(nome, vida)
        {
            if (resistencia > 0)
            {
            Resistencia = resistencia;
            }

            Equipamento = new Equipamento(nomeEquipamento, impactoEquipamento);

        }

        public void Atacar(Entidade alvo)
        {
            alvo.ReceberDano(Equipamento.Impacto);
        }

        public void ExibirStatus()
        {
            base.ExibirStatus();
            Console.WriteLine($"Resistencia: {Resistencia}");
            Console.WriteLine($"Nome do Equipamento: {Equipamento.Nome}");
            Console.WriteLine($"Impacto do equipamento: {Equipamento.Impacto}");
        }
    }
}
