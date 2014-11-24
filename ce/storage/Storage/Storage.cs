namespace Storage
{
    using System;
    using System.Windows.Forms;

    using Microsoft.Win32;

    public partial class Storage : Form
    {
        public Storage()
        {
            InitializeComponent();
        }

        private void changeFlashButton_Click(object sender, EventArgs e)
        {
            try
            {
                var flashWearCycles = int.Parse(flashWearCyclesTextBox.Text);
                using (var subKey = Registry.LocalMachine.CreateSubKey(@"Software\elemezIntegration\"))
                {
                    subKey.SetValue("EFWN", flashWearCycles, RegistryValueKind.DWord);
                }

                MessageBox.Show("Saved");
            }
            catch (Exception)
            {
                MessageBox.Show("Flash wear cycles count should be an integer value");
            }
        }
    }
}