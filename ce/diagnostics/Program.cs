using System;

using System.Collections.Generic;
using System.Windows.Forms;

namespace diagnostics
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [MTAThread]
        static void Main(string[] args)
        {
            var pathToLogFolder = args[0];
            Application.Run(new DiagnosticsLogsForm(pathToLogFolder));
        }
    }
}