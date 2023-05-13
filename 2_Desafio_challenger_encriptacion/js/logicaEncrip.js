const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const accionResult = document.getElementById('accionResult');

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style. backgroundImage = "none";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function encriptar(stringEncriptar){

    document.getElementById("accionResult").innerHTML = "";
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    accionResult.innerHTML = 'Encriptado!';
        if(stringEncriptar.length == ''){
            accionResult.innerHTML = 'Ningun mensaje fue encontrado para Encriptar!';
            stringEncriptar.focus();
            return stringEncriptar;
        } 
        return stringEncriptar;

}

function desencriptar(stringDesencriptar){

    document.getElementById("accionResult").innerHTML = "";
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }
    accionResult.innerHTML = 'Desencriptado!';
    if(stringDesencriptar.length == ''){
        accionResult.innerHTML = 'Ningun mensaje fue encontrado para Desencriptar!';
        stringDesencriptar.focus();
        return stringDesencriptar;
    }
    return stringDesencriptar;
}

function copiarTexto(){
    document.getElementById("accionResult").innerHTML = "";
    let contenido = document.getElementById('textArea');
        contenido.select();
        contenido.setSelectionRange(0,99999);
        document.execCommand('copy');
        if (contenido.value == '') {
            accionResult.innerHTML = 'Ningun mensaje fue copiado!';
        } else {
            accionResult.innerHTML = 'copiado!';
        }
}

function limpiarTexto() {
    document.getElementById("textArea").value = "";
    window.location.reload();
}


