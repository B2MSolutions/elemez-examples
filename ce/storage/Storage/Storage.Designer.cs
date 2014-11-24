namespace Storage
{
    partial class Storage
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
            this.changeFlashButton = new System.Windows.Forms.Button();
            this.flashWearLabel = new System.Windows.Forms.Label();
            this.flashWearCyclesTextBox = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // changeFlashButton
            // 
            this.changeFlashButton.Location = new System.Drawing.Point(4, 55);
            this.changeFlashButton.Name = "changeFlashButton";
            this.changeFlashButton.Size = new System.Drawing.Size(72, 20);
            this.changeFlashButton.TabIndex = 0;
            this.changeFlashButton.Text = "Save";
            this.changeFlashButton.Click += new System.EventHandler(this.changeFlashButton_Click);
            // 
            // flashWearLabel
            // 
            this.flashWearLabel.Location = new System.Drawing.Point(4, 4);
            this.flashWearLabel.Name = "flashWearLabel";
            this.flashWearLabel.Size = new System.Drawing.Size(233, 20);
            this.flashWearLabel.Text = "Flash wear cycles:";
            // 
            // flashWearCyclesTextBox
            // 
            this.flashWearCyclesTextBox.Location = new System.Drawing.Point(4, 28);
            this.flashWearCyclesTextBox.Name = "flashWearCyclesTextBox";
            this.flashWearCyclesTextBox.Size = new System.Drawing.Size(233, 21);
            this.flashWearCyclesTextBox.TabIndex = 2;
            // 
            // Storage
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(96F, 96F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Dpi;
            this.AutoScroll = true;
            this.ClientSize = new System.Drawing.Size(240, 294);
            this.Controls.Add(this.flashWearCyclesTextBox);
            this.Controls.Add(this.flashWearLabel);
            this.Controls.Add(this.changeFlashButton);
            this.Name = "Storage";
            this.Text = "Storage";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button changeFlashButton;
        private System.Windows.Forms.Label flashWearLabel;
        private System.Windows.Forms.TextBox flashWearCyclesTextBox;
    }
}

