class pais {
    get lang () {
        let language = 'Otros'
        if (this.code == 'es') {
            language = 'español'
        }
        return language;
    }

    set setjefe(name) {
        this.jefe = name.toLowerCase()
    }
    constructor(code){
        this.code = code
    }
}

let p1 = new Pais ('es')
console.log(p1.lang)
p1.setjefe = 'pepe'
console.log(p1)