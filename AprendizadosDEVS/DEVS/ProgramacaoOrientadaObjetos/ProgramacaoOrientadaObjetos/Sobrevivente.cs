using System.Net.Http.Metrics;
namespace ProgramacaoOrientadaObjetos
{
    internal class Sobrevivente
    {
        // -- Atributos da Classe
        public string Nome { get; private set; } = string.Empty;
        public int Vida { get; private set; }
        public int Energia { get; private set; }
        public int KitMedico { get; private set; }
        // -- Construtor --
        public Sobrevivente(string nome, int vida, int energia, int kitmedico)
        {
            Nome = nome;
            Vida = vida;
            Energia = energia;
            KitMedico = kitmedico;
        }
        // -- Métodos --
        public void ExibirStatusSobrevivente()
        {
            Console.Write($"Nome do sobrevivente: {Nome}");
            Console.Write($"Vida do sobrevivente: {Vida}");
            Console.Write($"Energia do sobrevivente: {Energia}");
            Console.Write($"Quantiadade de kit médicos do sobrevivente: {KitMedico}");
        }
        public void PatrulharSobrevivente()
        {
            Energia = Energia - 10;

            if (Energia < 0)
            {
                Energia = 0;
            }
        }
        public void ReceberDanoSobrevivente(int dano)
        {
            Vida = Vida - dano;

            if (Vida < 0)
            {
                Vida = 0;
            }
        }
        public void UsarKitMedicoSobrevivente()
        {
            if (KitMedico < 1)
            {
                Console.WriteLine("Não há kit médicos disponíveis");
                return;
            }
            KitMedico--;

            Vida = Vida + 40;

            if (Vida > 100)
            {
                Vida = 100;
            }
        }
        public void DescansarSobrevivente()
        {
            Energia = Energia + 20;

            if (Energia > 100)
            {
                Energia = 100;
            }
        }
    }
}