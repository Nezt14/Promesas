//Ejercicio #3 de la guia

function ValidarCorreo(Direccion){
    return new Promise((resolve, reject)=>{
        console.log(`verificando correo de ${Direccion}...`)
        setTimeout(()=>{
            if(Direccion){
                resolve(`Correo enviado a ${Direccion} `)
            }
            else{
                reject(`Direccion de correo no proporcionada`)
            }
        },2000)
    })
}
ValidarCorreo("nest@gmail.com")
.then(res=>{
    console.log(`Mensaje: ` + res)
})
.catch(error=>{
    console.log(error)
})