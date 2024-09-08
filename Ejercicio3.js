//Ejercicio #5 de la guia 

function verificarCodigo(codigo){
    return new Promise((resolve, reject)=>{
        if(codigo === `DESCUENTO2024`){
            resolve("Codigo de descuento valido")
        }
        else{
            reject("Codigo de descuento invalido")
        }
    })
}

verificarCodigo("DESCUENTO2024")
.then(res=>{
    console.log(`Mensaje: ` + res)
})
.catch(error => {
    console.log(`Error` + error)
})