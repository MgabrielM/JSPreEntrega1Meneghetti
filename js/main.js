//PAGINA INDEX
function actualizar(){

    console.log("Se ha ejecutado.");

    let valor_americana = 7700;
    let valor_bbq = 8200;
    let valor_mexicana = 8500;
    let valor_tropical = 8150;
    let valor_queso = 9500;
    let valor_jalapeno = 12600;
    let valor_cordero = 11150;

    let campo_cantidad_americana = document.getElementById("cantidad-americana");
    let cantidad_americana = campo_cantidad_americana.value;
    let campo_cantidad_bbq = document.getElementById("cantidad-bbq");
    let cantidad_bbq = campo_cantidad_bbq.value;
    let campo_cantidad_mexicana = document.getElementById("cantidad-mexicana");
    let cantidad_mexicana = campo_cantidad_mexicana.value;
    let campo_cantidad_tropical = document.getElementById("cantidad-tropical");
    let cantidad_tropical = campo_cantidad_tropical.value;
    let campo_cantidad_queso = document.getElementById("cantidad-queso");
    let cantidad_queso = campo_cantidad_queso.value;
    let campo_cantidad_jalapeno = document.getElementById("cantidad-jalapeno");
    let cantidad_jalapeno = campo_cantidad_jalapeno.value;
    let campo_cantidad_cordero = document.getElementById("cantidad-cordero");
    let cantidad_cordero = campo_cantidad_cordero.value;

    //Mostrar por consola la cantidad que se ingresó en el HTML
    console.log(cantidad_americana);
    console.log(cantidad_bbq);
    console.log(cantidad_mexicana);
    console.log(cantidad_tropical);
    console.log(cantidad_queso);
    console.log(cantidad_jalapeno);
    console.log(cantidad_cordero);

    if (cantidad_americana <0 || cantidad_bbq <0 || cantidad_mexicana <0 || cantidad_tropical <0 || cantidad_queso <0 || cantidad_jalapeno <0 || cantidad_cordero <0){
        alert("El valor ingresado en la cantidad de productos no es correcto.");
        campo_cantidad_americana.value = 0;
        campo_cantidad_bbq.value = 0;
        campo_cantidad_mexicana.value = 0;
        campo_cantidad_tropical.value= 0;
        campo_cantidad_queso.value = 0;
        campo_cantidad_jalapeno.value = 0;
        campo_cantidad_cordero.value = 0;
    }else{
        let total = (valor_americana*cantidad_americana) + (valor_bbq*cantidad_bbq) + (valor_mexicana*cantidad_mexicana) +(valor_tropical*cantidad_tropical) + (valor_queso*cantidad_queso) + (valor_jalapeno*cantidad_jalapeno) + (valor_cordero*cantidad_cordero);
        let mostrar_total = document.getElementById("mostrar-total");
        mostrar_total.value = total; 
    }    
}

//PAGINA CALCULADORA DE DOS VALORES
let operacion = parseInt(prompt("Ingresa la operación que desas hacer entre dos numeros. \n1-Suma \n2-Resta \n3-Multiplicación \n4-División \n5-Repetir tu nombre por consola las cantidad que quieras."));
if (operacion != null && operacion != ""){
    if(operacion === 1 || operacion === 2 || operacion === 3 || operacion === 4 || operacion === 5){
        switch(operacion){
            case 1:
                sumar();
                break;
            case 2:
                restar();
                break;
            case 3:
                multiplicar();
                break;
            case 4:
                dividir();
                break;
            case 5:
                repetir();
                break;
            default:
                alert("Se debe elegir dentro entre el 1 y 4 según la opcion que desee.");
        }
    } else {
        alert("Los valores ingresados son incorrectos.");        
    }
} else{
    alert("Los valores ingresados son incorrectos.");
}

function sumar(){
    let numero_uno = parseInt(prompt("Ingrese el primer valor."));
    let numero_dos = parseInt(prompt("Ingrese el segundo valor."));

    let suma_total = numero_uno + numero_dos;
    alert("La suma de ambos valores es: " + suma_total);
}

function restar(){
    let numero_uno = parseInt(prompt("Ingrese el primer valor."));
    let numero_dos = parseInt(prompt("Ingrese el segundo valor."));

    let resta_total = numero_uno - numero_dos;
    alert("La resta de ambos valores es: " + resta_total);
}

function multiplicar(){
    let numero_uno = parseInt(prompt("Ingrese el primer valor."));
    let numero_dos = parseInt(prompt("Ingrese el segundo valor."));

    let multiplicar_total = numero_uno * numero_dos;
    alert("La multiplicación de ambos valores es: " + multiplicar_total);
}

function dividir(){
    let numero_uno = parseInt(prompt("Ingrese el primer valor."));
    let numero_dos = parseInt(prompt("Ingrese el segundo valor."));

    let multiplicar_total = numero_uno / numero_dos;
    alert("La división de ambos valores es: " + multiplicar_total);
}

function repetir(){
    let campo_nombre = prompt("Ingrese su nombre:");
    let cantidad_repeticion = parseInt(prompt("Ingrese la cantidad de veces que quiera que se repita"));

    for(let i = 1 ; i <= cantidad_repeticion ; i++){
        console.log(i + "-" + campo_nombre);
    }
}