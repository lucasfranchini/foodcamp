let prato_selecionado =0,sobremesa_selecionada=0,bebida_selecionada=0;
let preco_principal=0, preco_bebida=0,preco_sobremesa=0,preco_total=0;
let mensagem_final,nome_prato,nome_bebida,nome_sobremesa;
const link = document.querySelector("a");
const tela_confirmar = document.querySelector(".tela_de_compra");
const textos_confirmar = document.querySelectorAll(".confirmacao div");
function pratoprincipal (x){
    const pratos = document.querySelectorAll(".principal .itens .item");
    const texto_prato = textos_confirmar[0].querySelector("span");
    const texto_preco_prato = textos_confirmar[0].querySelector("span:nth-child(2)");
    prato_selecionado=1;
    // transformando o valor do prato em um numero para a soma no final
    preco_principal = pratos[x].querySelector("p:nth-child(4)").innerHTML;
    preco_principal = preco_principal.replace('R$ ','');
    preco_principal = preco_principal.replace(',','.');
    preco_principal = parseFloat(preco_principal);
    texto_preco_prato.innerHTML = preco_principal.toFixed(2);
    texto_preco_prato.innerHTML = texto_preco_prato.innerHTML.replace('.',',');
    // adquirindo o nome da alimento
    nome_prato = pratos[x].querySelector("p:nth-child(2)").innerHTML;
    nome_prato = nome_prato.replace('<strong>','');
    nome_prato = nome_prato.replace('</strong>','')
    texto_prato.innerHTML = nome_prato;pratos[0].classList.add("checked")
     //marcando a caixa escolhida
    pratos[0].classList.remove("checked");;
    pratos[1].classList.remove("checked");
    pratos[2].classList.remove("checked");
    pratos[3].classList.remove("checked");
    pratos[x].classList.add("checked");
    if(prato_selecionado===1 && bebida_selecionada === 1 && sobremesa_selecionada === 1){
        //configurando o botão
        const botao = document.querySelector("button");
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "<strong>Fechar pedido</strong>"
        //somando os alimentos
        preco_total= preco_principal+preco_bebida+preco_sobremesa;
        preco_total =preco_total.toFixed(2);
        //configurando a tela de confirmação do pedido
        const texto_preco_total = textos_confirmar[3].querySelector("span:nth-child(2)");
        texto_preco_total.innerHTML = ("<strong>R$ "+ preco_total+"</strong>");
        texto_preco_total.innerHTML = texto_preco_total.innerHTML.replace('.',',');
    }

}
function bebidas (x){
    const bebida = document.querySelectorAll(".bebida .itens .item");
    const texto_bebida = textos_confirmar[1].querySelector("span");
    const texto_preco_bebida = textos_confirmar[1].querySelector("span:nth-child(2)");
    bebida_selecionada=1;
    // transformando o valor do prato em um numero para a soma no final
    preco_bebida = bebida[x].querySelector("p:nth-child(4)").innerHTML;
    preco_bebida = preco_bebida.replace('R$ ','');
    preco_bebida = preco_bebida.replace(',','.');
    preco_bebida = parseFloat(preco_bebida);
    texto_preco_bebida.innerHTML = preco_bebida.toFixed(2);
    texto_preco_bebida.innerHTML = texto_preco_bebida.innerHTML.replace('.',',');
    // adquirindo o nome da alimento
    nome_bebida = bebida[x].querySelector("p:nth-child(2)").innerHTML;
    nome_bebida = nome_bebida.replace('<strong>','');
    nome_bebida = nome_bebida.replace('</strong>','')
    texto_bebida.innerHTML = nome_bebida;
    //marcanda a caixa escolhida
    bebida[0].classList.remove("checked");;
    bebida[1].classList.remove("checked");
    bebida[2].classList.remove("checked");
    bebida[3].classList.remove("checked");
    bebida[x].classList.add("checked");
    if(prato_selecionado===1 && bebida_selecionada === 1 && sobremesa_selecionada === 1){
        //configurando o botão
        const botao = document.querySelector("button");
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "<strong>Fechar pedido</strong>"
        // somando os alimentos
        preco_total= preco_principal+preco_bebida+preco_sobremesa;
        preco_total =preco_total.toFixed(2);
        //configurando a tela de confirmação do pedido
        const texto_preco_total = textos_confirmar[3].querySelector("span:nth-child(2)");
        texto_preco_total.innerHTML = ("<strong>R$ "+ preco_total+"</strong>");
        texto_preco_total.innerHTML = texto_preco_total.innerHTML.replace('.',',');
    }
}
function sobremesas (x){
    const sobremesa = document.querySelectorAll(".sobremesa .itens .item");
    const texto_sobremesa = textos_confirmar[2].querySelector("span");
    const texto_preco_sobremesa = textos_confirmar[2].querySelector("span:nth-child(2)");
    sobremesa_selecionada=1;
    // transformando o valor do prato em um numero para a soma no final
    preco_sobremesa = sobremesa[x].querySelector("p:nth-child(4)").innerHTML;
    preco_sobremesa = preco_sobremesa.replace('R$ ','');
    preco_sobremesa = preco_sobremesa.replace(',','.');
    preco_sobremesa = parseFloat(preco_sobremesa);
    texto_preco_sobremesa.innerHTML = preco_sobremesa.toFixed(2);
    texto_preco_sobremesa.innerHTML = texto_preco_sobremesa.innerHTML.replace('.',',');
    // adquirindo o nome da alimento
    nome_sobremesa = sobremesa[x].querySelector("p:nth-child(2)").innerHTML;
    nome_sobremesa = nome_sobremesa.replace('<strong>','');
    nome_sobremesa = nome_sobremesa.replace('</strong>','')
    texto_sobremesa.innerHTML = nome_sobremesa;
    //marcando a caixa escolhida
    sobremesa[0].classList.remove("checked");;
    sobremesa[1].classList.remove("checked");
    sobremesa[2].classList.remove("checked");
    sobremesa[3].classList.remove("checked");
    sobremesa[x].classList.add("checked");
    if(prato_selecionado===1 && bebida_selecionada === 1 && sobremesa_selecionada === 1){
        //configurando o botão
        const botao = document.querySelector("button");
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "<strong>Fechar pedido</strong>";
        //somando os alimentos
        preco_total= preco_principal+preco_bebida+preco_sobremesa;
        preco_total =preco_total.toFixed(2);
        //configurando a tela de confirmação do pedido
        const texto_preco_total = textos_confirmar[3].querySelector("span:nth-child(2)");
        texto_preco_total.innerHTML = ("<strong>R$ "+ preco_total+"</strong>");
        texto_preco_total.innerHTML = texto_preco_total.innerHTML.replace('.',',');
        
    }
}
function pedir_ou_cancelar (){
    if(prato_selecionado===1 && bebida_selecionada === 1 && sobremesa_selecionada === 1){
        tela_confirmar.classList.toggle("mostrar");
    }
}
function requisitar_nome(){
    const nome = prompt("por favor diga seu nome");
    const endereco = prompt("por favor de seu endereço");
    //criando a mensagem do whatsapp
    mensagem_final = ("Olá, gostaria de fazer o pedido:\n - Prato: " + nome_prato +"\n - Bebida: " + nome_bebida +"\n - Sobremesa: " + nome_sobremesa + "\n Total: R$" + preco_total);
    mensagem_final = (mensagem_final+"\n \n Nome: "+nome + "\n Endereço: " + endereco);
    mensagem_final = encodeURIComponent(mensagem_final);
    link.setAttribute('href', "https://wa.me/5532988417685?text="+mensagem_final);
}
