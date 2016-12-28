using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;

namespace ExternalEvent
{
    public partial class ExternalEventComposer : Form
    {
        public ExternalEventComposer()
        {
            InitializeComponent();
        }

        private void buttonSend_Click(object sender, EventArgs e)
        {
            var arguments = $"Event /p:sender={textBoxSender.Text} /p:source={textBoxSource.Text} /p:type={textBoxType.Text} /p:timestamp={Epoch} /p:data=\"{textBoxData.Text}\"";
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
                return Path.Combine(programFiles??@"\program files (x86)", @"Biz2Mobile\elemez\ElemezServiceHost.exe");
            }
        }
    }
}
