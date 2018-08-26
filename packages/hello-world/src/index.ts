class HelloWorld extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<h1>hello world</h1>`;
    }
}

window.customElements.define('bye-world', HelloWorld);
