using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;

namespace Disruption
{
    public partial class DisruptionComposer : Form
    {
        public DisruptionComposer()
        {
            InitializeComponent();
        }

        private void buttonSend_Click(object sender, EventArgs e)
        {
            var arguments = $"Disruption /p:sender={textBoxSender.Text} /p:source={textBoxSource.Text} /p:userInitiated={checkBoxUserInitiated.Checked} /p:timestamp={Epoch}";
            Process.Start(ElemezExecutablePath, arguments);
        }

        private static long Epoch
        {
            get
            {
                var span = DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
                return (long)span.TotalMilliseconds;
            }
        }

        private static string ElemezExecutablePath
        {
            get
            {
                var programFiles = Environment.GetEnvironmentVariable(Environment.SpecialFolder.ProgramFilesX86.ToString());
                return Path.Combine(programFiles ?? @"\program files (x86)", @"Biz2Mobile\elemez\ElemezServiceHost.exe");
            }
        }
    }
}
