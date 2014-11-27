namespace BatteryCycleCount
{
    using System;
    using System.Windows.Forms;

    static class Program
    {
        [MTAThread]
        static void Main()
        {
            Application.Run(new Main());
        }
    }
}