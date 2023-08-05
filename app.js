//Variable que almacena los 2 numeros de suma
var num1, num2;
//Variable para guardar datos
var sum;
//Variable donde se almacena la respuesta 
var optCorrecta;

//Elementos que se manipulan de la pagina
var text_suma = document.getElementById("suma");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");

var text_msj = document.getElementById("msj");
var text_result = document.getElementById("result");

function playStar() {
    //Cada que inicie limpio los campos
    text_result.innerHTML = "?";
    text_msj.innerHTML = "";

    //Generar la suma aleatoria entre 0 y 9
    num1 = Math.round(Math.random()*9);
    num2 = Math.round(Math.random()*9);

    sum = num1 + num2;

    //Signacion de la suma
    text_suma.innerHTML = num1 + " + " + num2 + " = ";

    //Generar numero entre 0 y 2 para colocar la opt corresta
    optCorrecta = Math.round(Math.random()*2);

    if (optCorrecta == 0) {
        opt1.innerHTML = sum;

        opt2.innerHTML = sum + 1;
        opt3.innerHTML = sum - 1;
    }
    if (optCorrecta == 1) {
        opt2.innerHTML = sum;

        opt1.innerHTML = sum + 1;
        opt3.innerHTML = sum - 1;
    } 
    if (optCorrecta == 2 ) {
        
        opt3.innerHTML = sum;
    
        opt2.innerHTML = sum + 1;
        opt1.innerHTML = sum - 1;
    }
}

function controlResponse(selectOpt) {
    text_result.innerHTML = selectOpt.innerHTML;

    if (sum  == selectOpt.innerHTML) {
        text_msj.innerHTML = "Genial!!"
        text_msj.style.color = "#108f10";
        text_msj.classList.add('msj_opt');

        setTimeout(playStar, 2000);
    }else{
        text_msj.innerHTML = "Intenta otra vez";
        text_msj.style.color = "#f72020";
        text_msj.classList.add('msj_opt');

        setTimeout(clean, 2000);
    }
}

function clean() {
    text_result.innerHTML = "?";
    text_msj.innerHTML = "";
}

playStar();
