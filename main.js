let entrada = [];
let entradaString = '';
let operandos = [];


// rutas
const igual = document.querySelector(".igual");
const botones = document.querySelectorAll(".boton");
const ac = document.querySelector(".ac");
const display = document.querySelector(".resultado");
const hint1 = document.querySelector(".hint1");
const hint2 = document.querySelector(".hint2");
const hint3 = document.querySelector(".hint3");
const hint4 = document.querySelector(".hint4");
const raizEne = document.querySelector(".raiz-ene");
const porciento = document.querySelector(".porcentaje");
const numeroE = document.querySelector(".numero-e");
const pi = document.querySelector(".pi");
const memoria = document.querySelector(".memoria");
const listaMemo = document.querySelector(".lista-memo");
const memory = document.querySelector(".memory");
const clearMemo = document.querySelector(".clear-memo");


// carga el array de entrada
let mostrar = "";
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        entrada.push(boton.value);
        entrada.forEach(elem => {
            mostrar += elem;
            display.innerHTML = `<p>${mostrar}</p>`;
        })
        mostrar = "";
    })
})


// click en igual
igual.addEventListener("click", () => {
    operandos = entrada.join('').split(" ");
    resultado();
    entrada = [];    //vacío el array de entrada
    mostrar = "";
});

//hacer la cuenta y mostrar en display
const resultado = () => {
    operandos.forEach(caracter => {
        switch (caracter) {
            case "(":
                combinado();
                console.log(operandos);
                break;
            case ")":
                break;
            case "x!":
                console.log(factorial(parseFloat(operandos[0])));
                display.innerHTML = `<p>${operandos[0]}! = ${factorial(parseFloat(operandos[0]))}</p>`;
                break;
            case "x^2":
                let factor1 = parseFloat(operandos[0]);
                console.log(Math.pow(factor1, 2));
                display.innerHTML = `<p>${operandos[0]}<sup>2</sup> = ${Math.pow(factor1, 2)}</p>`;
                break;
            case "x^-2":
                if (operandos[0] > 0) {
                    console.log(Math.sqrt(parseFloat(operandos[0])))
                    display.innerHTML = `<p>√${operandos[0]} = ${Math.sqrt(parseFloat(operandos[0]))}</p>`;
                } else {
                    display.innerHTML = `<sup>No se puede calcular la raíz cuadrada de un número negativo</sup>`;
                }
                break;
            case "x^-n": {
                exp = 1 / operandos[0];
                console.log(exp)
                console.log(Math.pow(parseFloat(operandos[2]), exp));
                display.innerHTML = `<p><sup>${operandos[0]}</sup>√${operandos[2]} = ${Math.pow(parseFloat(operandos[2]), exp).toFixed(6)}</p>`;
            }
                break;
            case "seno":
                display.innerHTML = `<p>seno de ${operandos[0]} = ${Math.sin(operandos[0]).toFixed(6)}</p>`;
                console.log(Math.sin(operandos[0]));
                break;
            case "coseno":
                display.innerHTML = `<p>coseno de ${operandos[0]} = ${Math.cos(operandos[0]).toFixed(6)}</p>`;
                console.log(Math.cos(operandos[0]));
                break;
            case "tangente":
                display.innerHTML = `<p>tang de ${operandos[0]} = ${Math.tan(operandos[0]).toFixed(6)}</p>`;
                console.log(Math.tan(operandos[0]));
                break;
            case "x^3":
                let factor = parseFloat(operandos[0]);
                display.innerHTML = `<p>${operandos[0]}<sup>3</sup> = ${Math.pow(factor, 3)}</p>`;
                console.log(Math.pow(factor, 3));
                break;
            case "x^-3":
                let factor2 = parseFloat(operandos[0]);
                display.innerHTML = `<p><sup>3</sup>√${operandos[0]} = ${Math.pow(factor2, 1 / 3).toFixed(6)}</p>`;
                console.log(Math.round(Math.pow(factor2, 1 / 3)));
                break;
            case "x^n":
                exp = operandos[2];
                display.innerHTML = `<p>${operandos[0]}<sup>${exp}</sup> = ${Math.pow(parseFloat(operandos[0]), exp).toFixed(0)}</p>`
                console.log(Math.round(Math.pow(parseFloat(operandos[0]), exp)));
                break;
            case "/":
                display.innerHTML = `<p>${operandos[0]} / ${operandos[2]} = ${(operandos[0] / operandos[2]).toFixed(6)}</p>`
                console.log(parseFloat(operandos[0]) / parseFloat(operandos[2]));
                break;
            case "%":
                display.innerHTML = `<p>el ${operandos[0]}% de ${operandos[2]} es ${operandos[0] / 100 * operandos[2]}</p>`
                break;
            case "ln":
                if (parseFloat(operandos[0]) >= 0) {
                    display.innerHTML = `<p>ln (${operandos[0]}) = ${Math.log(operandos[0]).toFixed(6)}</p>`;
                } else {
                    display.innerHTML = `<sup>No existe el logaritmo de un número negativo</sup>`
                }
                break;
            case "*":
                display.innerHTML = `<p>${operandos[0]} x ${operandos[2]} = ${(parseFloat(operandos[0]) * parseFloat(operandos[2])).toFixed(6)}</p>`
                console.log(parseFloat(operandos[0]) * parseFloat(operandos[2]));
                break;
            case "log":
                if (parseFloat(operandos[0]) >= 0) {
                    display.innerHTML = `<p>log (${operandos[0]}) = ${Math.log10(operandos[0]).toFixed(6)}</p>`;
                } else {
                    display.innerHTML = `<sup>No existe el logaritmo de un número negativo</sup>`
                }
                break;
            case "e":
                //tiene un value asociado
                break;
            case "-":
                display.innerHTML = `<p>${operandos[0]} - ${operandos[2]} = ${parseFloat(operandos[0]) - parseFloat(operandos[2])}</p>`
                console.log(parseFloat(operandos[0]) - parseFloat(operandos[2]));
                break;
            case "ac":
                // tiene un evento asociado
                break;
            case "pi":
                //tiene un value asociado
                break;
            case "+":
                display.innerHTML = `<p>${operandos[0]} + ${operandos[2]} = ${parseFloat(operandos[0]) + parseFloat(operandos[2])}</p>`
                console.log(parseFloat(operandos[0]) + parseFloat(operandos[2]));
                break;
            case " memo ":
                //tiene un evento asociado
                break;
        }
    });
}

//click en AC
ac.addEventListener("click", () => {
    entrada = [];
    display.innerHTML = '';
    mostrar = "";
})

//factorial
const factorial = num => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}



//ayuda en algunas operaciones (hints)
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
giveHint(numeroE, hint3);
giveHint(pi, hint4);


// Memoria
let arrayMemo = [];
let li;
memoria.addEventListener("click", () => {
    memory.classList.remove("transparente");
    clearMemo.textContent = "Clear memory";
    if (display.innerHTML === "") {
        li = document.createElement("li");
        li.innerHTML = `Nada en el display para agregar en memoria`;
        listaMemo.appendChild(li);
    } else {
        li = document.createElement("li");
        li.innerHTML = display.innerHTML;
        listaMemo.appendChild(li);
    }
})
clearMemo.addEventListener("click", () => {
    if (listaMemo.innerHTML === "") {
        memory.classList.add("transparente");
        clearMemo.textContent = "Clear memory";
    } else {
        listaMemo.innerHTML = "";
        clearMemo.textContent = "Cerrar";
    }
})


//hacer que se tomen los numeros ingresados por teclado
function teclado(elEvento) {          // copy paste
    let evento = elEvento || window.event;
    let k = evento.keyCode; //número de código de la tecla.
    switch (k) {
        // teclado numérico
        case 96:
            entrada.push(0);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 97:
            entrada.push(1);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 98:
            entrada.push(2);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 99:
            entrada.push(3);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 100:
            entrada.push(4);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 101:
            entrada.push(5);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 102:
            entrada.push(6);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 103:
            entrada.push(7);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 104:
            entrada.push(8);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 105:
            entrada.push(9);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 110:
            entrada.push(".");
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 190:
            entrada.push(".");
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 106:
            entrada.push(" * ");
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 107:
            entrada.push(" + ");
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 109:
            entrada.push(" - ");
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 111:
            entrada.push(" / ");
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        // teclado alfanumérico
        case 48:
            entrada.push(0);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 49:
            entrada.push(1);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 50:
            entrada.push(2);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 51:
            entrada.push(3);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 52:
            entrada.push(4);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 53:
            entrada.push(5);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 54:
            entrada.push(6);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 55:
            entrada.push(7);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 56:
            entrada.push(8);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 57:
            entrada.push(9);
            mostrar += entrada[entrada.length - 1];
            display.innerHTML = `<p>${mostrar}</p>`;
            break;
        case 13:
            entradaString = entrada.join('');    //convierto el arreglo de entrada a string
            operandos = entradaString.split(" ");  //divido por el caracter "espacio" --> aray
            resultado();
            entrada = [];    //vacío el array de entrada
            mostrar = "";
            break;
    }
}
window.onload = function () {
    display.innerHTML = '';
    mostrar = "";
    document.onkeydown = teclado;  //llamo a la función declarada arriba 
}

//toast de bootstrap
let toastTrigger = document.getElementById('liveToastBtn')
let toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {     //no sé por qué hace el if
    window.addEventListener("load", () => {
        let toast = new bootstrap.Toast(toastLiveExample)
        toast.show();
    })
}


// operaciones combinadas 
//(·9·+·3·)·+·5 =

const combinado = () => {
    let insideParentesis = [];
    let result = 0;
    let i = operandos.indexOf("(") + 1;
    if (operandos.indexOf(")") !== -1) {
        for (; i < operandos.indexOf(")"); i++) {
            insideParentesis.push(operandos[i])
        }
        let cuenta = insideParentesis[1];
        switch (cuenta) {
            case "x!":
                result = factorial(parseFloat(insideParentesis[0]));
                break;
            case "x^2":
                let factor1 = parseFloat(insideParentesis[0]);
                result = Math.pow(factor1, 2);
                break;
            case "x^-2":
                if (insideParentesis[0] > 0) {
                    result = Math.sqrt(parseFloat(insideParentesis[0]));
                } else {
                    result = `<sup>No se puede calcular la raíz cuadrada de un número negativo</sup>`;
                }
                break;
            case "x^-n":
                exp = 1 / insideParentesis[0];
                result = Math.pow(parseFloat(insideParentesis[2]), exp).toFixed(6);
                break;
            case "seno":
                result = Math.sin(insideParentesis[0]).toFixed(6);
                break;
            case "coseno":
                result = Math.cos(insideParentesis[0]).toFixed(6);
                break;
            case "tangente":
                result = Math.tan(insideParentesis[0]).toFixed(6);
                break;
            case "x^3":
                let factor = parseFloat(insideParentesis[0]);
                result = Math.pow(factor, 3);
                break;
            case "x^-3":
                let factor2 = parseFloat(insideParentesis[0]);
                result = Math.pow(factor2, 1 / 3).toFixed(6);
                break;
            case "x^n":
                exp = insideParentesis[2];
                result = Math.pow(parseFloat(insideParentesis[0]), exp).toFixed(0);
                break;
            case "/":
                result = (insideParentesis[0] / insideParentesis[2]).toFixed(6);
                break;
            case "%":
                result = insideParentesis[0] / 100 * insideParentesis[2];
                break;
            case "ln":
                if (parseFloat(insideParentesis[0]) >= 0) {
                    result = Math.log(insideParentesis[0]).toFixed(6);
                } else {
                    result = `<sup>No existe el logaritmo de un número negativo</sup>`
                }
                break;
            case "*":
                result = (parseFloat(insideParentesis[0]) * parseFloat(insideParentesis[2])).toFixed(6);
                break;
            case "log":
                if (parseFloat(insideParentesis[0]) >= 0) {
                    result = Math.log10(insideParentesis[0]).toFixed(6);
                } else {
                    result = `<sup>No existe el logaritmo de un número negativo</sup>`
                }
                break;
            case "e":
                //tiene un value asociado
                break;
            case "-":
                result = parseFloat(insideParentesis[0]) - parseFloat(insideParentesis[2]);
                break;
            case "ac":
                // tiene un evento asociado
                break;
            case "pi":
                //tiene un value asociado
                break;
            case "+":
                result = parseFloat(insideParentesis[0]) + parseFloat(insideParentesis[2]);
                break;
            case " memo ":
                //tiene un evento asociado
                break;
        }
        let indice = operandos.indexOf(")") - operandos.indexOf("(");
        operandos.splice(operandos.indexOf("("), indice + 1, result);
        resultado();
        // return result;
    }
}



