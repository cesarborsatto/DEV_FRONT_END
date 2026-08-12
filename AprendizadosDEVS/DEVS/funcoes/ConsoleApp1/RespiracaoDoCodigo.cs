namespace ConsoleApp1
{
    internal class RespiracaoDoCodigo
    {

        public static void PosturaDeAtauque()
        {
            int valorAtaqueAtual = 20;
            int valorDefesaAtual = 20;
            string postura = "descanso";



            postura = "ataque";
            valorAtaqueAtual += 10;
            valorDefesaAtual = 0;

            Console.WriteLine(postura);
            Console.WriteLine(valorAtaqueAtual);
            Console.WriteLine(valorDefesaAtual);

        }
    }
}

