namespace disruption
{
    using System;
    using System.Diagnostics;
    using System.IO;
    using System.Windows.Forms;


    public partial class Disruption : Form
    {
        public Disruption()
        {
            InitializeComponent();
        }

        private void btn_send_Click(object sender, EventArgs e)
        {
            var senderValue = tb_sender.Text;
            var sourceValue = tb_source.Text;
            var isUserInitiated = !cb_system.Checked;
            var time = DateTime.UtcNow.Ticks;

            var arguments = string.Format("Disruption /p:sender={0} /p:source={1} /p:userInitiated={2} /p:time={3}", senderValue, sourceValue, isUserInitiated, time);
            Process.Start(this.ElemezExecutablePath, arguments);
        }

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
    }
}