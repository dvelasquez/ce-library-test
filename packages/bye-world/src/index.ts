class ByeWorld extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<h1>bye world</h1>`;
    }

    get superTitle(): string {
        return this.getAttribute('super-title');
    }

    set superTitle(newTitle: string) {
        this.setAttribute('super-title', newTitle);
    }
}

window.customElements.define('bye-world', ByeWorld);
