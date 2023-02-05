// See https://aka.ms/new-console-template for more information

using ServiceReference1;

internal class Program
{
    private static void Main(string[] args)
    {
        WebService1SoapClient obj;
        obj = new WebService1SoapClient(default);

        Console.WriteLine("Hello, World!\n");

        string ans = obj.Add();

        Console.WriteLine("\nExecutando a Função Add:" + ans);

        ans = obj.Subtract();

        Console.WriteLine("\nExecutando a Função Subtract:" + ans);

        ans = obj.Multiply();

        Console.WriteLine("\nExecutando a Função Multiply:" + ans);

        ans = obj.Divide();

        Console.WriteLine("\nExecutando a Função Divide:" + ans);
    }
}