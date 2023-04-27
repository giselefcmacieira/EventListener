

//Exemplo1
const divExemplo1 = document.querySelector('.div.exemplo1');
let contador1 = 1;
divExemplo1.addEventListener('click', mudardiv);
function mudardiv(){
    divExemplo1.innerHTML = `Essa div foi clicada ${contador1} vezes!`;
    contador1++;
}

//Exemplo2
const clickExemplo2 = document.querySelector('.click2');
clickExemplo2.addEventListener('click', mostraEventmouse);
document.addEventListener('keypress', mostrarEventTeclado);
function mostraEventmouse(event){
    console.log(event);
    console.log(event.target);
}
function mostrarEventTeclado(event){
    const code = event.code;
    const key = event.key;
    document.querySelector('.exemplo2 ul').innerHTML += `
    <li style = "font-size: 20px">code: ${code}</li>
    <li style = "font-size: 20px">key: ${key}</li>`;
}

//Exemplo3
const clickExemplo3 = document.querySelector('.click');
clickExemplo3.addEventListener('click', mudarCor);
function mudarCor(event){
    event.target.classList.toggle('vermelho');
}

const mouseoverExemplo3 = document.querySelector('.mouseover');
mouseoverExemplo3.addEventListener("mouseover", mudarFonto);
mouseoverExemplo3.addEventListener("mouseleave", mudarFontl);
function mudarFonto(event){
    event.target.classList.add('font-size');
}
function mudarFontl(event){
    event.target.classList.remove('font-size');
}

const dblclickExemplo3 = document.querySelector('.dblclick');
dblclickExemplo3.addEventListener("dblclick", mudarFontECor);
function mudarFontECor(event){
    event.target.classList.toggle('vermelho');
    event.target.classList.toggle('font-size');
}

const enterExemplo3 = document.querySelector('.enter');
const pontoExemplo3 = document.querySelector('.ponto');
const lExemplo3 = document.querySelector('.l');
const espaçoExemplo3 = document.querySelector('.espaço');
document.addEventListener('keypress', alterarCor);
function alterarCor(event){
    console.log(event);
    if(event.key === 'Enter'){
        enterExemplo3.classList.toggle('vermelho');
    }else if(event.code === 'Space'){
        espaçoExemplo3.classList.toggle('azul');
    }else if(event.key === '.'){
        pontoExemplo3.classList.toggle('verde');
    }else if(event.key === 'l'){
        lExemplo3.classList.toggle('roxo');
    }
    
}

//Exemplo4
const elementoAvo = document.querySelector('.avo');
const elementoPai = document.querySelector('.pai');
const elementoFilho = document.querySelector('.filho');
elementoAvo.addEventListener('click', alterarBackgroundAvo, {capture: true});
elementoPai.addEventListener('click', alterarBackgroundPai);
elementoFilho.addEventListener('click', alterarBackgroundFilho);
function alterarBackgroundAvo(){
    elementoAvo.classList.toggle('bgbranco');
    console.log('avô');
}
function alterarBackgroundPai(){
    elementoPai.classList.toggle('bgazul');
    console.log('pai');
}
function alterarBackgroundFilho(){
    elementoFilho.classList.toggle('bgroxo');
    console.log('filho');
}
//,{capture: true}

//Exemplo5
const elementoAvo5 = document.querySelector('.exemplo5 .avo');
const elementoPai5 = document.querySelector('.exemplo5 .pai');
const elementoFilho5 = document.querySelector('.exemplo5 .filho');
elementoAvo5.addEventListener('click', alterarBackgroundA);
elementoPai5.addEventListener('click', alterarBackgroundP);
elementoFilho5.addEventListener('click', alterarBackgroundF);
function alterarBackgroundA(event){
    elementoAvo5.classList.toggle('bgbranco');
    console.log('avô');
}
function alterarBackgroundP(event){
    elementoPai5.classList.toggle('bgazul');
    console.log('pai');
}
function alterarBackgroundF(event){
    event.stopPropagation();
    elementoFilho5.classList.toggle('bgroxo');
    console.log('filho');
}

//Exemplo6
const divExemplo6 = document.querySelector('.div-ex6');
divExemplo6.addEventListener('click', alterarBackground, {once: true});
function alterarBackground(event){
    event.target.classList.toggle('vermelho');
}

//Exemplo7
let contadorr = 1;
const divExemplo7 = document.querySelector('.div-ex7');
divExemplo7.addEventListener('click', alterarDiv);
divExemplo7.addEventListener('click', contarClicks);
function alterarDiv(event){
    if(contadorr > 3){
        event.target.removeEventListener('click', alterarDiv);
    }else{
        event.target.classList.toggle('vermelho');
    }
}
function contarClicks(){
    document.querySelector('.p-ex7').innerHTML = `Este botão já foi clicado ${contadorr} vezes`;
    contadorr++;
}