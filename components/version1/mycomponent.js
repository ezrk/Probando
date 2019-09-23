class MiComponente extends HTMLElement {
    constructor() {
        super()
        let temp = 
        document.querySelector('[rel="import"]').import
        .querySelector('template')
        const shadow = this.attachShadow({mode: 'open'})

        shadow.innerHTML = temp.innerHTML
    }
}

customElements.define('mi-componente', MiComponente)