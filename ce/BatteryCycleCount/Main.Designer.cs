namespace BatteryCycleCount
{
    partial class Main
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

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
            this.label1 = new System.Windows.Forms.Label();
            this.cycleCountTextBox = new System.Windows.Forms.TextBox();
            this.saveButton = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.Location = new System.Drawing.Point(4, 4);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(233, 20);
            this.label1.Text = "Battery Cycle Count:";
            // 
            // cycleCountTextBox
            // 
            this.cycleCountTextBox.Location = new System.Drawing.Point(4, 28);
            this.cycleCountTextBox.Name = "cycleCountTextBox";
            this.cycleCountTextBox.Size = new System.Drawing.Size(233, 21);
            this.cycleCountTextBox.TabIndex = 1;
            // 
            // saveButton
            // 
            this.saveButton.Location = new System.Drawing.Point(4, 55);
            this.saveButton.Name = "saveButton";
            this.saveButton.Size = new System.Drawing.Size(72, 20);
            this.saveButton.TabIndex = 2;
            this.saveButton.Text = "Save";
            this.saveButton.Click += new System.EventHandler(this.Save_Click);
            // 
            // Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(96F, 96F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Dpi;
            this.AutoScroll = true;
            this.ClientSize = new System.Drawing.Size(240, 294);
            this.Controls.Add(this.saveButton);
            this.Controls.Add(this.cycleCountTextBox);
            this.Controls.Add(this.label1);
            this.Name = "Main";
            this.Text = "Battery Cycle Count";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox cycleCountTextBox;
        private System.Windows.Forms.Button saveButton;
    }
}

