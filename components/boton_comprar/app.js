export class App {
    constructor() {
        this.isConnected = false
        this.btnConnect = document.querySelector('button')
        document.querySelectorAll

        this.btnConnect.addEventListener('click', 
        this.onClickConnect.bind(this))
    }
    onClickConnect() {
        this.isConnected = !this.isConnected
        if (this.isConnected) {
            this.btnConnect.innerHTML = 'Desconectar'
        } else {
            this.btnConnect.innerHTML = 'Conectar'
        }
        console.log(this.isConnected) 
    }
}