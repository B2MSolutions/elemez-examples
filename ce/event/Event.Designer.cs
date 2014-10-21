namespace elemezEvent
{
    partial class Event
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
            this.btn_send = new System.Windows.Forms.Button();
            this.tb_type = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.tb_data = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // lb_sender
            // 
            this.lb_sender.Location = new System.Drawing.Point(6, 7);
            this.lb_sender.Name = "lb_sender";
            this.lb_sender.Size = new System.Drawing.Size(100, 20);
            this.lb_sender.Text = "Sender";
            // 
            // label2
            // 
            this.label2.Location = new System.Drawing.Point(6, 35);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(100, 16);
            this.label2.Text = "Source";
            // 
            // tb_sender
            // 
            this.tb_sender.Location = new System.Drawing.Point(64, 7);
            this.tb_sender.Name = "tb_sender";
            this.tb_sender.Size = new System.Drawing.Size(222, 23);
            this.tb_sender.TabIndex = 2;
            this.tb_sender.Text = "Sender";
            // 
            // tb_source
            // 
            this.tb_source.Location = new System.Drawing.Point(64, 35);
            this.tb_source.Name = "tb_source";
            this.tb_source.Size = new System.Drawing.Size(222, 23);
            this.tb_source.TabIndex = 3;
            this.tb_source.Text = "Source";
            // 
            // btn_send
            // 
            this.btn_send.Location = new System.Drawing.Point(214, 198);
            this.btn_send.Name = "btn_send";
            this.btn_send.Size = new System.Drawing.Size(72, 20);
            this.btn_send.TabIndex = 5;
            this.btn_send.Text = "Send";
            this.btn_send.Click += new System.EventHandler(this.btn_send_Click);
            // 
            // tb_type
            // 
            this.tb_type.Location = new System.Drawing.Point(64, 65);
            this.tb_type.Name = "tb_type";
            this.tb_type.Size = new System.Drawing.Size(222, 23);
            this.tb_type.TabIndex = 9;
            this.tb_type.Text = "Type";
            // 
            // label1
            // 
            this.label1.Location = new System.Drawing.Point(6, 65);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(100, 16);
            this.label1.Text = "Type";
            // 
            // tb_data
            // 
            this.tb_data.Location = new System.Drawing.Point(64, 96);
            this.tb_data.Multiline = true;
            this.tb_data.Name = "tb_data";
            this.tb_data.Size = new System.Drawing.Size(222, 73);
            this.tb_data.TabIndex = 12;
            this.tb_data.Text = "key:test data|key2:test data 2";
            // 
            // label3
            // 
            this.label3.Location = new System.Drawing.Point(6, 96);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(100, 16);
            this.label3.Text = "Data";
            // 
            // Event
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(96F, 96F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Dpi;
            this.AutoScroll = true;
            this.ClientSize = new System.Drawing.Size(295, 231);
            this.Controls.Add(this.tb_data);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.tb_type);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.btn_send);
            this.Controls.Add(this.tb_source);
            this.Controls.Add(this.tb_sender);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.lb_sender);
            this.Name = "Event";
            this.Text = "Elemez Thirdparty Event";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Label lb_sender;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox tb_sender;
        private System.Windows.Forms.TextBox tb_source;
        private System.Windows.Forms.Button btn_send;
        private System.Windows.Forms.TextBox tb_type;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox tb_data;
        private System.Windows.Forms.Label label3;
    }
}

