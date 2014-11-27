namespace BatteryCycleCount
{
    using System;
    using System.Windows.Forms;
    using Microsoft.Win32;

    public partial class Main : Form
    {
        public Main()
        {
            InitializeComponent();
        }
        
        private void Save_Click(object sender, EventArgs e)
        {
            int cycleCount = int.Parse(cycleCountTextBox.Text);

            using (RegistryKey subKey = Registry.LocalMachine.CreateSubKey(@"Software\ElemezIntegration\"))
            {
                subKey.SetValue("battery_charge_cycle_count", cycleCount, RegistryValueKind.DWord);
            }

            MessageBox.Show("Saved");
        }
    }
}
