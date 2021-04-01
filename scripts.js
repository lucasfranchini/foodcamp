let prato_selecionado =0,sobremesa_selecionada=0,bebida_selecionada=0;
let preco_principal=0, preco_bebida=0,preco_sobremesa=0,preco_total=0;
let mensagem_final,nome_prato,nome_bebida,nome_sobremesa;
const link = document.querySelector("a");
const tela_confirmar = document.querySelector(".tela_de_compra");
function pratoprincipal (x){
    const pratos = document.querySelectorAll(".principal .itens .item");
    prato_selecionado=1;
    // transformando o valor do prato em um numero para a soma no final
    preco_principal = pratos[x].querySelector("p:nth-child(4)").innerHTML;
    preco_principal = preco_principal.replace('R$ ','');
    preco_principal = preco_principal.replace(',','.');
    preco_principal = parseFloat(preco_principal);
    // adquirindo o nome da alimento
    nome_prato = pratos[x].querySelector("p:nth-child(2)").innerHTML;
    nome_prato = nome_prato.replace('<strong>','');
    nome_prato = nome_prato.replace('</strong>','')
    //marcando a caixa escolhida
    if(x === 0){
        pratos[0].classList.add("checked");
        pratos[1].classList.remove("checked");
        pratos[2].classList.remove("checked");
        pratos[3].classList.remove("checked");
        
    }
    if(x === 1){
        pratos[1].classList.add("checked");
        pratos[0].classList.remove("checked");
        pratos[2].classList.remove("checked");
        pratos[3].classList.remove("checked");
    }
    if(x === 2){
        pratos[2].classList.add("checked");
        pratos[0].classList.remove("checked");
        pratos[1].classList.remove("checked");
        pratos[3].classList.remove("checked");
    }
    if(x === 3){
        pratos[3].classList.add("checked");
        pratos[0].classList.remove("checked");
        pratos[1].classList.remove("checked");
        pratos[2].classList.remove("checked");
    }
    if(prato_selecionado===1 && bebida_selecionada === 1 && sobremesa_selecionada === 1){
        //configurando o botão
        const botao = document.querySelector("button");
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "<strong>Fechar pedido</strong>"
        //somando os alimentos
        preco_total= preco_principal+preco_bebida+preco_sobremesa;
        preco_total =preco_total.toFixed(2);
        //criando a mensagem do whatsapp
        mensagem_final = ("Olá, gostaria de fazer o pedido:\n - Prato: " + nome_prato +"\n - Bebida: " + nome_bebida +"\n - Sobremesa: " + nome_sobremesa + "\n Total: R$" + preco_total);
        mensagem_final = encodeURIComponent(mensagem_final);
        link.setAttribute('href', "https://wa.me/5532988350926?text="+mensagem_final);
    }

}
function bebidas (x){
    const bebida = document.querySelectorAll(".bebida .itens .item");
    bebida_selecionada=1;
    // transformando o valor do prato em um numero para a soma no final
    preco_bebida = bebida[x].querySelector("p:nth-child(4)").innerHTML;
    preco_bebida = preco_bebida.replace('R$ ','');
    preco_bebida = preco_bebida.replace(',','.');
    preco_bebida = parseFloat(preco_bebida);
    // adquirindo o nome da alimento
    nome_bebida = bebida[x].querySelector("p:nth-child(2)").innerHTML;
    nome_bebida = nome_bebida.replace('<strong>','');
    nome_bebida = nome_bebida.replace('</strong>','')
    //marcanda a caixa escolhida
    if(x === 0){
        bebida[0].classList.add("checked");
        bebida[1].classList.remove("checked");
        bebida[2].classList.remove("checked");
        bebida[3].classList.remove("checked");
    }
    if(x === 1){
        bebida[1].classList.add("checked");
        bebida[0].classList.remove("checked");
        bebida[2].classList.remove("checked");
        bebida[3].classList.remove("checked");
    }
    if(x === 2){
        bebida[2].classList.add("checked");
        bebida[0].classList.remove("checked");
        bebida[1].classList.remove("checked");
        bebida[3].classList.remove("checked");
    }
    if(x === 3){
        bebida[3].classList.add("checked");
        bebida[0].classList.remove("checked");
        bebida[1].classList.remove("checked");
        bebida[2].classList.remove("checked");
    }
    if(prato_selecionado===1 && bebida_selecionada === 1 && sobremesa_selecionada === 1){
        //configurando o botão
        const botao = document.querySelector("button");
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "<strong>Fechar pedido</strong>"
        // somando os alimentos
        preco_total= preco_principal+preco_bebida+preco_sobremesa;
        preco_total =preco_total.toFixed(2);
        // criando a mensagem para o whatsapp
        mensagem_final = ("Olá, gostaria de fazer o pedido:\n - Prato: " + nome_prato +"\n - Bebida: " + nome_bebida +"\n - Sobremesa: " + nome_sobremesa + "\n Total: R$" + preco_total);
        mensagem_final = encodeURIComponent(mensagem_final);
        link.setAttribute('href', "https://wa.me/5532988350926?text="+mensagem_final);
    }
}
function sobremesas (x){
    const sobremesa = document.querySelectorAll(".sobremesa .itens .item");
    sobremesa_selecionada=1;
    // transformando o valor do prato em um numero para a soma no final
    preco_sobremesa = sobremesa[x].querySelector("p:nth-child(4)").innerHTML;
    preco_sobremesa = preco_sobremesa.replace('R$ ','');
    preco_sobremesa = preco_sobremesa.replace(',','.');
    preco_sobremesa = parseFloat(preco_sobremesa);
    // adquirindo o nome da alimento
    nome_sobremesa = sobremesa[x].querySelector("p:nth-child(2)").innerHTML;
    nome_sobremesa = nome_sobremesa.replace('<strong>','');
    nome_sobremesa = nome_sobremesa.replace('</strong>','')
    //marcando a caixa escolhida
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
        //configurando o botão
        const botao = document.querySelector("button");
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "<strong>Fechar pedido</strong>";
        //somando os alimentos
        preco_total= preco_principal+preco_bebida+preco_sobremesa;
        preco_total =preco_total.toFixed(2);
        //criando a mensagem do whatsapp
        mensagem_final = ("Olá, gostaria de fazer o pedido:\n - Prato: " + nome_prato +"\n - Bebida: " + nome_bebida +"\n - Sobremesa: " + nome_sobremesa + "\n Total: R$" + preco_total);
        mensagem_final = encodeURIComponent(mensagem_final);
        link.setAttribute('href', "https://wa.me/5532988350926?text="+mensagem_final);
    }
}
function mostrar (){
    tela_confirmar.classList.add("mostrar");
}
function cancelar(){
    tela_confirmar.classList.remove("mostrar");
}

