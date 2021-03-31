
function pratoprincipal (x){
    const pratos = document.querySelectorAll(".principal .itens .item");
    
    if(x === 1){
        pratos[0].classList.add("checked");
        pratos[1].classList.remove("checked");
        pratos[2].classList.remove("checked");
        pratos[3].classList.remove("checked");
    }
    if(x === 2){
        pratos[1].classList.add("checked");
        pratos[0].classList.remove("checked");
        pratos[2].classList.remove("checked");
        pratos[3].classList.remove("checked");
    }
    if(x === 3){
        pratos[2].classList.add("checked");
        pratos[0].classList.remove("checked");
        pratos[1].classList.remove("checked");
        pratos[3].classList.remove("checked");
    }
    if(x === 4){
        pratos[3].classList.add("checked");
        pratos[0].classList.remove("checked");
        pratos[1].classList.remove("checked");
        pratos[2].classList.remove("checked");
    }

}
function bebidas (x){
    const bebida = document.querySelectorAll(".bebida .itens .item");
    if(x === 1){
        bebida[0].classList.add("checked");
        bebida[1].classList.remove("checked");
        bebida[2].classList.remove("checked");
        bebida[3].classList.remove("checked");
    }
    if(x === 2){
        bebida[1].classList.add("checked");
        bebida[0].classList.remove("checked");
        bebida[2].classList.remove("checked");
        bebida[3].classList.remove("checked");
    }
    if(x === 3){
        bebida[2].classList.add("checked");
        bebida[0].classList.remove("checked");
        bebida[1].classList.remove("checked");
        bebida[3].classList.remove("checked");
    }
    if(x === 4){
        bebida[3].classList.add("checked");
        bebida[0].classList.remove("checked");
        bebida[1].classList.remove("checked");
        bebida[2].classList.remove("checked");
    }
}
function sobremesas (x){
    const sobremesa = document.querySelectorAll(".sobremesa .itens .item");
    if(x === 1){
        sobremesa[0].classList.add("checked");
        sobremesa[1].classList.remove("checked");
        sobremesa[2].classList.remove("checked");
        sobremesa[3].classList.remove("checked");
    }
    if(x === 2){
        sobremesa[1].classList.add("checked");
        sobremesa[0].classList.remove("checked");
        sobremesa[2].classList.remove("checked");
        sobremesa[3].classList.remove("checked");
    }
    if(x === 3){
        sobremesa[2].classList.add("checked");
        sobremesa[0].classList.remove("checked");
        sobremesa[1].classList.remove("checked");
        sobremesa[3].classList.remove("checked");
    }
    if(x === 4){
        sobremesa[3].classList.add("checked");
        sobremesa[0].classList.remove("checked");
        sobremesa[1].classList.remove("checked");
        sobremesa[2].classList.remove("checked");
    }
}
