

//Exemplo1
const divExemplo1 = document.querySelector('.div.exemplo1');
let contador1 = 1;
divExemplo1.addEventListener('click', mudardiv);
function mudardiv(){
    divExemplo1.innerHTML = `Essa div foi clicada ${contador1} vezes!`;
    contador1++;
}


//Exemplo2
const clickExemplo2 = document.querySelector('.click');
clickExemplo2.addEventListener('click', mudarCor);
function mudarCor(){
    clickExemplo2.classList.toggle('vermelho');
}

const dblclickExemplo2 = document.querySelector('.dbclick');
dblclickExemplo2.addEventListener("dblclick", mudarFont);
function mudarFont(){
    dblclickExemplo2.classList.toggle('vermelho');
    console.log('Esta funcionando, mas você configurou errado');
}

const keypressExemplo2 = document.querySelector('.keypress');
dblclickExemplo2.addEventListener("keypress", mudarFont);
function mudarFont(){
    dblclickExemplo2.classList.toggle('vermelho');
    console.log('Esta funcionando, mas você configurou errado');
}
console.log(dblclickExemplo2);