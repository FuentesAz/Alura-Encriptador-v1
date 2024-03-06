const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector("#text-area-incriptado");


function eliminarElementos(){
    document.getElementById("mensaje-titulo").remove();
    document.getElementById("mensaje-texto").remove();
    document.getElementById("img-encriptar").remove();
}


function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"],["o","ober"],["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.display = "block";
    document.querySelector(".btn-copiar").style.display = "block";

    eliminarElementos();   
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function copiarTexto(){
    let areaTexto = document.getElementById("text-area-incriptado");

    areaTexto.select();
    document.execCommand("copy")
    areaTexto.setSelectionRange(0, 0);
}
