const perimSquare = (side) => side * 4;
const areaSquare = (side) => side * side;

// Funciones Con Dom

function calculateperimSquare(){
    let sideImput = document.getElementById('sideImput');
    let value = Number(sideImput.value);

    const result = `El resultado de calcular el Perímetro de un cuadrado es: ${perimSquare(value)} cm`;
    document.getElementById('result').innerText = result;

}

function calcularAreaSquare(){
    
    let sideImput = document.getElementById('sideImput');
    let value = Number(sideImput.value);

    const result = `El resultado de calcular el área de un Cuadrado es ${areaSquare(value)} cm`;
    document.getElementById('result').innerText = result;
}

// Perimetro y area de un triangulo

const perimTriangle = (side1, side2, base) => side1 + side2 + base;
const areaTriangle = (base, altura) => (base * altura) /2;

// Funcion del boton con DOM

function calculetePerimTriangle(){
    let side1 = document.getElementById('inputSide1');
    let side2 = document.getElementById('inputSide2');
    let side3 = document.getElementById('inputSide3');
    side1 = Number(side1.value);
    side2 = Number(side2.value);
    side3 = Number(side3.value);
    
    const result = `El perímetro de Triangulo es: ${perimTriangle(side1, side2, side3)} cm`;
    document.getElementById('result').innerText = result;
}

function calculateAreaTriangle(){

    let base = document.getElementById("inputBase");
    let altura = document.getElementById('inputAltura');

    base = Number(base.value);
    altura = Number(altura.value);

    const result = `El área de este Triangulo es: ${areaTriangle(base, altura)} cm²`;
    document.getElementById('result').innerText = result
}

// Operacion Diametro, Perimetro y Area

const diameCircle = (radio) => radio * 2;
const perimCircle = (radio) => diameCircle(radio) * Math.PI;
const areaCircle = (radio) => (radio * radio) * Math.PI;

// Funcion del Boton con el DOM

function CalculateDiameterCircle(){

    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);

    const result = `El Diámetro para este Circulo es: ${diameCircle(radio)} cm`;
    document.getElementById('result').innerText = result;

}

function CalculatePerimeterCircle(){

    let radio = document.getElementById('inputRadio');
    radio = Number(inputRadio.value);

    const result = `El Perímetro para este Circulo es: ${perimCircle(radio)} cm`;
    document.getElementById('result').innerText = result;

}

function CalculateareaCircle(){

    let radio = document.getElementById('inputRadio');
    radio = Number(inputRadio.value);

    const result = `El área para este circulo es: ${areaCircle(radio)} cm²`;
    document.getElementById('result').innerText = result;
}
