const botaoNao = document.getElementById("botao-nao");
const areaPrincipal = document.getElementById("principal");



function mover(){
    const larguraX = areaPrincipal.offsetWidth;
    const larguraY = areaPrincipal.offsetHeight;

    const limiteX = larguraX - botaoNao.offsetWidth;
    const limiteY = larguraY - botaoNao.offsetHeight;

    const radomPosX = Math.floor(Math.random() * limiteX);
    const radomPosY = Math.floor(Math.random() * limiteY);

    const posX = radomPosX + "px";
    const posY = radomPosY + "px";
    botaoNao.style.right = posX;
    botaoNao.style.top = posY;
}