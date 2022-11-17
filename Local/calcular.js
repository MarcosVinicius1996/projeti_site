var gasolina, etanol, distancia, km;

function divideBy(){
    distancia= document.getElementByid("distancia").value;
    km= document.getElementByid("quilometros").value;
    document.getElementById("result").innerHTML = distancia / km;
}

function melhor(){
    etanol= parseFloat(frdados.txetanol.value.replace(",","."));
    gasolina= parseFloat(frdados.txgasolina.value.replace(",","."));
    if(etanol < 0.7*gasolina){
        document.getElementById("imagem").src="imagens/alcool.png";

    }

    else{
        document.getElementById("imagem").src="imagens/gasolina.png";
    }
}

function limpar(){
    document.getElementById("imagem").src="imagens/normal.png";
}
