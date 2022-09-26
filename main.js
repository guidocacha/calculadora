let entrada = [];
let entradaString = '';
let operandos;

const igual = document.querySelector(".igual");
const botones = document.querySelectorAll(".boton");
const ac = document.querySelector(".ac");
const display = document.querySelector(".resultado");


// carga el array de entrada
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        entrada.push(boton.value);
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
                console.log(factorial(parseInt(operandos[0])));
                display.innerHTML = `<p>${operandos[0]}! = ${factorial(parseInt(operandos[0]))}</p>`;
                break;
            case " x^2 ":
                let factor1 = parseInt(operandos[0]);
                console.log(Math.pow(factor1, 2));
                display.innerHTML = `<p>${operandos[0]}<sup>2</sup> = ${Math.pow(factor1, 2)}</p>`;
                break;
            case " x^-2 ":
                console.log(Math.sqrt(parseInt(operandos[0])))
                display.innerHTML = `<p>√${operandos[0]} = ${Math.sqrt(parseInt(operandos[0]))}</p>`;
                break;
            case " x^-n ": //me da mal la raiz 5ta de 125
                exp = 1 / operandos[0];
                console.log(Math.round(Math.pow(parseInt(operandos[2]), exp)));
                display.innerHTML = `<p><sup>${operandos[0]}</sup>√${operandos[2]} = ${Math.round(Math.pow(parseInt(operandos[2]), exp))}</p>`;               
                break;
            case " seno ":
                console.log(Math.sin(operandos[0]));
                break;
            case " coseno ":
                console.log(Math.cos(operandos[0]));
                break;
            case " tangente ":
                console.log(Math.tan(operandos[0]));
                break;
            case " x^3 ":
                let factor = parseInt(operandos[0]);
                console.log(Math.pow(factor, 3));
                break;
            case " x^-3 ":
                let factor2 = parseInt(operandos[0]);
                console.log(Math.round(Math.pow(factor2, 1 / 3)));
                break;
            case " x^n ":
                exp = operandos[2];
                console.log(Math.round(Math.pow(parseInt(operandos[0]), exp)));
                break;
            case " / ":
                console.log(parseInt(operandos[0]) / parseInt(operandos[2]));
                break;
            case " % ":
                break;
            case " ln ":
                break;
            case " * ":
                console.log(parseInt(operandos[0]) * parseInt(operandos[2]));
                break;
            case " log ":
                break;
            case " e ":
                break;
            case " - ":
                console.log(parseInt(operandos[0]) - parseInt(operandos[2]));
                break;
            case " ac ":
                break;
            case " . ":
                break;
            case "pi":
                break;
            case " + ":
                console.log(parseInt(operandos[0]) + parseInt(operandos[2]));
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