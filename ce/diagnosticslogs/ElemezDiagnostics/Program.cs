namespace ElemezDiagnostics
{
    using System;
    using System.Diagnostics;
    using System.IO;

    class Program
    {
        static void Main(string[] args)
        {
            Debugger.Break();

            var pathToLogsFolder = args[0];

            if (!Directory.Exists(pathToLogsFolder))
            {
                Console.WriteLine("Wrong path to the log folder");
            }

            using (var file = new StreamWriter(Path.Combine(pathToLogsFolder, "log1.txt")))
            {
                file.WriteLine("Test logs. File 1");
            }

            using (var file = new StreamWriter(Path.Combine(pathToLogsFolder, "log2.txt")))
            {
                file.WriteLine("Test logs. File 2");
            }

            Process.Start(ElemezExecutablePath, string.Format("FileUpload {0}", pathToLogsFolder));
        }

        private static string ElemezExecutablePath
        {
            get
            {
                using (var key = Microsoft.Win32.Registry.LocalMachine.OpenSubKey(@"Software\Elemez", false))
                {
                    var path = key.GetValue("Path", @"\Program files\elemez");
                    return Path.Combine(path.ToString(), "ElemezServiceHost.exe");
                }
            }
        }
    }
}
