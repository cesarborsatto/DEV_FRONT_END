using System.Net.Http.Metrics;

namespace ProgramacaoOrientadaObjetos
{
    internal class Explorador
    {
        // -- Atributos da Classe
        public string NomeExplorador { get; private set; } = string.Empty;
        public int VidaExplorador { get; private set; }
        public int EnergiaExplorador { get; private set; }
        public int MunicaoExplorador { get; private set; }
        public int KitMedicoExplorador { get; private set; }

        // -- Construtor --
        public Explorador(string nome, int vida, int energia, int municao, int kitmedicoExplorador)
        {
            NomeExplorador = nome;
            VidaExplorador = vida;
            EnergiaExplorador = energia;
            MunicaoExplorador = municao;
            KitMedicoExplorador = kitmedicoExplorador;
        }

        // -- Métodos --
        public void ExibirStatusExplorador()
        {
            Console.Write($"Nome do sobrevivente: {NomeExplorador}");
            Console.Write($"Vida do sobrevivente: {VidaExplorador}");
            Console.Write($"Energia do sobrevivente: {EnergiaExplorador}");
            Console.Write($"Quantiadade de munição disponivel: {MunicaoExplorador}");
            Console.Write($"Quantiadade de kit médicos do explorador: {KitMedicoExplorador}");

        }
        public void VasculharArea()
        {
            EnergiaExplorador = EnergiaExplorador - 10;

            if (EnergiaExplorador < 0)
            {
                EnergiaExplorador = 0;
            }
        }

        public void UsarKitMedicoExplorador()
        {
            if (KitMedicoExplorador < 1)
            {
                Console.WriteLine("Não há kit médicos disponíveis");
                return;
            }
            KitMedicoExplorador--;

            VidaExplorador = VidaExplorador + 40;

            if (VidaExplorador > 100)
            {
                VidaExplorador = 100;
            }
        }

        public void ReceberDanoExplorador(int danoExplorador)
        {
            VidaExplorador = VidaExplorador - danoExplorador;

            if (VidaExplorador < 0)
            {
                VidaExplorador = 0;
            }
        }

        public void Atirar()
        {
            if (MunicaoExplorador < 1)
            {
                Console.WriteLine("Não há munição!");
                return;
            }
                       
            MunicaoExplorador = MunicaoExplorador - 1;
        }

        public void DescansarExplorador()
        {          
            EnergiaExplorador = EnergiaExplorador + 15;

            if (EnergiaExplorador > 100)
            {
                EnergiaExplorador = 0;
            }
        }
    }
}