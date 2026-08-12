using System.Text.RegularExpressions;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            lacoWile();
            //vigilanciaCDA();
            //rastreanmentoDoRandall();
            //rastreanmentoDoRandall2();
            //exemplo();
            //numerosPares();
            //tabuada();
            //intervalo();
            //idadePessoas();
            //exemplo2();
            //validacaoCDA();
        }

        static void lacoWile()

        {

            int contador = 0;
            while (contador < 20)
            {
                Console.WriteLine("Hi!!!");
                contador = contador + 1; //ou contador++//
                Console.WriteLine(contador);
            }
        }



        static void portaDoSilencio()
        {
            int contador = 0;
            int medicao = 0;
            int medicaoOK = 0;

            do
            {
                Console.WriteLine("Insira o valor da medição (0 - 100)");
                medicao = Console.ReadLine();
                    if (medicao < 20)
                {
                    medicaoOK++;
                }

                else
                {
                    medicaoOK = 0;
                }

            } while(medicaoOK == 3 || contador <12);


        }
    }
}