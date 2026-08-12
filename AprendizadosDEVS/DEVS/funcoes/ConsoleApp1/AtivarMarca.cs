using System.Globalization;

namespace ConsoleApp1
{
    using Tanjiro =
    (
    bool marcaAtiva,
    int danoBase,
    int resistencia,
    int duracaoMarca
    );
        Tanjiro = (false, 20, 50, 0);



    internal class AtivarMarca
    {

        public static void AtivandoMarca()
        {

            Tanjiro tanjiro;
            tanjiro = (false, 20, 50, 0);

            //tanjiro.marcaAtiva = false;       (((((( OU atribuição direta ou a              
            //tanjiro.danoBase = 20;            inicialização na declaração da variável,
            //tanjiro.resistencia = 50;         ambos são válidos para definir os valores
            //tanjiro.duracaoMarca = 0;          iniciais dos campos da tupla. ))))))



            tanjiro.marcaAtiva = true;
            tanjiro.danoBase += 15;
            tanjiro.resistencia -= 5;
            tanjiro.duracaoMarca = 30;

            Console.WriteLine($"Marca Ativa: {tanjiro}");
        }
    }

}

