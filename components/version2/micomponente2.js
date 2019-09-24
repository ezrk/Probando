export
const template = `
<style>
        :host {
            display: block;
            width: 80%;
            margin: 0.5rem auto;
            padding: 0.3rem 0.8rem;
            background-color: blueviolet;
            color: white;
        }
        h1 {
            color: white;
            background-color: rgb(150, 150, 150);
            padding: 0.3rem;
        }
    </style>
    <div>
        <h2>Ejemplo de componente</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur sed recusandae excepturi adipisci officia aliquam! Qui pariatur mollitia eos? Ut, hic eos! Soluta quidem doloribus ipsa perferendis minus corporis?</p>
    </div>
`

export class MiComponente extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.innerHTML = template
    }
}

customElements.define('mi-componente', MiComponente)