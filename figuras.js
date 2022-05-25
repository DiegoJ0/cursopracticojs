// Codigo del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4

}

// console.log("El perimetro del cuadrado es : " + perimetroCuadrado + "cm");

// const areaCuadrado= ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado

}
// console.log("El area del cuadrado es : " + areaCuadrado + "cm2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log(
// "los lados del triangulo miden : "
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm" 
// );
// const alturaTriangulo = 5.5;
// console.log("la altura del triangulo es de : " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base ;
}
// console.log("el perimetro del triangulo es de : " + perimetroTriangulo + "cm");

function areaTriangulo(altura, base) {
    return (base * altura) / 2 ;
}

console.log("el area del triangulo es de : " + areaTriangulo + "cm^2");

function alturaTrianguloIso(lado, base) {
    return (base * altura) / 2 ;
}
console.groupEnd();

// Codigo del circulo
console.group("circulos")

// //Radio
// const radioCirculo=4
// console.log("el radio del circulo es de : " + radioCirculo + "cm");

// //Diametro

function diametroCirculo(radio) {
    return radio * 2;
} 

//pi

const PI =Math.PI;
console.log("pi tiene valor de  : " + PI );


// circunferencia
function perimetroCirculo(radio) {
    const diametro= diametroCirculo(radio);
    return diametro *PI;

}

//Area
function areaCirculo(radio) {
    return(radio * radio) * PI;
}


console.groupEnd()


//aqui interactuamos con el html
//CUADRADO
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado() {

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
    
}

