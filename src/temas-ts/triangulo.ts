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

class Triangulo {
    puntoA: Punto;
    puntoB: Punto;
    puntoC: Punto;

    constructor(puntoA: Punto, puntoB: Punto, puntoC: Punto) {
        this.puntoA = puntoA;
        this.puntoB = puntoB;
        this.puntoC = puntoC;
    }


    imprimir() {
        console.log("Triángulo formado por:");
        this.puntoA.imprimir();
        this.puntoB.imprimir();
        this.puntoC.imprimir();
    }
}

let punto1 = new Punto(3, 4);
let punto2 = new Punto(7, 1);
let punto3 = new Punto(5, 8);

let triangulo = new Triangulo(punto1, punto2, punto3);

triangulo.imprimir();