let prato_selecionado =0;
let bebida_selecionada=0;
let sobremesa_selecionada=0;
function pratoprincipal (x){
    const pratos = document.querySelectorAll(".principal .itens .item");
    prato_selecionado=1;
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
    if(prato_selecionado===1 && bebida_selecionada === 1 && sobremesa_selecionada === 1){
        const botao = document.querySelector("button");
        botao.style.backgroundColor = "#32B72F";
    }

}
function bebidas (x){
    const bebida = document.querySelectorAll(".bebida .itens .item");
    bebida_selecionada=1;
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
    if(prato_selecionado===1 && bebida_selecionada === 1 && sobremesa_selecionada === 1){
        const botao = document.querySelector("button");
        botao.style.backgroundColor = "#32B72F";
    }
}
function sobremesas (x){
    const sobremesa = document.querySelectorAll(".sobremesa .itens .item");
    sobremesa_selecionada=1;
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
    if(prato_selecionado===1 && bebida_selecionada === 1 && sobremesa_selecionada === 1){
        const botao = document.querySelector("button");
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "<strong>Fechar pedido</strong>"
    }
}

