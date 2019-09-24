import {Property} from '@dvelasquez/ce-property';

class ByeWorld extends HTMLElement {
    @Property()
    private superAttribute: string;
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<h1>bye world</h1>`;
    }
}

window.customElements.define('bye-world', ByeWorld);
