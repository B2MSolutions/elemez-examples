using System;
using System.Windows.Forms;

namespace diagnostics
{
    using System.Diagnostics;
    using System.IO;

    public partial class DiagnosticsLogsForm : Form
    {
        public DiagnosticsLogsForm(string pathToLogFolder)
        {
            this.PathToLogFolder = pathToLogFolder;
            InitializeComponent();

            this.pathLabel.Text = pathToLogFolder;
        }

        protected string PathToLogFolder { get; set; }

        private string ElemezExecutablePath
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

        private void createLogs_Click(object sender, EventArgs e)
        {
            if (!Directory.Exists(this.PathToLogFolder))
            {
                return;
            }

            using (var file = new StreamWriter(Path.Combine(this.PathToLogFolder, "log1.txt")))
            {
                file.WriteLine("Test logs. File 1");
            }

            using (var file = new StreamWriter(Path.Combine(this.PathToLogFolder, "log2.txt")))
            {
                file.WriteLine("Test logs. File 2");
            }

            Process.Start(ElemezExecutablePath, string.Format("FileUpload \"{0}\"", this.PathToLogFolder));
            Application.Exit();
        }
    }
}