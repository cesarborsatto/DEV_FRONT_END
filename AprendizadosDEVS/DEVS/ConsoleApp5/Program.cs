namespace show_do_Sustao
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //cilindro100porCento();
            esteirasDePortas();

        }


        static void cilindro100porCento()
        {
            Console.WriteLine("Precisamos encher o cilindro de energia até 100%. Peça ao usuário que informe, a cada iteração," +
                " quantos kJ foram capturados (ex.: 5, 12, 20…). Some os valores e pare quando atingir ou ultrapassar 100%." +
                " Exiba o total de iterações realizadas.");

            //-----------------------------------------------

            float totalKJ = 0;
            float kjCapturados = 0;
            int iteracoes = 0;

            Console.WriteLine("Digite a quantidade de kJ capturados: ");
            kjCapturados = float.Parse(Console.ReadLine().Trim());

            while (totalKJ < 100)
            {
                totalKJ += kjCapturados;
                iteracoes++;
                if (totalKJ >= 100)
                {
                    Console.WriteLine($"Cilindro cheio! Total de iterações: {iteracoes}");
                    break;
                }

                Console.WriteLine("Digite a quantidade de kJ capturados: ");
                kjCapturados = float.Parse(Console.ReadLine().Trim());
            }
        }

        static void esteirasDePortas()
        {
            Console.WriteLine("Temos 10 estações de esteiras. Percorra de 1 a 10 e exiba: “Estação X ok”" +
                " para cada número. A cada 5 estações, exiba: “Manutenção rápida na estação X!”. A primeira " +
                "estação em manutenção é a de nº6 (Sugerido: for) Obs: faça de uma forma na qual se a" +
                "quantidade de estações aumentar, continue funcionando.");

            Console.WriteLine("Digite o número de estações: ");
            int numeroDeEstacoes = int.Parse(Console.ReadLine());

            for (int i = 1; i <= numeroDeEstacoes; i++)
            {
                Console.WriteLine($"Estação {i} ok");

                if (i >= 6 && (i - 6) % 5 == 0)
                {
                    Console.WriteLine($"Manutenção rápida na estação {i}!");
                }
            }
        }
    }
}
