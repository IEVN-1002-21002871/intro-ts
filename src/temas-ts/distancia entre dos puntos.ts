class Punto {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

   
    calcularDistancia(otroPunto: Punto): number {
        const dx = this.x - otroPunto.x;
        const dy = this.y - otroPunto.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    imprimir() {
        console.log(`Punto en coordenadas (${this.x}, ${this.y})`);
    }
}

let punto1 = new Punto(3, 4);
let punto2 = new Punto(7, 1);


punto1.imprimir();
punto2.imprimir();


const distancia = punto1.calcularDistancia(punto2);
console.log(`La distancia entre los dos puntos es ${distancia}`);
