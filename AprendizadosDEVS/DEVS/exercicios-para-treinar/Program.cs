using static System.Net.Mime.MediaTypeNames;

namespace exercicios_para_treinar
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // exercicio01();
            // exercicio02();
            // exercicio03();
            exercicio04();

        }

        static void exercicio01()
        {
            int[] numeros = [ 10, 20, 30, 40, 50, 60 ];
            int primeiro = numeros[0];
            int ultimo = numeros[numeros.Length - 1];
            int soma = 0;

            Console.WriteLine($"Primeiro valor: {primeiro}");
            Console.WriteLine($"Último valor: {ultimo}");


            foreach (int numero in numeros) {
                soma = soma + numero;                   
            }

            Console.WriteLine($"A soma total é: {soma}");
        }

        static void exercicio02()
        {
            Console.WriteLine("Digite nomes separadopor virgulas (ex: Cesar, Bruno, João");
            string entrada = Console.ReadLine();

            string[] nomes = entrada.Split(',');

            for (int i = nomes.Length - 1; i >= 0; i--) 
            {
                Console.WriteLine(nomes[i]);
            }
        }

        static void exercicio03()
        {
            int[] numeros = [5, 12, 8, 25, 33, 47, 2, 19, 10, 6];
            bool encontrou = false;
            

            Console.WriteLine("Digite o numero que deseja encontrar lista.");
            int encontrarNumero = int.Parse(Console.ReadLine());

            for (int i = 0; i < numeros.Length; i++)
            {
                if ( numeros[i] == encontrarNumero )
                {
                    Console.WriteLine($"Parabens o numero {encontrarNumero} está no indece {i} do array");
                    encontrou = true;
                    break;
                }                                            
            }
            if (!encontrou)
            {
                Console.WriteLine($"O array não possui o número: {encontrarNumero}");
            }
        }

        static void exercicio04()
        {

            Console.WriteLine("Digite quais frutas seran carregas. (separe com , )");
            string entrada = Console.ReadLine();
            string[] frutas = entrada.Split(',');

            Console.WriteLine("Digite o numero de caixas");
            int qtdCaixas = int.Parse(Console.ReadLine().Trim());

            for (int i = 0; i < frutas.Length; i++)
            {
                if (qtdCaixas < frutas. )
                {
                    Console.WriteLine($"Caixa ")
                }
            }

        }
    
    }
}


//      nunciado: Exercício 4 – O Estoque de Frutas
//      Objetivo: Organizar frutas em caixas e identificar quais frutas não couberam no carregamento.

//      Entrada de Dados:

//      Peça ao usuário uma lista de frutas separadas por vírgula e armazene em um array.

//      Peça ao usuário a quantidade de caixas disponíveis (um número inteiro).

//      Processamento (A Distribuição):

//      Cada caixa só pode levar uma fruta.

//      Use um laço for para listar: "Caixa 1: [Nome da Fruta]", "Caixa 2: [Nome da Fruta]", etc.

//      O laço deve parar assim que as caixas acabarem OU as frutas acabarem.

//      O Diferencial (O que sobrou):

//      Se o número de frutas for maior que o número de caixas, o programa deve exibir uma mensagem final listando quais frutas ficaram de fora.

//      Exemplo: "As frutas [Laranja, Manga] ficaram fora das caixas por falta de espaço."

//      Dicas para o Código:
//      Para as caixas: O laço deve ir até o menor valor entre o tamanho do array e a quantidade de caixas.

//      Para o que sobrou: Você pode iniciar um segundo laço for que começa exatamente onde o primeiro parou (ou seja, no índice igual à quantidade de caixas) e vai até o final do array de frutas.

//      Estrutura Inicial:
//      C#
//      static void exercicio04()
//      {
//          Console.WriteLine("Digite as frutas (separadas por vírgula):");
//          string[] frutas = Console.ReadLine().Split(',');

//          Console.WriteLine("Quantas caixas estão disponíveis?");
//          int qtdCaixas = int.Parse(Console.ReadLine());

//          // 1. Distribua as frutas nas caixas disponíveis usando um for

//          // 2. Verifique se sobrou algo e use outro for para listar as sobras
//      }
//      Tente montar essa lógica. O segredo aqui é controlar bem os índices para não tentar acessar uma fruta que não existe ou esquecer de listar as que sobraram!
