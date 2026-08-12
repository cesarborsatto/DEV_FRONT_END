using System.Text.RegularExpressions;

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
            //exemplo2();
            //validacaoCDA();
            //portaSilenciosa();
            numeroAleatorio();

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
                Console.WriteLine("Digite o valor da leitura (ALERTA, OK) -->");
                string valorLeitura = Console.ReadLine().Trim().ToUpper();

                while (valorLeitura != "ALERTA" && valorLeitura != "OK")
                {
                    Console.WriteLine("Valor incorreto, Digite novamente -->");
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
                string pistas = Console.ReadLine().Trim().ToLower();

                while (pistas != "gel" && pistas != "pegada" && pistas != "nada")
                {
                    Console.WriteLine("Valor incorreto, Digite novamente");
                    pistas = Console.ReadLine().Trim().ToLower();
                }

                if (pistas == "pegada")
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
            Console.WriteLine($"Quase foi pego:? {quaseFoiPego}. Teve {totalLeituras} leituras.");

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

                if (contador % 2 == 0)
                {

                }
            {
                Console.WriteLine($"o numero {contador} é par");
                contador++;
            }

        }

        static void idadePessoas()
        {
            int contador = 0;
            int idadePessoas = 0;
            int quantidade = 0;

            while (contador < 5)
            {
                Console.WriteLine("Digite a idade:? ");
                idadePessoas = int.Parse(Console.ReadLine());

                if (idadePessoas >= 18)
                {
                    quantidade++;
                }

                contador++;
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

        static void exemplo2()
        {
            int numero = 0;

            do
            {
                Console.WriteLine(numero);
                numero++;
            } while (numero < 10);
        }

        static void validacaoCDA()
        {
            Console.WriteLine("Digite um codigo no formato  CDA-###");

            var regexCogido = new Regex(@"^CDA-\d{3}$");
            string codigo = string.Empty;
            int numeroTentativas = 0;

            do
            {
                Console.WriteLine("Digite o codigo da porta (CDA-123: ");
                codigo = Console.ReadLine();
                numeroTentativas++;
            } while (regexCogido.IsMatch(codigo));

            Console.WriteLine("Liberado");
            Console.WriteLine($"Numeros de tentativas: {numeroTentativas}");


        }

        static void portaSilenciosa()

        {

            int contador = 0;
            int maiorValor = 0;
            int medicaoOK = 0;
            int medicao = 0;

            do
            {
                Console.WriteLine("Insira o valor da medição (0 - 100)");
                medicao = int.Parse(Console.ReadLine());
                while (medicao < 0 || medicao > 100)
                {
                    Console.WriteLine("Valor digitado fora do padrao. digite novamente");
                    medicao = int.Parse(Console.ReadLine());
                }
                if (medicao > maiorValor)
                {
                    maiorValor = medicao;

                }
                if (medicao < 20)
                {
                    medicaoOK++;
                }

                else
                {
                    medicaoOK = 0;
                }
                contador++;

            } while (medicaoOK < 3 && contador < 12);


            if (medicaoOK == 3)
            {
                Console.WriteLine("Silêncio aprovado");
            }
            else
            {
                Console.WriteLine("Silêncio reprovado, atingiu numero maximo de medições");
            }

            Console.WriteLine($"Total de medições: {contador}");
            Console.WriteLine($"Maior ruído: {maiorValor}");

        }

        static void numeroAleatorio()
        {
            Random random = new Random();
            int tentativaDeAcerto = 0;
            int contador = 0;
            
                int numeroAleatorio = random.Next(1, 101);

            do
            {
                Console.WriteLine("tente acertar o numero gerado entre 0 e 100 ---> ");
                tentativaDeAcerto = int.Parse(Console.ReadLine());
                
                
                if (tentativaDeAcerto > numeroAleatorio)
                {
                    Console.WriteLine("O nemero é menor, digite navamente.");
                
                }

                else if (tentativaDeAcerto < numeroAleatorio)
                {
                    Console.WriteLine("O nemero é maior, digite navamente.");
               
                }
                contador++;

            } while (numeroAleatorio != tentativaDeAcerto);

            Console.WriteLine($"Pasabens voce acertou depois de {contador } tentativas");

            

        }
    }

}




