namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //lacoWile();
            //vigilanciaCDA();
            //rastreanmentoDoRandall();
            //rastreanmentoDoRandall2();
            //exemplo();
            //numerosPares();
            //tabuada();
            //intervalo();
            //idadePessoas();
            exChat1();
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
        static void vigilanciaCDA()
        {
            int leituraConsecutivaOk = 0;
            int totalLeituras = 0;
            int leituraConsecutivaAlerta = 0;
            int maiorLeituraConsecutivaAlerta = 0;
            int valorTotalAlerta = 0;


            while (leituraConsecutivaOk < 5)
            {
                Console.WriteLine("Digite o valor da leitura (ALERTA, OK)");
                string valorLeitura = Console.ReadLine().Trim().ToUpper();

                while (valorLeitura != "ALERTA" && valorLeitura != "OK")
                {
                    Console.WriteLine("Valor incorreto, Digite novamente");
                    valorLeitura = Console.ReadLine().Trim().ToUpper();
                }
                if (valorLeitura == "OK")
                {
                    leituraConsecutivaOk++;

                    if (maiorLeituraConsecutivaAlerta < leituraConsecutivaAlerta)
                    {
                        maiorLeituraConsecutivaAlerta = leituraConsecutivaAlerta;
                    }
                    leituraConsecutivaAlerta = 0;

                }

                else
                {
                    leituraConsecutivaOk = 0;
                    leituraConsecutivaAlerta++;

                }

                totalLeituras++;
            }
            Console.WriteLine($"Total de Leituras  realizadas : {totalLeituras}");
            Console.WriteLine($"Maior sequencia de ALERTA consecutivas observada: {maiorLeituraConsecutivaAlerta}");
        }

        static void rastreanmentoDoRandall()
        {
            int valorLeituraPegadas = 0;
            int valorLeituraGel = 0;
            int valorLeituraNada = 0;
            int totalLeituras = 0;
            int quaseFoiPego = 0;

            while (valorLeituraPegadas < 2)
            {
                Console.WriteLine("Digite o valor da leitura (pegada, gel, nada)");
                string valorLeitura = Console.ReadLine().Trim().ToLower();

                while (valorLeitura != "gel" && valorLeitura != "pegada" && valorLeitura != "nada")
                {
                    Console.WriteLine("Valor incorreto, Digite novamente");
                    valorLeitura = Console.ReadLine().Trim().ToLower();
                }

                if (valorLeitura == "pegada")
                {
                    valorLeituraPegadas++;

                    if (quaseFoiPego < valorLeituraPegadas)
                    {
                        quaseFoiPego = valorLeituraPegadas;
                    }
                    quaseFoiPego = 0;
                }

                else
                {
                    quaseFoiPego++;
                    valorLeituraPegadas = 0;
                }

                totalLeituras++;



            }


            Console.WriteLine($"Quase foi pego {quaseFoiPego} vezes. Teve {totalLeituras} leituras de pistas.");
        }


        static void rastreanmentoDoRandall2()
        {
            int valorLeituraPegadas = 0;
            int valorLeituraGel = 0;
            int valorLeituraNada = 0;
            int totalLeituras = 0;
            string quaseFoiPego = "Nao";


            while (valorLeituraPegadas < 2)
            {
                Console.WriteLine("Digite o valor da leitura (pegada, gel, nada)");
                string valorLeitura = Console.ReadLine().Trim().ToLower();

                while (valorLeitura != "gel" && valorLeitura != "pegada" && valorLeitura != "nada")
                {
                    Console.WriteLine("Valor incorreto, Digite novamente");
                    valorLeitura = Console.ReadLine().Trim().ToLower();
                }

                if (valorLeitura == "pegada")
                {
                    valorLeituraPegadas++;

                }

                else
                {
                    if (valorLeituraPegadas > 0)
                    {
                        quaseFoiPego = "Sim";
                    }
                    valorLeituraPegadas = 0;
                }

                totalLeituras++;



            }
            Console.WriteLine($"Quase foi pego {quaseFoiPego}. Teve {totalLeituras} leituras.");

        }


        static void exemplo()
        {
            string nome = string.Empty;

            while (nome != "cesar")
            {
                Console.WriteLine("Digite seu nome");
                nome = Console.ReadLine().Trim().ToLower();
            }
            Console.WriteLine("Boa");

        }


        static void numerosPares()
        {
            int contador = 0;

            while (contador <= 100)
            {
                Console.WriteLine($"o numero {contador} é par");
                contador += 2;
            }

        }

        static void idadePessoas()
        {
            int idade = 0;
            int idadePessoas = 0;
            int quantidade = 0;

            while (idade < 5)
            {
                Console.WriteLine("Digite a idade:? ");
                idadePessoas = int.Parse(Console.ReadLine());

                if (idadePessoas >= 18)
                {
                    quantidade++;
                }

                idade++;
            }
            Console.WriteLine($"Quantidade de pessoas maiores de 18 anos é {quantidade}");


        }

        static void tabuada()
        {
            int contador = 0;
            int valor;
            int total;

            Console.WriteLine("Digite o valar da tabuada que deseja:");
            valor = int.Parse(Console.ReadLine());

            while (contador <= 10)
            {

                total = valor * contador;
                Console.WriteLine($"{valor} x {contador} = {total}");
                contador++;

            }

        }

        static void intervalo()
        {
            int contador = 0;

            while (contador >= -200)
            {
                Console.WriteLine(contador);
                contador = contador - 1;
            }


        }

        static void exChat1()
        {
                Console.WriteLine("Um sensor lê valores: \"ok\" ou \"erro\" ");
            int contador = 0;
            string entrada = string.Empty;

            while (entrada != "erro")
            {
                Console.WriteLine("Digite ok ou erro");
                entrada = Console.ReadLine().ToLower().Trim();
                if (entrada == "ok")
                {
                    contador++;
                }


                else
                {
                    contador++;
                }


            }
                Console.WriteLine("Total de leituras: " + contador);



        }






    }

}

