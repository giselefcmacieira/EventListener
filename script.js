let contador = 0;
const iconeProximo = document.querySelector('.icone.proximo');
const iconeAnterior = document.querySelector('.icone.anterior');
console.log(iconeProximo);
console.log(iconeAnterior);
iconeProximo.addEventListener("click", passarParaProxima)
iconeAnterior.addEventListener("click", voltarParaAnterior)
function passarParaProxima (event){
    console.log(event.target);
    console.log(contador);
    if (contador === 0){//adicionar texto 1
        const texto1 = document.querySelector('.texto.one');
        const icone = document.querySelector('.icone.anterior');
        texto1.classList.remove('hide');
        icone.classList.remove('hide');
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
        const exemplos = document.querySelector('.exemplos');
        const exemplo1p = document.querySelector('.exemplo1 .p');
        const exemplo1ul = document.querySelector('.exemplo1 .ul');
        const iconeV = document.querySelector('.icone.voltar');
        const iconeAV = document.querySelector('.icone.proxima');
        const iconeA = document.querySelector('.icone.anterior');
        const iconeP = document.querySelector('.icone.proximo');
        conteudo2.classList.add('hide');
        exemplos.classList.remove('hide');
        exemplo1p.classList.remove('hide');
        exemplo1ul.classList.remove('hide');
        iconeV.classList.remove('hide');
        iconeAV.classList.remove('hide');
        iconeA.classList.add('hide');
        iconeP.classList.add('hide');
        contador++;
    }
    console.log(contador);
}
function voltarParaAnterior (event){
    if(contador === 1){//remove o texto1
        const texto1 = document.querySelector('.texto.one');
        texto1.classList.add('hide');
        contador = contador - 1;
    }else if(contador === 2){//remove o titulo2 e adiociona o titulo1
        const conteudo1 = document.querySelector('.titulo.one');
        const conteudo2 = document.querySelector('.titulo.two');
        conteudo2.classList.add('hide');
        conteudo1.classList.remove('hide');
        contador = contador - 1;
    }else if(contador === 3){
        console.log('contador igual a 3')
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
console.log(iconeAvancar);
iconeAvancar.addEventListener("click", avancarExemplo);
iconeVoltar.addEventListener("click", voltarExemplo);
function avancarExemplo (event){
    if(contador === 6){
        const exemplo1p = document.querySelector('.exemplo1 .p');
        const exemplo1ul = document.querySelector('.exemplo1 .ul');
        const exemplo2p = document.querySelector('.exemplo2 .p');
        const exemplo2ul = document.querySelector('.exemplo2 .ul');
        exemplo2p.classList.remove('hide');
        exemplo2ul.classList.remove('hide');
        exemplo1p.classList.add('hide');
        exemplo1ul.classList.add('hide');
        contador++;
    }else if(contador === 7){
        const exemplo2p = document.querySelector('.exemplo2 .p');
        const exemplo2ul = document.querySelector('.exemplo2 .ul');
        const exemplo3 = document.querySelector('.exemplo3');
        exemplo3.classList.remove('hide');
        exemplo2p.classList.add('hide');
        exemplo2ul.classList.add('hide');
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
    console.log('avança para o proximo exemplo');
}
function voltarExemplo (event){
    if(contador === 6){
        const exemplos = document.querySelector('.exemplos');
        const exemplo1p = document.querySelector('.exemplo1 .p');
        const exemplo1ul = document.querySelector('.exemplo1 .ul');
        const iconeV = document.querySelector('.icone.voltar');
        const iconeAV = document.querySelector('.icone.proxima');
        const iconeA = document.querySelector('.icone.anterior');
        const iconeP = document.querySelector('.icone.proximo');
        const conteudo2 = document.querySelector('.titulo.two');
        const texto4 = document.querySelector('.texto.four');
        exemplos.classList.add('hide');
        exemplo1p.classList.add('hide');
        exemplo1ul.classList.add('hide');
        iconeV.classList.add('hide');
        iconeAV.classList.add('hide');
        iconeA.classList.remove('hide');
        iconeP.classList.remove('hide');
        conteudo2.classList.remove('hide');
        texto4.classList.remove('hide');
        contador = contador - 1;
    }else if(contador === 7){
        const exemplo1p = document.querySelector('.exemplo1 .p');
        const exemplo1ul = document.querySelector('.exemplo1 .ul');
        const exemplo2p = document.querySelector('.exemplo2 .p');
        const exemplo2ul = document.querySelector('.exemplo2 .ul');
        exemplo2p.classList.add('hide');
        exemplo2ul.classList.add('hide');
        exemplo1p.classList.remove('hide');
        exemplo1ul.classList.remove('hide');
        contador = contador - 1;
    }else if(contador === 8){
        const exemplo2p = document.querySelector('.exemplo2 .p');
        const exemplo2ul = document.querySelector('.exemplo2 .ul');
        const exemplo3 = document.querySelector('.exemplo3');
        exemplo3.classList.add('hide');
        exemplo2p.classList.remove('hide');
        exemplo2ul.classList.remove('hide');
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
    console.log('volta para o exemplo anterior');
}


