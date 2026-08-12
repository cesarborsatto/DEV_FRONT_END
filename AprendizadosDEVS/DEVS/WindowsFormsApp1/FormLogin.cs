using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class FormLogin : Form
    {
        public FormLogin()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (txtUsuario.Text == "")
            {
                MessageBox.Show("Digite um nome");
                return;
            }

            if (txtSenha.Text != "1234")
            {

                MessageBox.Show("Senha incorreta");
                return;

            }
            formPrincipal frmPrincipal = new formPrincipal();
            frmPrincipal.ShowDialog();
        }

        private void label2_Click(object sender, EventArgs e)
        {

        }
    }
}
