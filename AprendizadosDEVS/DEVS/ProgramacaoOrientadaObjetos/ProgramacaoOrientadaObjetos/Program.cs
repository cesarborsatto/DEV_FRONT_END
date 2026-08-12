using System.Text.Json.Schema;
namespace ProgramacaoOrientadaObjetos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //---------SOBREVIVENTE---------//

            var joel = new Sobrevivente("Joel", 80, 55, 3);
            var ellie = new Sobrevivente("Ellie", 85, 60, 3);
            var tommy = new Sobrevivente("Tommy", 90, 58, 3);

            //-- Açoes sobre Joel -- //
            joel.ExibirStatusSobrevivente();
            joel.ReceberDanoSobrevivente(10);
            joel.UsarKitMedicoSobrevivente();
            joel.DescansarSobrevivente();
            joel.PatrulharSobrevivente();

            //-- Açoes sobre Ellie -- //
            ellie.ExibirStatusSobrevivente();
            ellie.ReceberDanoSobrevivente(10);
            ellie.UsarKitMedicoSobrevivente();
            ellie.DescansarSobrevivente();
            ellie.PatrulharSobrevivente();


            //-- Açoes sobre Tommy -- //
            tommy.ExibirStatusSobrevivente();
            tommy.ReceberDanoSobrevivente(10);
            tommy.UsarKitMedicoSobrevivente();
            tommy.DescansarSobrevivente();
            tommy.PatrulharSobrevivente();



            //---------EXPLORADOR---------//

            var joeel = new Explorador("Joel", 90, 80, 20, 3);
            var elliee = new Explorador("Ellie", 92, 87, 22, 3);
            var dina = new Explorador("Dina", 89, 88, 18, 3);

            //-- Açoes sobre Joel -- //
            joeel.ExibirStatusExplorador();
            joeel.VasculharArea();
            joeel.UsarKitMedicoExplorador();
            joeel.ReceberDanoExplorador(40);
            joeel.DescansarExplorador();

            //-- Açoes sobre Ellie -- //
            elliee.ExibirStatusExplorador();
            elliee.VasculharArea();
            elliee.UsarKitMedicoExplorador();
            elliee.ReceberDanoExplorador(40);
            elliee.DescansarExplorador();

            //-- Açoes sobre Dina -- //
            dina.ExibirStatusExplorador();
            dina.VasculharArea();
            dina.UsarKitMedicoExplorador();
            dina.ReceberDanoExplorador(40);
            dina.DescansarExplorador();
        }
    }
}