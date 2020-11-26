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

}

let app = new App();

// Prueba metodo convertir
console.log("1500 pesos equivalen a: "+app.convertir(1500));
console.log("2000 pesos equivalen a: "+app.convertir(2000));
console.log("3500 pesos equivalen a: "+app.convertir(3500));
