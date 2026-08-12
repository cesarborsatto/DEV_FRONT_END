using System.Net;
using System.Runtime.Intrinsics.X86;
using System.Security.Cryptography;
using System.Text.RegularExpressions;


using Evento = (
string id,
string status
);

using Evento2 = (
string portaId,
string status,
float energia
);

namespace show_do_Sustao
{
    internal class Program
    {


        static void Main(string[] args)
        {
            //cilindro100porCento();
            //esteirasDePortas();
            //filtroDePortasDefeituosas();
            //escaldaDeMonstros();
            //conferenciaDeCilindros();
            relatorioDoTurno();
        }


        static void cilindro100porCento()
        {
            //Console.WriteLine("Precisamos encher o cilindro de energia até 100%. Peça ao usuário que informe, a cada iteração," +
            // quantos kJ foram capturados(ex.: 5, 12, 20…).Some os valores e pare quando atingir ou ultrapassar 100 %. +
            // Exiba o total de iterações realizadas.);

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
            //Console.WriteLine("Temos 10 estações de esteiras. Percorra de 1 a 10 e exiba: “Estação X ok”" +
            // para cada número.A cada 5 estações, exiba: “Manutenção rápida na estação X!”. A primeira +
            //estação em manutenção é a de nº6(Sugerido: for) Obs: faça de uma forma na qual se a +
            //quantidade de estações aumentar, continue funcionando.);

            int NumeroDeEstacoes = 0;

            Console.WriteLine("Digite o número de estações: ");
            NumeroDeEstacoes = int.Parse(Console.ReadLine().Trim());

            for (int i = 1; i <= NumeroDeEstacoes; i++)
            {
                if (i > 5 && (i - 1) % 5 == 0)
                {
                    Console.WriteLine($"Manutenção rápida na estação {i}!");
                }

                Console.WriteLine($"Estação {i} ok");
            }
        }

        static void filtroDePortasDefeituosas()
        {

            //  Peça ao usuário a quantidade de informações para popular um array de tuplas portas:(id, status),
            //  onde id é no padrão “IdPorta01” e status é “Ok” ou “Defeito”.
            //  Retorne um novo array contendo apenas os ids com defeito.
            //  Retorne também a quantidade total de defeituosas.

            int qtdePortas = 0;
            List<string> idDefeitos = new();
            var regexIdPorta = new Regex(@"^(idporta)\d{2}$");
            var regexStatus = new Regex(@"^(ok|defeito)$");
            int contador = 0;

            string idPorta = "";
            string statusPorta = "";


            Console.WriteLine("Digite a quantidade de portas: ");
            qtdePortas = int.Parse(Console.ReadLine().Trim());

            Evento[] eventos = new Evento[qtdePortas];

            for (int i = 0; i < qtdePortas; i++)
            {

                Console.WriteLine("Digite o id da porta: (Ex. IdPorta01, IdPorta02, ...) ");
                idPorta = Console.ReadLine().Trim().ToLower();

                while (!regexIdPorta.IsMatch(idPorta))
                {
                    Console.WriteLine("Id da porta inválido. Digite novamente (Ex. IdPorta01, IdPorta02, ...): ");
                    idPorta = Console.ReadLine().Trim().ToLower();
                }

                //    -----------------------------    //

                Console.WriteLine("Digite o status da porta (Ok ou Defeito): ");
                statusPorta = Console.ReadLine().Trim().ToLower();

                while (!regexStatus.IsMatch(statusPorta))
                {
                    Console.WriteLine("Status da porta inválido. Digite novamente (Ok ou Defeito): ");
                    statusPorta = Console.ReadLine().Trim().ToLower();
                }

                eventos[i].id = idPorta;
                eventos[i].status = statusPorta;

            }

            foreach (var evento in eventos)
            {
                if (evento.status == "defeito")
                {
                    contador++;
                    idDefeitos.Add((evento.id));
                }
            }

            Console.WriteLine("Portas com defeito são -->: ");
            Console.WriteLine(string.Join(", ", idDefeitos));
            Console.WriteLine($"Quantidade total de portas defeituosas: {contador}");

        }

        //-------------------------------------------------------//

        static void escaldaDeMonstros()
        {
            //      Peça a quantidade de monstros.
            //      Peça ao usuário um array com nomes de monstros.
            //      Peça a quantidade de portas; liste "Porta i→ Monstro X".
            //      Se faltarem monstros, imprima "Porta i -→ em espera".

            int qtdeMonstros = 0;
            int qtdPortas = 0;
            string entrada = string.Empty;


            Console.WriteLine("Digite os nomes dos monstros separados por vírgula:");
            entrada = Console.ReadLine().Trim();

            string[] nomesMonstros = entrada.Split(',');

            Console.WriteLine("Digite a quantidade de portas:");
            qtdPortas = int.Parse(Console.ReadLine());


            for (int i = 0; i < qtdPortas; i++)
            {
                if (i < nomesMonstros.Length)
                {
                    Console.WriteLine($"Porta {(i + 1)} -> Monstro {nomesMonstros[i]}");
                }
                else
                {
                    Console.WriteLine($"Porta {(i + 1)} -> em espera");
                }
            }
        }

        static void conferenciaDeCilindros()
        {
            //      Conferência de Cilindros

            //      O operador informa a leitura em % do nível de energia dos cilindros(0 - 100). Continue
            //      lendo até o usuário digitar "fim".Ao final, exiba quantos cilindros estavam< 20 % e
            //      a média geral de energia de todos os cilindros.
            //      (Sugerido: do -while).


            float energiaDosCilidros;
            string entrada = string.Empty;
            int contadorMenorQ20 = 0;
            int contador = 0;
            float media = 0;
            float soma = 0;

            do
            {
                Console.WriteLine("Digite o nível de energia dos cilindros(0 - 100). para parar digite fim.");
                entrada = Console.ReadLine();

                if (entrada == "fim")
                    break;

                if (float.TryParse(entrada, out energiaDosCilidros))
                {
                    while (energiaDosCilidros < 0 || energiaDosCilidros > 100)
                    {
                        Console.WriteLine("Valor inválido! Digite apenas números entre 0 e 100.");
                        entrada = Console.ReadLine();
                        float.TryParse(entrada, out energiaDosCilidros);
                    }



                    if (energiaDosCilidros <= 20)
                    {
                        contadorMenorQ20++;
                    }
                }
                contador++;
                soma = soma + energiaDosCilidros;

            } while (true);
            media = soma / contador;

            Console.WriteLine($"{contadorMenorQ20} cilidros estavam abaixo de 20%");
            Console.WriteLine($"A media de energia dos cilindros é de {media}%");

        }

        static void relatorioDoTurno()
        {
            //      Relatório do Turno

            //      Peça ao usuário a quantidade e os valores de um array de eventos:
            //      (portaId(P01...), status(ok ou falha), energia(número)).Calcule e
            //      mostre: energia total, quantidade de ok, quantidade de falhas
            //      e a média de energia de todos os eventos. (Sugerido: for).

            int qtdeValores = 0;
            var regexIdPorta = new Regex(@"^(p)\d{2}$");
            var regexStatus = new Regex(@"^(ok|falha)$");
            float SomaEnergiaTotal = 0;
            int qtdeOk = 0;
            int qtdeFalha = 0;
            float mediaEnergia = 0;
            string id = "";
            string STATUS = "";
            float ENERGIA = 0;


            Console.WriteLine("Digite a quantidade de valores do array.");
            qtdeValores = int.Parse(Console.ReadLine().Trim());

            Evento2[] eventos2 = new Evento2[qtdeValores];

            for (int i = 0; i < qtdeValores; i++)
            {
                Console.WriteLine("Digite a o Id da porta:(Ex. P01, P02, ...)");
                id = Console.ReadLine().Trim().ToLower();

                while (!regexIdPorta.IsMatch(id))
                {
                    Console.WriteLine("Padrão de porta errada, Digite o Id da porta: (Ex. P01, P02, ...): ");
                    id = Console.ReadLine().Trim().ToLower();
                }

                Console.WriteLine("Digite o status da porta (Ok ou Falha)");
                STATUS = Console.ReadLine().Trim().ToLower();

                while (!regexStatus.IsMatch(STATUS))
                {
                    Console.WriteLine("Digite apenas Ok ou Falha: ");
                    STATUS = Console.ReadLine().Trim().ToLower();
                }

                Console.WriteLine("Digite um valor de energia entre 0 e 100:");
                ENERGIA = float.Parse(Console.ReadLine().Trim());

                while (ENERGIA < 0 || ENERGIA > 100)
                {
                    Console.WriteLine("Digite um valor de energia entre 0 e 100:");
                    ENERGIA = float.Parse(Console.ReadLine().Trim());
                }

                eventos2[i].portaId = id;
                eventos2[i].status = STATUS;
                eventos2[i].energia = ENERGIA;

                foreach (var Evento2 in eventos2)
                {
                    SomaEnergiaTotal += ENERGIA;

                }

                foreach (var Evento2 in eventos2)
                {
                    if (Evento2.status == "ok")
                    {
                        qtdeOk++;
                    }
                    else
                    {
                        qtdeFalha++;
                    }
                }


            }
                mediaEnergia = SomaEnergiaTotal / qtdeValores;
                Console.WriteLine($"Energia total: {SomaEnergiaTotal}");
                Console.WriteLine($"Quantidade OK: {qtdeOk}");
                Console.WriteLine($"Quantidade Falha: {qtdeFalha}");
                Console.WriteLine($"Média de energia: {mediaEnergia}");

        
        }
    }
}
