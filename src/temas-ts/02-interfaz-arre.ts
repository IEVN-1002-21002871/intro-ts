//UNA INTERFAZ ES UNA CLASE QUE PERMITE DEFINIR VARIABLES
interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    curso:string;
    //DATOS OPCIONALES CON ?
    direccion?:string;
}


const alumno:Alumno = {
    nombre :"Jua",
    apellido:"Lopez",
    edad:22,
    curso:"Inglés",
    
}

console.table(alumno)



let mascotas = ['perro','gato', 'perico'];

console.log(mascotas[0])
mascotas[1] = 'nuevo gato';

//AGREGAR OTRO DATO AL ARREGLO
mascotas.push('hamster');

//DEFINIR ARREGLOS CON DIFERENTES TIPADOS DE DATOS
let tem:(number|string)[]= [];
tem.push(1);
tem.push('dos');
console.log(tem)
