export default class App {

    convertir(pesos){
        let conversion;
        if(pesos < 2000){
            conversion = pesos * 20.5;
            return(conversion);
        }
        else if (pesos >= 2000){
            conversion = pesos * 22.7;
            return(conversion);
        }
    }

    costoRenta(kilometros){
        let costo;
        if(kilometros < 50)
            costo = kilometros * 3;
        else if((kilometros >= 50) && (kilometros < 100))
            costo = kilometros * 5;
        else if((kilometros >= 100) && (kilometros < 200))
            costo = kilometros * 6;
        else
            costo = kilometros * 6.5;
        return(costo);
    }

    puedeCircular(dia, terminacion){
        if((dia == 1) && (terminacion == 0))
            return(true);
        else if((dia == 2) && (terminacion == 1))
            return(true);
        else if(((dia == 3) || (dia == 4)) && terminacion == 2)
            return(true);
        else if(terminacion > 2)
            return(true);
        else
            return(false);
    }

}

let app = new App();

// Prueba metodo convertir
console.log("1500 pesos equivalen a: "+app.convertir(1500));
console.log("2000 pesos equivalen a: "+app.convertir(2000));
console.log("3500 pesos equivalen a: "+app.convertir(3500));

// Prueba metodo costoRenta
console.log("El auto rentado recorrio 40km, el costo es: "+app.costoRenta(40));
console.log("El auto rentado recorrio 60km, el costo es: "+app.costoRenta(60));
console.log("El auto rentado recorrio 100km, el costo es: "+app.costoRenta(100));
console.log("El auto rentado recorrio 205km, el costo es: "+app.costoRenta(205));

// Prueba metodo puedeCircular
console.log("¿Matricula 0 en Lunes circula?: "+app.puedeCircular(1,0));
console.log("¿Matricula 1 en Martes circula?: "+app.puedeCircular(2,1));
console.log("¿Matricula 2 en Jueves circula?: "+app.puedeCircular(4,2));
console.log("¿Matricula 3 en Lunes circula?: "+app.puedeCircular(1,4));
console.log("¿Matricula 2 en Lunes circula?: "+app.puedeCircular(1,2));