namespace Group
{
    using System;
    using System.Windows.Forms;

    using Microsoft.Win32;

    public partial class Group : Form
    {
        public Group()
        {
            InitializeComponent();
        }

        private void changeGroupButton_Click(object sender, EventArgs e)
        {
            string group = groupTextBox.Text;
            using (RegistryKey subKey = Registry.LocalMachine.CreateSubKey(@"Software\elemezIntegration\"))
            {
                subKey.SetValue("Group", group, RegistryValueKind.String);
            }

            MessageBox.Show("Saved");
        }
    }
}