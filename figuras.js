
//Codigo del cuadrado
console.group("cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm")

const perimetroCuadrado = (lado) => 4 * lado;

console.log("El perimetro del cuadrado mide: "+perimetroCuadrado(ladoCuadrado)+"cm")

const areaCuadrado = (lado) => lado * lado;

console.log("El area del cuadrado mide: "+areaCuadrado(ladoCuadrado)+"cm2")
console.groupEnd()



//Codigo del triangulo
console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: "+ladoTriangulo1+","+ladoTriangulo2+"cm")
console.log("La base del triangulo mide: "+baseTriangulo+"cm")

const perimetroTriangulo = (lado1,lado2,base) => lado1 + lado2 + base;
console.log("El perimetro del triangulo mide: "+perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo)+"cm")

const areaTriangulo = (altura,base) => (altura * base) / 2;
console.log("El area del triangulo mide: "+areaTriangulo(alturaTriangulo,baseTriangulo)+"cm2")
console.groupEnd()




//Codigo del circulo
console.group("Circulo")
const radioCirculo = 4;
console.log("El radio del circulo mide: "+radioCirculo+"cm")

const diametroCirculo = (radio) => radio * 2;
console.log("El diametro del triangulo mide: "+diametroCirculo(radioCirculo)+"cm")

//const PI = 3.1416;
const PI = Math.PI;

const perimetroCirculo = (radio) =>  diametroCirculo(radio) * PI;

console.log("El perimetro del circulo mide: "+perimetroCirculo(radioCirculo)+"cm")

const areaCirculo = (radio) => (radio * radio) * PI;
console.log("El area del circulo mide: "+areaCirculo(radioCirculo)+"cm2")
console.groupEnd()



//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value

    const result = perimetroCuadrado(value)
    alert("El perimetro del triangulo mide: "+result+"cm")
}

function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value

    const result = areaCuadrado(value)
    alert("El area del triangulo mide: "+result+"cm")
}

function calcularPerimetroCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value

    const result = perimetroCirculo(value)
    alert("El perimetro del circulo mide: "+result+"cm")
}

function calcularAreaCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value

    const result = areaCirculo(value)
    alert("El area del circulo mide: "+result+"cm")
}


function calcularPerimetroTriangulo(){
    let input = document.getElementById('baseTriangulo');
    const base = parseInt(input.value)

    input = document.getElementById('ladoDerechoTriangulo');
    const ladoDerecho = parseInt(input.value)

    input = document.getElementById('ladoIzquierdoTriangulo');
    const ladoIzquierdo = parseInt(input.value)

    const result = perimetroTriangulo(ladoDerecho,ladoIzquierdo,base)
    alert("El perimetro del triangulo mide: "+result+"cm")
}

function calcularAreaTriangulo(){
    let input = document.getElementById('baseTriangulo');
    const base = input.value

    input = document.getElementById('alturaTriangulo');
    const altura = input.value

    console.log(base)
    console.log(altura)

    const result = areaTriangulo(altura,base)
    alert("El area del triangulo mide: "+result+"cm")
}