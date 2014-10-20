namespace disruption
{
    partial class Disruption
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
            this.lb_sender = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.tb_sender = new System.Windows.Forms.TextBox();
            this.tb_source = new System.Windows.Forms.TextBox();
            this.cb_system = new System.Windows.Forms.CheckBox();
            this.btn_send = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // lb_sender
            // 
            this.lb_sender.Location = new System.Drawing.Point(27, 34);
            this.lb_sender.Name = "lb_sender";
            this.lb_sender.Size = new System.Drawing.Size(100, 20);
            this.lb_sender.Text = "Sender";
            // 
            // label2
            // 
            this.label2.Location = new System.Drawing.Point(27, 106);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(100, 20);
            this.label2.Text = "Source";
            // 
            // tb_sender
            // 
            this.tb_sender.Location = new System.Drawing.Point(124, 34);
            this.tb_sender.Name = "tb_sender";
            this.tb_sender.Size = new System.Drawing.Size(129, 23);
            this.tb_sender.TabIndex = 2;
            this.tb_sender.Text = "OEM";
            // 
            // tb_source
            // 
            this.tb_source.Location = new System.Drawing.Point(124, 106);
            this.tb_source.Name = "tb_source";
            this.tb_source.Size = new System.Drawing.Size(129, 23);
            this.tb_source.TabIndex = 3;
            this.tb_source.Text = "Thirdparty";
            // 
            // cb_system
            // 
            this.cb_system.Location = new System.Drawing.Point(27, 171);
            this.cb_system.Name = "cb_system";
            this.cb_system.Size = new System.Drawing.Size(100, 20);
            this.cb_system.TabIndex = 4;
            this.cb_system.Text = "System";
            // 
            // btn_send
            // 
            this.btn_send.Location = new System.Drawing.Point(180, 202);
            this.btn_send.Name = "btn_send";
            this.btn_send.Size = new System.Drawing.Size(72, 20);
            this.btn_send.TabIndex = 5;
            this.btn_send.Text = "Send";
            this.btn_send.Click += new System.EventHandler(this.btn_send_Click);
            // 
            // Disruption
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(96F, 96F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Dpi;
            this.AutoScroll = true;
            this.ClientSize = new System.Drawing.Size(295, 250);
            this.Controls.Add(this.btn_send);
            this.Controls.Add(this.cb_system);
            this.Controls.Add(this.tb_source);
            this.Controls.Add(this.tb_sender);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.lb_sender);
            this.Name = "Disruption";
            this.Text = "Elemez Thirdparty Disruption";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Label lb_sender;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox tb_sender;
        private System.Windows.Forms.TextBox tb_source;
        private System.Windows.Forms.CheckBox cb_system;
        private System.Windows.Forms.Button btn_send;
    }
}

