namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var ellie = new Sobrevivente("Ellei", 89, 30, "Ak47", 20);
            var joel = new Sobrevivente("Joel", 90, 32, "M4A4", 24);
            var infectado = new Infectado("Infectado01", 70, 25);

            var estacao = new Estacao("Estação Abamdonada");

            estacao.ReceberPersonagem(ellie);
            estacao.ReceberPersonagem(joel);

            estacao.ReceberPersonagem(infectado);

            Console.WriteLine("Ellie entrou na estação armada");

            infectado.Atacar(ellie);

            Console.WriteLine("Ellie recebeu o ataque e revidou");
            ellie.Atacar(infectado);

            estacao.ExibirPresentes();

            Console.WriteLine("Exibir status final dos personagens");
            ellie.ExibirStatus();
            joel.ExibirStatus();
            infectado.ExibirStatus();
        }
    }
}
