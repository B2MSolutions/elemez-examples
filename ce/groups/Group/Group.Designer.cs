namespace Group
{
    partial class Group
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;
        private System.Windows.Forms.MainMenu mainMenu1;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.mainMenu1 = new System.Windows.Forms.MainMenu();
            this.changeGroupButton = new System.Windows.Forms.Button();
            this.groupLabel = new System.Windows.Forms.Label();
            this.groupTextBox = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // changeGroupButton
            // 
            this.changeGroupButton.Location = new System.Drawing.Point(4, 55);
            this.changeGroupButton.Name = "changeGroupButton";
            this.changeGroupButton.Size = new System.Drawing.Size(72, 20);
            this.changeGroupButton.TabIndex = 0;
            this.changeGroupButton.Text = "Save";
            this.changeGroupButton.Click += new System.EventHandler(this.changeGroupButton_Click);
            // 
            // groupLabel
            // 
            this.groupLabel.Location = new System.Drawing.Point(4, 4);
            this.groupLabel.Name = "groupLabel";
            this.groupLabel.Size = new System.Drawing.Size(233, 20);
            this.groupLabel.Text = "Group:";
            // 
            // groupTextBox
            // 
            this.groupTextBox.Location = new System.Drawing.Point(4, 28);
            this.groupTextBox.Name = "groupTextBox";
            this.groupTextBox.Size = new System.Drawing.Size(233, 21);
            this.groupTextBox.TabIndex = 2;
            // 
            // Storage
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(96F, 96F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Dpi;
            this.AutoScroll = true;
            this.ClientSize = new System.Drawing.Size(240, 294);
            this.Controls.Add(this.groupTextBox);
            this.Controls.Add(this.groupLabel);
            this.Controls.Add(this.changeGroupButton);
            this.Name = "Group";
            this.Text = "Group";
            this.ResumeLayout(false);
        }

        #endregion

        private System.Windows.Forms.Button changeGroupButton;
        private System.Windows.Forms.Label groupLabel;
        private System.Windows.Forms.TextBox groupTextBox;
    }
}

