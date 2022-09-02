
const entrada_text = document.getElementById('entrada-text');
const result_text = document.getElementById('text-result');

document.getElementById('btn-encriptar').addEventListener('click',btn_encriptar)
document.getElementById('btn-desencriptar').addEventListener('click',btn_desencriptar)
document.getElementById('btn-copiar').addEventListener('click',copy)

function btn_encriptar(){  
    if(entrada_text.value.length==0 || validar_minusculas(entrada_text)==true || validar_acentos(entrada_text.value)==true){
        document.getElementById('screen-error').style.display='block';
        document.getElementById('screen-result').style.display='none';
        alert("Ingrese solo letras minusculas y sin acentos")
    }
    else{
        document.getElementById('screen-result').style.display='block';
        document.getElementById('screen-error').style.display='none';
        result_text.value=encriptar(entrada_text);
        
    }
}

function btn_desencriptar(){  
    if(entrada_text.value.length==0 || validar_minusculas(entrada_text)==true || validar_acentos(entrada_text.value)==true){
        document.getElementById('screen-error').style.display='block';
        document.getElementById('screen-result').style.display='none';
        alert("Ingrese solo letras minusculas y sin acentos")
    }
    else{
        document.getElementById('screen-result').style.display='block';
        document.getElementById('screen-error').style.display='none';
        result_text.value=desencriptar(entrada_text);
        
    }
}

function validar_minusculas(text){
    if (text.value!=text.value.toLowerCase()){
       return true
    }
}

var no_aceptadas=[225,233, 137, 243, 252, 250,228,226,224,235,239,236,246,242,251] //áéíóú
function validar_acentos(x)
{    var vale=0
    for (i=0; i<x.length; i++)
    {    var car = x.charCodeAt(i)
        for (j=0; j<no_aceptadas.length; j++)
        {    if ( car == no_aceptadas[j] ) { vale++; break }
        }
        if(vale>0){
            return true
        }
    }
    console.log(car)
} 

function encriptar(x){
    var mensaje=x.value;
    var mensaje_encriptado = mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("o","ober").replaceAll("a","ai").replaceAll("u","ufat");
    return mensaje_encriptado
}

function desencriptar(x){
    var mensaje_encriptado=x.value;
    var mensaje_desencriptado = mensaje_encriptado.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ai","a").replaceAll("ufat","u");
    return mensaje_desencriptado
}

function copy(){
    var contenido = document.querySelector("#text-result");
    contenido.select();
    document.execCommand("copy");
}