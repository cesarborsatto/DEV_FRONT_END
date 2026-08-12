// See https://aka.ms/new-console-template for more information
using System;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Insira o consumo(mAh) do dispositivo: ");
            //double consumo = double.Parse(Console.ReadLine());

            //Console.WriteLine("Digite quanto tempo(em horas) o dispositivo ficou ligado: ");
            //double tempoLigado = double.Parse(Console.ReadLine());

            //double consumototal = consumo * tempoLigado;

            //Console.WriteLine($"O consumo total foi de: {consumototal}mA");

            //====================================================================================================


            // Console.WriteLine("Quantas das 7 esferas você ja tem: ");
            // double qtdEsferas = double.Parse(Console.ReadLine());

            // Console.WriteLine("Dgite quantos minutos para encontras cada esfera restante: ");
            // double minutosRestantes = double.Parse(Console.ReadLine());

            // Console.WriteLine("Quantos minutos para invocar o Shenlong: ");
            // double tempoShenlong = double.Parse(Console.ReadLine());

            // double tempototal = (7 - qtdEsferas) * minutosRestantes + tempoShenlong;

            // if (tempototal == 0) ;

            // {
            //     Console.WriteLine("Um dos valores digitado está incorreto.");

            // }

            // Console.WriteLine($"São necessarios {tempototal} minutos para invocar o Shenlong!");


            //=====================================================================================


            // Console.WriteLine("Quantas horas de treino dentro da sala do tempo? --> ");
            // int horasTreino = int.Parse(Console.ReadLine());

            // Console.WriteLine("Quantos minutos equivale a 1 hora de treino dentro da sala? --> ");
            // int equivalencia = int.Parse(Console.ReadLine());

            // int tempoMundoReal = horasTreino * equivalencia;

            // Console.WriteLine($"A equivalência de {horasTreino} horas dentro da sala do tempo no mundo real é de {tempoMundoReal} minutos");


            // ============================================================================================

            // Console.WriteLine("Precisamos calcular o peso aparente de um lutador treinando em gravidade multiplicada. A seguir insira o peso do lutador (kg) e o multiplicador de gravidade para saber o peso aparente (kg).");

            // Console.WriteLine("Qual o peso do Lutador em Kilos? --> ");
            // double pesoTerra = double.Parse(Console.ReadLine());

            // Console.WriteLine("Qual valor do multiplicador de gravidade? --> ");
            // double multGravidade = double.Parse(Console.ReadLine());

            // double pesoFinal = pesoTerra * multGravidade;

            // Console.WriteLine($"O pesso do lutador dentro da sala de gravidade é de {pesoFinal} Kilos!");


            // ======================================================================================================


            Console.WriteLine("Precisamos estimar o Ki combinado de dois lutadores após a Fusão Potara. A seguir insira o Ki do lutador 1, Ki do lutador 2 e o bônus percentual ápos fusão para saber o Ki final.");

            Console.WriteLine("Insira o Ki do lutador1 --> ");
            double kiLutador1 = double.Parse(Console.ReadLine());

            Console.WriteLine("Insira o Ki do lutador1 --> ");
            double kiLutador2 = double.Parse(Console.ReadLine());

            Console.WriteLine("Insira a porcentagem - % (somento numeros) bonus da Fusão Potara");
            double bonus = double.Parse(Console.ReadLine());

            double kifinal = (kiLutador1 + kiLutador2) * (bonus/100 + 1);

            Console.WriteLine($"Ki final do lutador ápos fusão potara é de {kifinal}!!!");



        }

    }
}
