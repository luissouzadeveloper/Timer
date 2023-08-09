let iniciar = document.querySelector('.start-btn');
let pausar = document.querySelector('.pause-btn');
let parar = document.querySelector('.stop-btn');

let intervalo;

let segundos = 0;
let minutos = 0;
let horas = 0;

function doisDigitos(digito){
    if (digito < 10) {
        return('0' + digito);
    } else {
        return(digito)
    }
}

iniciar.addEventListener('click', function(){
    contador()
    intervalo = setInterval(contador, 1000)
});

pausar.addEventListener('click', function(){
    clearInterval(intervalo)
});

parar.addEventListener('click', function(){
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    document.querySelector('#cronometro').innerHTML = `<p>00:00:00</p>`
});

function contador(){
    segundos++

    if (segundos === 60) {
        minutos++;
        segundos = 0;

        if(minutos === 60){
            minutos = 0
            horas++
        }
    }
    document.querySelector('#cronometro').innerHTML = `${doisDigitos(horas)}:${doisDigitos(minutos)}:${doisDigitos(segundos)}`
}
