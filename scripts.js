
function pratoprincipal (x){
    const pratos = document.querySelector(".principal .itens");
    
    if(x === 1){
        pratos.querySelector(".item:nth-child(1)").classList.add("checked");
        pratos.querySelector(".item:nth-child(2)").classList.remove("checked");
        pratos.querySelector(".item:nth-child(3)").classList.remove("checked");
        pratos.querySelector(".item:nth-child(4)").classList.remove("checked");
    }
    if(x === 2){
        pratos.querySelector(".item:nth-child(1)").classList.remove("checked");
        pratos.querySelector(".item:nth-child(2)").classList.add("checked");
        pratos.querySelector(".item:nth-child(3)").classList.remove("checked");
        pratos.querySelector(".item:nth-child(4)").classList.remove("checked");
    }
    if(x === 3){
        pratos.querySelector(".item:nth-child(1)").classList.remove("checked");
        pratos.querySelector(".item:nth-child(2)").classList.remove("checked");
        pratos.querySelector(".item:nth-child(3)").classList.add("checked");
        pratos.querySelector(".item:nth-child(4)").classList.remove("checked");
    }
    if(x === 4){
        pratos.querySelector(".item:nth-child(1)").classList.remove("checked");
        pratos.querySelector(".item:nth-child(2)").classList.remove("checked");
        pratos.querySelector(".item:nth-child(3)").classList.remove("checked");
        pratos.querySelector(".item:nth-child(4)").classList.add("checked");
    }
}
function bebidas (x){
    const bebida = document.querySelector(".bebida .itens");
    if(x === 1){
        bebida.querySelector(".item:nth-child(1)").classList.add("checked");
        bebida.querySelector(".item:nth-child(2)").classList.remove("checked");
        bebida.querySelector(".item:nth-child(3)").classList.remove("checked");
        bebida.querySelector(".item:nth-child(4)").classList.remove("checked");
    }
    if(x === 2){
        bebida.querySelector(".item:nth-child(1)").classList.remove("checked");
        bebida.querySelector(".item:nth-child(2)").classList.add("checked");
        bebida.querySelector(".item:nth-child(3)").classList.remove("checked");
        bebida.querySelector(".item:nth-child(4)").classList.remove("checked");
    }
    if(x === 3){
        bebida.querySelector(".item:nth-child(1)").classList.remove("checked");
        bebida.querySelector(".item:nth-child(2)").classList.remove("checked");
        bebida.querySelector(".item:nth-child(3)").classList.add("checked");
        bebida.querySelector(".item:nth-child(4)").classList.remove("checked");
    }
    if(x === 4){
        bebida.querySelector(".item:nth-child(1)").classList.remove("checked");
        bebida.querySelector(".item:nth-child(2)").classList.remove("checked");
        bebida.querySelector(".item:nth-child(3)").classList.remove("checked");
        bebida.querySelector(".item:nth-child(4)").classList.add("checked");
    }
}
function sobremesas (x){
    const sobremesa = document.querySelector(".sobremesa .itens");
    if(x === 1){
        sobremesa.querySelector(".item:nth-child(1)").classList.add("checked");
        sobremesa.querySelector(".item:nth-child(2)").classList.remove("checked");
        sobremesa.querySelector(".item:nth-child(3)").classList.remove("checked");
        sobremesa.querySelector(".item:nth-child(4)").classList.remove("checked");
    }
    if(x === 2){
        sobremesa.querySelector(".item:nth-child(1)").classList.remove("checked");
        sobremesa.querySelector(".item:nth-child(2)").classList.add("checked");
        sobremesa.querySelector(".item:nth-child(3)").classList.remove("checked");
        sobremesa.querySelector(".item:nth-child(4)").classList.remove("checked");
    }
    if(x === 3){
        sobremesa.querySelector(".item:nth-child(1)").classList.remove("checked");
        sobremesa.querySelector(".item:nth-child(2)").classList.remove("checked");
        sobremesa.querySelector(".item:nth-child(3)").classList.add("checked");
        sobremesa.querySelector(".item:nth-child(4)").classList.remove("checked");
    }
    if(x === 4){
        sobremesa.querySelector(".item:nth-child(1)").classList.remove("checked");
        sobremesa.querySelector(".item:nth-child(2)").classList.remove("checked");
        sobremesa.querySelector(".item:nth-child(3)").classList.remove("checked");
        sobremesa.querySelector(".item:nth-child(4)").classList.add("checked");
    }
}