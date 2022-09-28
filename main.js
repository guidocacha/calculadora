let entrada = [];
let entradaString = '';
let operandos;

// rutas
const igual = document.querySelector(".igual");
const botones = document.querySelectorAll(".boton");
const ac = document.querySelector(".ac");
const display = document.querySelector(".resultado");
const hint1 = document.querySelector(".hint1");
const hint2 = document.querySelector(".hint2");
const hint3 = document.querySelector(".hint3");
const raizEne = document.querySelector(".raiz-ene");
const porciento = document.querySelector(".porcentaje");
const numeroE = document.querySelector(".numero-e");



// carga el array de entrada
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        entrada.push(boton.value);
        entrada.forEach(elem => {
            let mostrar = "";
            mostrar += elem;
            display.innerHTML = `<p>${mostrar}</p>`;

        })
    })
})


// click en igual
igual.addEventListener("click", () => {
    entradaString = entrada.join('');    //convierto el arreglo de entrada a string
    operandos = entradaString.split(" ");  //divido por el caracter no numérico -->aray
    resultado();
    entrada = [];    //vacío el array de entrada
});

//hacer la cuenta y mostrar en display
const resultado = () => {
    entrada.forEach(caracter => {
        switch (caracter) {
            case " ( ":
                break;
            case " ) ":
                break;
            case " x! ":
                console.log(factorial(parseFloat(operandos[0])));
                display.innerHTML = `<p>${operandos[0]}! = ${factorial(parseFloat(operandos[0]))}</p>`;
                break;
            case " x^2 ":
                let factor1 = parseFloat(operandos[0]);
                console.log(Math.pow(factor1, 2));
                display.innerHTML = `<p>${operandos[0]}<sup>2</sup> = ${Math.pow(factor1, 2)}</p>`;
                break;
            case " x^-2 ":
                console.log(Math.sqrt(parseFloat(operandos[0])))
                display.innerHTML = `<p>√${operandos[0]} = ${Math.sqrt(parseFloat(operandos[0]))}</p>`;
                break;
            case " x^-n ": //me da mal la raiz 5ta de 125
                exp = 1 / operandos[0];
                console.log(Math.round(Math.pow(parseFloat(operandos[2]), exp)));
                display.innerHTML = `<p><sup>${operandos[0]}</sup>√${operandos[2]} = ${Math.round(Math.pow(parseFloat(operandos[2]), exp))}</p>`;
                break;
            case " seno ":
                display.innerHTML = `<p>seno de ${operandos[0]} = ${Math.sin(operandos[0]).toFixed(6)}</p>`;
                console.log(Math.sin(operandos[0]));
                break;
            case " coseno ":
                display.innerHTML = `<p>coseno de ${operandos[0]} = ${Math.cos(operandos[0]).toFixed(6)}</p>`;
                console.log(Math.cos(operandos[0]));
                break;
            case " tangente ":
                display.innerHTML = `<p>tang de ${operandos[0]} = ${Math.tan(operandos[0]).toFixed(6)}</p>`;
                console.log(Math.tan(operandos[0]));
                break;
            case " x^3 ":
                let factor = parseFloat(operandos[0]);
                display.innerHTML = `<p>${operandos[0]}<sup>3</sup> = ${Math.pow(factor, 3)}</p>`;
                console.log(Math.pow(factor, 3));
                break;
            case " x^-3 ":
                let factor2 = parseFloat(operandos[0]);
                display.innerHTML = `<p><sup>3</sup>√${operandos[0]} = ${Math.pow(factor2, 1 / 3).toFixed(6)}</p>`;
                console.log(Math.round(Math.pow(factor2, 1 / 3)));
                break;
            case " x^n ":
                exp = operandos[2];
                display.innerHTML = `<p>${operandos[0]}<sup>${exp}</sup> = ${Math.pow(parseFloat(operandos[0]), exp).toFixed(0)}</p>`
                console.log(Math.round(Math.pow(parseFloat(operandos[0]), exp)));
                break;
            case " / ":
                display.innerHTML = `<p>${operandos[0]} / ${operandos[2]} = ${(operandos[0] / operandos[2]).toFixed(6)}</p>`
                console.log(parseFloat(operandos[0]) / parseFloat(operandos[2]));
                break;
            case " % ":
                display.innerHTML = `<p>el ${operandos[0]}% de ${operandos[2]} es ${operandos[0] / 100 * operandos[2]}</p>`
                break;
            case " ln ":
                break;
            case " * ":
                display.innerHTML = `<p>${operandos[0]} x ${operandos[2]} = ${parseFloat(operandos[0]) * parseFloat(operandos[2])}</p>`
                console.log(parseFloat(operandos[0]) * parseFloat(operandos[2]));
                break;
            case " log ":
                break;
            case " e ":
                //tiene un value asociado
                break;
            case " - ":
                display.innerHTML = `<p>${operandos[0]} - ${operandos[2]} = ${parseFloat(operandos[0]) - parseFloat(operandos[2])}</p>`
                console.log(parseFloat(operandos[0]) - parseFloat(operandos[2]));
                break;
            case " ac ":
                // tiene un evento asociado
                break;
            case "pi":
                //tiene un value asociado
                break;
            case " + ":
                display.innerHTML = `<p>${operandos[0]} + ${operandos[2]} = ${parseFloat(operandos[0]) + parseFloat(operandos[2])}</p>`
                console.log(parseFloat(operandos[0]) + parseFloat(operandos[2]));
                break;
            case " memo ":
                break;
        }
    });
}

//click en AC
ac.addEventListener("click", () => {
    entrada = [];
    display.innerHTML = '';
})

//factorial
const factorial = num => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};


//ayuda en algunas operaciones
//-- f
const giveHint = (domElement, hint) => {
    domElement.addEventListener("mouseover", () => {
        hint.classList.remove("transparente");
    })
    domElement.addEventListener("mouseout", () => {
        hint.classList.add("transparente");
    })
}
giveHint(raizEne, hint1);
giveHint(porciento, hint2);
giveHint(numeroE, hint3)


//hacer que se tomen los numeros ingresados por teclado
function teclado(elEvento) {          // copy paste
    let evento = elEvento || window.event;
    let k = evento.keyCode; //número de código de la tecla.
    switch (k) {
        // teclado numérico
        case 96:
            entrada.push(0);
            break;
        case 97:
            entrada.push(1);
            break;
        case 98:
            entrada.push(2);
            break;
        case 99:
            entrada.push(3);
            break;
        case 100:
            entrada.push(4);
            break;
        case 101:
            entrada.push(5);
            break;
        case 102:
            entrada.push(6);
            break;
        case 103:
            entrada.push(7);
            break;
        case 104:
            entrada.push(8);
            break;
        case 105:
            entrada.push(9);
            break;
        case 110:
            entrada.push(".");
            break;
        case 190:
            entrada.push(".");
            break;
        case 106:
            entrada.push(" * ");
            break;
        case 107:
            entrada.push(" + ");
            break;
        case 109:
            entrada.push(" - ");
            break;
        case 111:
            entrada.push(" / ");
            break;
        // teclado alfanumérico
        case 48:
            entrada.push(0);
            break;
        case 49:
            entrada.push(1);
            break;
        case 50:
            entrada.push(2);
            break;
        case 51:
            entrada.push(3);
            break;
        case 52:
            entrada.push(4);
            break;
        case 53:
            entrada.push(5);
            break;
        case 54:
            entrada.push(6);
            break;
        case 55:
            entrada.push(7);
            break;
        case 56:
            entrada.push(8);
            break;
        case 57:
            entrada.push(9);
            break;
        case 13:
            entradaString = entrada.join('');    //convierto el arreglo de entrada a string
            operandos = entradaString.split(" ");  //divido por el caracter no numérico -->aray
            resultado();
            entrada = [];    //vacío el array de entrada
            break;
    }
}
window.onload = function () {
    document.onkeydown = teclado;
}

//toast de bootstrap
let toastTrigger = document.getElementById('liveToastBtn')
let toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {     //no sé por qué hace el if
window.addEventListener("load", () => {
    let toast = new bootstrap.Toast(toastLiveExample)
    toast.show();
})}

