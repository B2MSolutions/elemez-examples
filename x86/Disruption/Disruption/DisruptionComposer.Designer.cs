namespace Disruption
{
    partial class DisruptionComposer
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(DisruptionComposer));
            this.textBoxSender = new System.Windows.Forms.TextBox();
            this.textBoxSource = new System.Windows.Forms.TextBox();
            this.buttonSend = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.checkBoxUserInitiated = new System.Windows.Forms.CheckBox();
            this.SuspendLayout();
            // 
            // textBoxSender
            // 
            this.textBoxSender.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.textBoxSender.Location = new System.Drawing.Point(82, 14);
            this.textBoxSender.Name = "textBoxSender";
            this.textBoxSender.Size = new System.Drawing.Size(360, 20);
            this.textBoxSender.TabIndex = 0;
            this.textBoxSender.Text = "B2M";
            // 
            // textBoxSource
            // 
            this.textBoxSource.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.textBoxSource.Location = new System.Drawing.Point(82, 38);
            this.textBoxSource.Name = "textBoxSource";
            this.textBoxSource.Size = new System.Drawing.Size(332, 20);
            this.textBoxSource.TabIndex = 1;
            this.textBoxSource.Text = "eeec";
            // 
            // buttonSend
            // 
            this.buttonSend.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.buttonSend.Location = new System.Drawing.Point(82, 87);
            this.buttonSend.Name = "buttonSend";
            this.buttonSend.Size = new System.Drawing.Size(332, 23);
            this.buttonSend.TabIndex = 4;
            this.buttonSend.Text = "Send";
            this.buttonSend.UseVisualStyleBackColor = true;
            this.buttonSend.Click += new System.EventHandler(this.buttonSend_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(39, 17);
            this.label1.Name = "label1";
            this.label1.RightToLeft = System.Windows.Forms.RightToLeft.No;
            this.label1.Size = new System.Drawing.Size(41, 13);
            this.label1.TabIndex = 5;
            this.label1.Text = "Sender";
            this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(39, 41);
            this.label2.Name = "label2";
            this.label2.RightToLeft = System.Windows.Forms.RightToLeft.No;
            this.label2.Size = new System.Drawing.Size(41, 13);
            this.label2.TabIndex = 6;
            this.label2.Text = "Source";
            this.label2.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // checkBoxUserInitiated
            // 
            this.checkBoxUserInitiated.AutoSize = true;
            this.checkBoxUserInitiated.CheckAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.checkBoxUserInitiated.Checked = true;
            this.checkBoxUserInitiated.CheckState = System.Windows.Forms.CheckState.Checked;
            this.checkBoxUserInitiated.Location = new System.Drawing.Point(10, 64);
            this.checkBoxUserInitiated.Name = "checkBoxUserInitiated";
            this.checkBoxUserInitiated.Size = new System.Drawing.Size(87, 17);
            this.checkBoxUserInitiated.TabIndex = 9;
            this.checkBoxUserInitiated.Text = "User initiated";
            this.checkBoxUserInitiated.UseVisualStyleBackColor = true;
            // 
            // DisruptionComposer
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(426, 121);
            this.Controls.Add(this.checkBoxUserInitiated);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.buttonSend);
            this.Controls.Add(this.textBoxSource);
            this.Controls.Add(this.textBoxSender);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MinimumSize = new System.Drawing.Size(442, 160);
            this.Name = "DisruptionComposer";
            this.Text = "Elemez Disruption Composer";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox textBoxSender;
        private System.Windows.Forms.TextBox textBoxSource;
        private System.Windows.Forms.Button buttonSend;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.CheckBox checkBoxUserInitiated;
    }
}

