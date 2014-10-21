namespace elemezEvent
{
    using System;
    using System.Diagnostics;
    using System.IO;
    using System.Windows.Forms;


    public partial class Event : Form
    {
        public Event()
        {
            InitializeComponent();
        }

        private void btn_send_Click(object sender, EventArgs e)
        {
            var senderValue = tb_sender.Text;
            var sourceValue = tb_source.Text;
            var typeValue = tb_type.Text;
            var data = tb_data.Text;
            var time = DateTime.UtcNow.Ticks;

            var arguments = string.Format("Event /p:sender={0} /p:source={1} /p:type={2} /p:timestamp={3} /p:data=\"{4}\"", senderValue, sourceValue, typeValue, time, data);
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