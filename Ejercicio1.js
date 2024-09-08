//Ejercicio #2 de la guia 

function validarEdad(Edad){
    return new Promise((resolve, reject)=>{
        if(Edad >= `18`){
            resolve("Edad valida para acceder al contenido")
        }
        else{
            reject("Edad insuficiente para acceder al contenido ")
        }
    })
}

validarEdad("22")
.then(res=>{
    console.log(res)
})
.catch(error => {
    console.log(error)
})