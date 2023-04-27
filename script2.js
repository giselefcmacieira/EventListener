

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

