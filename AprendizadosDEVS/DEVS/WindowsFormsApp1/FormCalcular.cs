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
    public partial class formPrincipal : Form
    {

        //Variaveis

        float nota1 = 0;
        float nota3 = 0;
        float nota4 = 0;
        float nota2 = 0;
        float media1 = 0;

        public formPrincipal()
        {
            InitializeComponent();
        }

        private void FormPrincipal_Load(object sender, EventArgs e)
        {
            dataAtual.Text = DateTime.Today.ToString();
        }

        public void resultado()
        {
            nota1 = float.Parse(txtNota1.Text);
            nota2 = float.Parse(txtNota2.Text);
            nota3 = float.Parse(txtNota3.Text);
            nota4 = float.Parse(txtNota4.Text);

            media1 = (nota1 + nota2 + nota3 + nota4) / 4;

            labelMedia.Text = media1.ToString();
        }

        private void buttonCalcular_Click(object sender, EventArgs e)
        {
            
            
            resultado();
        }



    }
}
