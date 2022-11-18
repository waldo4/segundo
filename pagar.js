const precio=200
let pagando=0
let cantidad=0


const pague=(n)=>{
    let pagar=document.getElementById("descuento")
    pagando=n
    pagar.innerHTML=n
    
}

const calcular=()=>{
    let cuantas=document.getElementById("cantidad").value;
    cantidad=cuantas;
    let categoria=document.getElementById("Categoria").value;
    let total=(precio * cuantas)

    if(categoria == "0"){
        pague(precio * cuantas)
    }
    if(categoria == "80"){
        pague(total-((precio * 0.8) * cuantas))
    }
    if(categoria == "50"){
        pague((precio/2) * cuantas)
    }
    if(categoria == "15"){
        pague(total-((precio * 0.15) * cuantas))
    }
    
}

const finalizar=()=>{
    if(confirm(`Va a realizar la compra de ${cantidad} tickets, por un total de $${pagando} `)){
        alert("Muchas gracias, en instantes será redirigido")
    }else{
        console.log("nada")
    }
}

const rest=()=>{
    document.getElementById('sebaForm').reset();
    pague(0)
}
