let contador = 0;
const iconeProximo = document.querySelector('.icone.proximo');
const iconeAnterior = document.querySelector('.icone.anterior');
iconeProximo.addEventListener("click", passarParaProxima)
iconeAnterior.addEventListener("click", voltarParaAnterior)
function passarParaProxima (event){
    if (contador === 0){//adicionar texto 1
        const texto1 = document.querySelector('.texto.one');
        const icone = document.querySelector('.icone.anterior');
        const menuExemplos = document.querySelector('.menu-exemplos');
        texto1.classList.remove('hide');
        icone.classList.remove('hide');
        menuExemplos.classList.add('hide');
        contador++;
    }else if(contador === 1){//remover conteudo1 e adicionar titulo2
        const conteudo1 = document.querySelector('.titulo.one');
        const conteudo2 = document.querySelector('.titulo.two');
        conteudo1.classList.add('hide');
        conteudo2.classList.remove('hide');
        contador++;
    }else if(contador === 2){//adicionar texto 2 (dentro do titulo2)
        const conteudo1 = document.querySelector('.titulo.one');
        const texto2 = document.querySelector('.texto.two');
        const conteudo2 = document.querySelector('.titulo.two');
        texto2.classList.remove('hide');
        conteudo2.classList.remove('hide');
        conteudo1.classList.add('hide');
        contador++;
    }
    else if(contador === 3){
        const texto2 = document.querySelector('.texto.two');
        const texto3 = document.querySelector('.texto.three');
        texto2.classList.add('hide');
        texto3.classList.remove('hide');
        contador++;
    }
    else if(contador === 4){
        const texto3 = document.querySelector('.texto.three');
        const texto4 = document.querySelector('.texto.four');
        texto3.classList.add('hide');
        texto4.classList.remove('hide');
        contador++;
    }
    else if(contador === 5){
        const conteudo2 = document.querySelector('.titulo.two');
        const pratica = document.querySelector('.pratica');
        const exemplos = document.querySelector('.exemplos');
        const exemplo1 = document.querySelector('.exemplo1');
        const iconeV = document.querySelector('.icone.voltar');
        const iconeAV = document.querySelector('.icone.proxima');
        const iconeA = document.querySelector('.icone.anterior');
        const iconeP = document.querySelector('.icone.proximo');
        conteudo2.classList.add('hide');
        pratica.classList.remove('hide');
        exemplos.classList.remove('hide');
        exemplo1.classList.remove('hide');
        iconeV.classList.remove('hide');
        iconeAV.classList.remove('hide');
        iconeA.classList.add('hide');
        iconeP.classList.add('hide');
        contador++;
    }
}
function voltarParaAnterior (event){
    if(contador === 1){//remove o texto1
        const texto1 = document.querySelector('.texto.one');
        const menuExemplos = document.querySelector('.menu-exemplos');
        menuExemplos.classList.remove('hide');
        texto1.classList.add('hide');
        contador = contador - 1;
    }else if(contador === 2){//remove o titulo2 e adiociona o titulo1
        const conteudo1 = document.querySelector('.titulo.one');
        const conteudo2 = document.querySelector('.titulo.two');
        conteudo2.classList.add('hide');
        conteudo1.classList.remove('hide');
        contador = contador - 1;
    }else if(contador === 3){
        const conteudo1 = document.querySelector('.titulo.one');
        const conteudo2 = document.querySelector('.titulo.two');
        conteudo2.classList.add('hide');
        conteudo1.classList.remove('hide');
        contador = contador - 1;
    }else if(contador === 4){
        const texto2 = document.querySelector('.texto.two');
        const texto3 = document.querySelector('.texto.three');
        texto2.classList.remove('hide');
        texto3.classList.add('hide');
        contador = contador - 1;
    }
    else if(contador === 5){
        const texto3 = document.querySelector('.texto.three');
        const texto4 = document.querySelector('.texto.four');
        texto3.classList.remove('hide');
        texto4.classList.add('hide');
        contador = contador - 1;
    }
}

const iconeAvancar = document.querySelector('.icone.proxima');
const iconeVoltar = document.querySelector('.icone.voltar');
iconeAvancar.addEventListener("click", avancarExemplo);
iconeVoltar.addEventListener("click", voltarExemplo);
function avancarExemplo (event){
    if(contador === 6){
        const exemplo1 = document.querySelector('.exemplo1');
        const exemplo2 = document.querySelector('.exemplo2');
        exemplo2.classList.remove('hide');
        exemplo1.classList.add('hide');
        contador++;
    }else if(contador === 7){
        const exemplo2 = document.querySelector('.exemplo2');
        const exemplo3 = document.querySelector('.exemplo3');
        exemplo3.classList.remove('hide');
        exemplo2.classList.add('hide');
        contador++;
    }else if(contador === 8){
        const exemplo3 = document.querySelector('.exemplo3');
        const exemplo4 = document.querySelector('.exemplo4');
        exemplo4.classList.remove('hide');
        exemplo3.classList.add('hide');
        contador++;
    }else if(contador === 9){
        const exemplo4 = document.querySelector('.exemplo4');
        const exemplo5 = document.querySelector('.exemplo5');
        exemplo5.classList.remove('hide');
        exemplo4.classList.add('hide');
        contador++;
    }else if(contador === 10){
        const exemplo5 = document.querySelector('.exemplo5');
        const exemplo6 = document.querySelector('.exemplo6');
        exemplo6.classList.remove('hide');
        exemplo5.classList.add('hide');
        contador++;
    }else if(contador === 11){
        const exemplo6 = document.querySelector('.exemplo6');
        const exemplo7 = document.querySelector('.exemplo7');
        const iconeAV = document.querySelector('.icone.proxima');
        exemplo7.classList.remove('hide');
        exemplo6.classList.add('hide');
        iconeAV.classList.add('hide');
        contador++;
    }
}
function voltarExemplo (event){
    if(contador === 6){
        const exemplos = document.querySelector('.exemplos');
        const exemplo1 = document.querySelector('.exemplo1');
        const iconeV = document.querySelector('.icone.voltar');
        const iconeAV = document.querySelector('.icone.proxima');
        const iconeA = document.querySelector('.icone.anterior');
        const iconeP = document.querySelector('.icone.proximo');
        const conteudo2 = document.querySelector('.titulo.two');
        const texto4 = document.querySelector('.texto.four');
        exemplos.classList.add('hide');
        exemplo1.classList.add('hide');
        iconeV.classList.add('hide');
        iconeAV.classList.add('hide');
        iconeA.classList.remove('hide');
        iconeP.classList.remove('hide');
        conteudo2.classList.remove('hide');
        texto4.classList.remove('hide');
        contador = contador - 1;
    }else if(contador === 7){
        const exemplo1 = document.querySelector('.exemplo1');
        const exemplo2 = document.querySelector('.exemplo2');
        exemplo2.classList.add('hide');
        exemplo1.classList.remove('hide');
        contador = contador - 1;
    }else if(contador === 8){
        const exemplo2 = document.querySelector('.exemplo2');
        const exemplo3 = document.querySelector('.exemplo3');
        exemplo3.classList.add('hide');
        exemplo2.classList.remove('hide');
        contador = contador - 1;
    }else if(contador === 9){
        const exemplo3 = document.querySelector('.exemplo3');
        const exemplo4 = document.querySelector('.exemplo4');
        exemplo4.classList.add('hide');
        exemplo3.classList.remove('hide');
        contador = contador - 1;
    }else if(contador === 10){
        const exemplo4 = document.querySelector('.exemplo4');
        const exemplo5 = document.querySelector('.exemplo5');
        exemplo5.classList.add('hide');
        exemplo4.classList.remove('hide');
        contador = contador - 1;
    }else if(contador === 11){
        const exemplo5 = document.querySelector('.exemplo5');
        const exemplo6 = document.querySelector('.exemplo6');
        exemplo6.classList.add('hide');
        exemplo5.classList.remove('hide');
        contador = contador - 1;
    }else if(contador === 12){
        const exemplo6 = document.querySelector('.exemplo6');
        const exemplo7 = document.querySelector('.exemplo7');
        const iconeAV = document.querySelector('.icone.proxima');
        exemplo7.classList.add('hide');
        exemplo6.classList.remove('hide');
        iconeAV.classList.remove('hide');
        contador = contador - 1;
    }
}

const boxExemplo1 = document.querySelector('.ex1');
const boxExemplo2 = document.querySelector('.ex2');
const boxExemplo3 = document.querySelector('.ex3');
const boxExemplo4 = document.querySelector('.ex4');
const boxExemplo5 = document.querySelector('.ex5');
const boxExemplo6 = document.querySelector('.ex6');
const boxExemplo7 = document.querySelector('.ex7');
boxExemplo1.addEventListener("click", irParaExemplo1);
function irParaExemplo1(){
    const menuExemplos = document.querySelector('.menu-exemplos');
    const conteudo1 = document.querySelector('.titulo.one');
    const pratica = document.querySelector('.pratica');
    const exemplos = document.querySelector('.exemplos');
    const exemplo1 = document.querySelector('.exemplo1');
    const iconeV = document.querySelector('.icone.voltar');
    const iconeAV = document.querySelector('.icone.proxima');
    const iconeA = document.querySelector('.icone.anterior');
    const iconeP = document.querySelector('.icone.proximo');
    conteudo1.classList.add('hide');
    pratica.classList.remove('hide');
    exemplos.classList.remove('hide');
    exemplo1.classList.remove('hide');
    iconeV.classList.remove('hide');
    iconeAV.classList.remove('hide');
    iconeA.classList.add('hide');
    iconeP.classList.add('hide');
    menuExemplos.classList.add('hide');
    contador = 6;
}
boxExemplo2.addEventListener("click", irParaExemplo2);
function irParaExemplo2(){
    const menuExemplos = document.querySelector('.menu-exemplos');
    const conteudo1 = document.querySelector('.titulo.one');
    const pratica = document.querySelector('.pratica');
    const exemplos = document.querySelector('.exemplos');
    const exemplo1 = document.querySelector('.exemplo2');
    const iconeV = document.querySelector('.icone.voltar');
    const iconeAV = document.querySelector('.icone.proxima');
    const iconeA = document.querySelector('.icone.anterior');
    const iconeP = document.querySelector('.icone.proximo');
    conteudo1.classList.add('hide');
    pratica.classList.remove('hide');
    exemplos.classList.remove('hide');
    exemplo1.classList.remove('hide');
    iconeV.classList.remove('hide');
    iconeAV.classList.remove('hide');
    iconeA.classList.add('hide');
    iconeP.classList.add('hide');
    menuExemplos.classList.add('hide');
    contador = 7;
}
boxExemplo3.addEventListener("click", irParaExemplo3);
function irParaExemplo3(){
    const menuExemplos = document.querySelector('.menu-exemplos');
    const conteudo1 = document.querySelector('.titulo.one');
    const pratica = document.querySelector('.pratica');
    const exemplos = document.querySelector('.exemplos');
    const exemplo1 = document.querySelector('.exemplo3');
    const iconeV = document.querySelector('.icone.voltar');
    const iconeAV = document.querySelector('.icone.proxima');
    const iconeA = document.querySelector('.icone.anterior');
    const iconeP = document.querySelector('.icone.proximo');
    conteudo1.classList.add('hide');
    pratica.classList.remove('hide');
    exemplos.classList.remove('hide');
    exemplo1.classList.remove('hide');
    iconeV.classList.remove('hide');
    iconeAV.classList.remove('hide');
    iconeA.classList.add('hide');
    iconeP.classList.add('hide');
    menuExemplos.classList.add('hide');
    contador = 8;
}
boxExemplo4.addEventListener("click", irParaExemplo4);
function irParaExemplo4(){
    const menuExemplos = document.querySelector('.menu-exemplos');
    const conteudo1 = document.querySelector('.titulo.one');
    const pratica = document.querySelector('.pratica');
    const exemplos = document.querySelector('.exemplos');
    const exemplo1 = document.querySelector('.exemplo4');
    const iconeV = document.querySelector('.icone.voltar');
    const iconeAV = document.querySelector('.icone.proxima');
    const iconeA = document.querySelector('.icone.anterior');
    const iconeP = document.querySelector('.icone.proximo');
    conteudo1.classList.add('hide');
    pratica.classList.remove('hide');
    exemplos.classList.remove('hide');
    exemplo1.classList.remove('hide');
    iconeV.classList.remove('hide');
    iconeAV.classList.remove('hide');
    iconeA.classList.add('hide');
    iconeP.classList.add('hide');
    menuExemplos.classList.add('hide');
    contador = 9;
}
boxExemplo5.addEventListener("click", irParaExemplo5);
function irParaExemplo5(){
    const menuExemplos = document.querySelector('.menu-exemplos');
    const conteudo1 = document.querySelector('.titulo.one');
    const pratica = document.querySelector('.pratica');
    const exemplos = document.querySelector('.exemplos');
    const exemplo1 = document.querySelector('.exemplo5');
    const iconeV = document.querySelector('.icone.voltar');
    const iconeAV = document.querySelector('.icone.proxima');
    const iconeA = document.querySelector('.icone.anterior');
    const iconeP = document.querySelector('.icone.proximo');
    conteudo1.classList.add('hide');
    pratica.classList.remove('hide');
    exemplos.classList.remove('hide');
    exemplo1.classList.remove('hide');
    iconeV.classList.remove('hide');
    iconeAV.classList.remove('hide');
    iconeA.classList.add('hide');
    iconeP.classList.add('hide');
    menuExemplos.classList.add('hide');
    contador = 10;
}
boxExemplo6.addEventListener("click", irParaExemplo6);
function irParaExemplo6(){
    const menuExemplos = document.querySelector('.menu-exemplos');
    const conteudo1 = document.querySelector('.titulo.one');
    const pratica = document.querySelector('.pratica');
    const exemplos = document.querySelector('.exemplos');
    const exemplo1 = document.querySelector('.exemplo6');
    const iconeV = document.querySelector('.icone.voltar');
    const iconeAV = document.querySelector('.icone.proxima');
    const iconeA = document.querySelector('.icone.anterior');
    const iconeP = document.querySelector('.icone.proximo');
    conteudo1.classList.add('hide');
    pratica.classList.remove('hide');
    exemplos.classList.remove('hide');
    exemplo1.classList.remove('hide');
    iconeV.classList.remove('hide');
    iconeAV.classList.remove('hide');
    iconeA.classList.add('hide');
    iconeP.classList.add('hide');
    menuExemplos.classList.add('hide');
    contador = 11;
}
boxExemplo7.addEventListener("click", irParaExemplo7);
function irParaExemplo7(){
    const menuExemplos = document.querySelector('.menu-exemplos');
    const conteudo1 = document.querySelector('.titulo.one');
    const pratica = document.querySelector('.pratica');
    const exemplos = document.querySelector('.exemplos');
    const exemplo1 = document.querySelector('.exemplo7');
    const iconeV = document.querySelector('.icone.voltar');
    const iconeAV = document.querySelector('.icone.proxima');
    const iconeA = document.querySelector('.icone.anterior');
    const iconeP = document.querySelector('.icone.proximo');
    conteudo1.classList.add('hide');
    pratica.classList.remove('hide');
    exemplos.classList.remove('hide');
    exemplo1.classList.remove('hide');
    iconeV.classList.remove('hide');
    iconeAV.classList.remove('hide');
    iconeA.classList.add('hide');
    iconeP.classList.add('hide');
    menuExemplos.classList.add('hide');
    contador = 12;
}