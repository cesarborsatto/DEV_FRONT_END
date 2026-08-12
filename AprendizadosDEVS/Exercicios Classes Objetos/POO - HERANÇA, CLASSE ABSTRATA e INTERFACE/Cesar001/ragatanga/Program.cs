using System.Linq.Expressions;

namespace ragatanga
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var ellie = new Patrulheiro("Ellei", 89, 90, "Pistol", 20);
            var joel = new Patrulheiro("Joel", 90, 91, "Pistol", 24);
            var estalador1 = new Estalador("Estalador1", 100, 30);
            var estalador2 = new Estalador("Estalador2", 98, 28);

            var hospital = new Hospital("Hospital Inundado");

            Console.WriteLine("Ellie e Joel entraram no hospital");

            hospital.ReceberEntidade(ellie);
            hospital.ReceberEntidade(joel);

            Console.WriteLine("Estaladores no Local");
            hospital.ReceberEntidade(estalador1);
            hospital.ReceberEntidade(estalador2);


            Console.WriteLine("Exibir presentes no local");
            hospital.ExibirPresentes();

            Console.WriteLine("Exibir status de todas as entidades");

            ellie.ExibirStatus();
            joel.ExibirStatus();
            estalador1.ExibirStatus();
            estalador2.ExibirStatus();
        }
    }
}
