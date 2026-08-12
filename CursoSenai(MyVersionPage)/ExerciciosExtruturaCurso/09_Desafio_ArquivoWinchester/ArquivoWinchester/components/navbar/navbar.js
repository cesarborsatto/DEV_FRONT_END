class AppNavbar extends HTMLElement {
    async connectedCallback() {
        const response = await fetch('/components/navbar/navbar.html');
        const html = await response.text();
        this.innerHTML = html;

        const menuHamburg = this.querySelector('.toggle');
        const navbar = this.querySelector('.navbar--only');
        const navbar2 = this.querySelector('.navbar--only2');
        const bgBlue = this.querySelector('.bg-blue')

        menuHamburg.addEventListener('click', () => {
            navbar.classList.toggle('navbar--only');
            navbar2.classList.toggle('navbar--only2');
            bgBlue.classList.toggle('bg-blue')
        });

        const ariaCurrent = this.querySelectorAll('.nav-link');
        const currentPath = window.location.pathname;

        ariaCurrent.forEach((a) => {
            const linkPath = new URL(a.href).pathname;
            const prefix = a.dataset.activePrefix;

            let isActive;

            if (prefix) {
                isActive = currentPath.startsWith(prefix);
            } else {
                isActive = linkPath === currentPath;
            }

            if (isActive) {
                a.setAttribute('aria-current', 'page');
            } else {
                a.removeAttribute('aria-current');
            }
        });
    }
}

customElements.define('app-navbar', AppNavbar);