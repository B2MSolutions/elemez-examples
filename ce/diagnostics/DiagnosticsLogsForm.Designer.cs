namespace diagnostics
{
    partial class DiagnosticsLogsForm
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
            this.produceLogsButton = new System.Windows.Forms.Button();
            this.pathLabel = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // produceLogsButton
            // 
            this.produceLogsButton.Location = new System.Drawing.Point(150, 107);
            this.produceLogsButton.Name = "produceLogsButton";
            this.produceLogsButton.Size = new System.Drawing.Size(85, 20);
            this.produceLogsButton.TabIndex = 0;
            this.produceLogsButton.Text = "Create logs";
            this.produceLogsButton.Click += new System.EventHandler(this.createLogs_Click);
            // 
            // pathLabel
            // 
            this.pathLabel.Location = new System.Drawing.Point(15, 39);
            this.pathLabel.Name = "pathLabel";
            this.pathLabel.Size = new System.Drawing.Size(217, 58);
            // 
            // label1
            // 
            this.label1.Location = new System.Drawing.Point(15, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(217, 20);
            this.label1.Text = "Path to diagnostics info";
            // 
            // DiagnosticsLogsForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(96F, 96F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Dpi;
            this.AutoScroll = true;
            this.ClientSize = new System.Drawing.Size(247, 137);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.pathLabel);
            this.Controls.Add(this.produceLogsButton);
            this.Name = "DiagnosticsLogsForm";
            this.Text = "DiagnosticsLogsForm";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button produceLogsButton;
        private System.Windows.Forms.Label pathLabel;
        private System.Windows.Forms.Label label1;
    }
}

