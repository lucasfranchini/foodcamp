let prato_selecionado =0,sobremesa_selecionada=0,bebida_selecionada=0;
let preco_principal=0, preco_bebida=0,preco_sobremesa=0,preco_total=0;;
function pratoprincipal (x){
    const pratos = document.querySelectorAll(".principal .itens .item");
    prato_selecionado=1;
    if(x === 0){
        pratos[0].classList.add("checked");
        pratos[1].classList.remove("checked");
        pratos[2].classList.remove("checked");
        pratos[3].classList.remove("checked");
        // transformando o valor do prato em um numero para a soma no final
        preco_principal = pratos[0].querySelector("p:nth-child(4)").innerHTML;
        preco_principal = preco_principal.replace('R$ ','');
        preco_principal = preco_principal.replace(',','.');
        preco_principal = parseFloat(preco_principal);
    }
    if(x === 1){
        pratos[1].classList.add("checked");
        pratos[0].classList.remove("checked");
        pratos[2].classList.remove("checked");
        pratos[3].classList.remove("checked");
        // transformando o valor do prato em um numero para a soma no final
        preco_principal = pratos[1].querySelector("p:nth-child(4)").innerHTML;
        preco_principal = preco_principal.replace('R$ ','');
        preco_principal = preco_principal.replace(',','.');
        preco_principal = parseFloat(preco_principal);
    }
    if(x === 2){
        pratos[2].classList.add("checked");
        pratos[0].classList.remove("checked");
        pratos[1].classList.remove("checked");
        pratos[3].classList.remove("checked");
        // transformando o valor do prato em um numero para a soma no final
        preco_principal = pratos[2].querySelector("p:nth-child(4)").innerHTML;
        preco_principal = preco_principal.replace('R$ ','');
        preco_principal = preco_principal.replace(',','.');
        preco_principal = parseFloat(preco_principal);
    }
    if(x === 3){
        pratos[3].classList.add("checked");
        pratos[0].classList.remove("checked");
        pratos[1].classList.remove("checked");
        pratos[2].classList.remove("checked");
        // transformando o valor do prato em um numero para a soma no final
        preco_principal = pratos[3].querySelector("p:nth-child(4)").innerHTML;
        preco_principal = preco_principal.replace('R$ ','');
        preco_principal = preco_principal.replace(',','.');
        preco_principal = parseFloat(preco_principal);
    }
    if(prato_selecionado===1 && bebida_selecionada === 1 && sobremesa_selecionada === 1){
        const botao = document.querySelector("button");
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "<strong>Fechar pedido</strong>"
        const link = document.querySelector("a");
        link.setAttribute('href', "123");
    }

}
function bebidas (x){
    const bebida = document.querySelectorAll(".bebida .itens .item");
    bebida_selecionada=1;
    if(x === 0){
        bebida[0].classList.add("checked");
        bebida[1].classList.remove("checked");
        bebida[2].classList.remove("checked");
        bebida[3].classList.remove("checked");
        // transformando o valor do prato em um numero para a soma no final
        preco_bebida = bebida[0].querySelector("p:nth-child(4)").innerHTML;
        preco_bebida = preco_bebida.replace('R$ ','');
        preco_bebida = preco_bebida.replace(',','.');
        preco_bebida = parseFloat(preco_bebida);
    }
    if(x === 1){
        bebida[1].classList.add("checked");
        bebida[0].classList.remove("checked");
        bebida[2].classList.remove("checked");
        bebida[3].classList.remove("checked");
        // transformando o valor do prato em um numero para a soma no final
        preco_bebida = bebida[1].querySelector("p:nth-child(4)").innerHTML;
        preco_bebida = preco_bebida.replace('R$ ','');
        preco_bebida = preco_bebida.replace(',','.');
        preco_bebida = parseFloat(preco_bebida);
    }
    if(x === 2){
        bebida[2].classList.add("checked");
        bebida[0].classList.remove("checked");
        bebida[1].classList.remove("checked");
        bebida[3].classList.remove("checked");
        // transformando o valor do prato em um numero para a soma no final
        preco_bebida = bebida[2].querySelector("p:nth-child(4)").innerHTML;
        preco_bebida = preco_bebida.replace('R$ ','');
        preco_bebida = preco_bebida.replace(',','.');
        preco_bebida = parseFloat(preco_bebida);
    }
    if(x === 3){
        bebida[3].classList.add("checked");
        bebida[0].classList.remove("checked");
        bebida[1].classList.remove("checked");
        bebida[2].classList.remove("checked");
        // transformando o valor do prato em um numero para a soma no final
        preco_bebida = bebida[3].querySelector("p:nth-child(4)").innerHTML;
        preco_bebida = preco_bebida.replace('R$ ','');
        preco_bebida = preco_bebida.replace(',','.');
        preco_bebida = parseFloat(preco_bebida);
    }
    if(prato_selecionado===1 && bebida_selecionada === 1 && sobremesa_selecionada === 1){
        const botao = document.querySelector("button");
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "<strong>Fechar pedido</strong>"
        const link = document.querySelector("a");
        link.setAttribute('href', "123");
    }
}
function sobremesas (x){
    const sobremesa = document.querySelectorAll(".sobremesa .itens .item");
    sobremesa_selecionada=1;
    if(x === 0){
        sobremesa[0].classList.add("checked");
        sobremesa[1].classList.remove("checked");
        sobremesa[2].classList.remove("checked");
        sobremesa[3].classList.remove("checked");
    }
    if(x === 1){
        sobremesa[1].classList.add("checked");
        sobremesa[0].classList.remove("checked");
        sobremesa[2].classList.remove("checked");
        sobremesa[3].classList.remove("checked");
    }
    if(x === 2){
        sobremesa[2].classList.add("checked");
        sobremesa[0].classList.remove("checked");
        sobremesa[1].classList.remove("checked");
        sobremesa[3].classList.remove("checked");
    }
    if(x === 3){
        sobremesa[3].classList.add("checked");
        sobremesa[0].classList.remove("checked");
        sobremesa[1].classList.remove("checked");
        sobremesa[2].classList.remove("checked");
    }
    if(prato_selecionado===1 && bebida_selecionada === 1 && sobremesa_selecionada === 1){
        const botao = document.querySelector("button");
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "<strong>Fechar pedido</strong>";
        const link = document.querySelector("a");
        link.setAttribute('href', "123");
    }
}

