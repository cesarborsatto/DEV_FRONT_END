class AppSidebar extends HTMLElement {
    async connectedCallback() {
        const response = await fetch('/components/sidebar/sidebar.html');
        const html = await response.text();
        this.innerHTML = html;

        const menuHamburg = this.querySelector('.toggle')
        const sidebar = this.querySelector('.sidebar')

        menuHamburg.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar--open')
        })
    }
}

customElements.define('app-sidebar', AppSidebar)