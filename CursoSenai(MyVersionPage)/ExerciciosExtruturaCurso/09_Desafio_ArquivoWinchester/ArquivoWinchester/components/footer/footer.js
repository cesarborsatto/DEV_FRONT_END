class AppFooter extends HTMLElement {
    async connectedCallback() {
        const response = await fetch('/CursoSenai(MyVersionPage)/ExerciciosExtruturaCurso/09_Desafio_ArquivoWinchester/ArquivoWinchester/components/footer/footer.html');
        const html = await response.text();
        this.innerHTML = html;
        console.log(html)
    }
}

customElements.define('app-footer', AppFooter);