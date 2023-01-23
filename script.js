const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

/**
 * The function btnLimpiar() takes the value of the textArea and passes it to the function encriptar()
 * which returns a value that is then assigned to the value of the mensaje textarea. The textArea is
 * then cleared and the background image of the mensaje textarea is set to nothing.
 */
function btnLimpiar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    // textArea.value = "";
    mensaje.value = "";
    mensaje.style.backgroundImage = "";
}

/**
 * It creates a textarea element, sets its value to the texto argument, selects it, copies it, and then
 * removes it from the DOM
 * @param texto - The text to be copied to the clipboard.
 */
function copiarAlPortapapeles(texto) {
    /* Checking if the texto is a string. If it is not, it will throw an error. */
    if (typeof texto != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres')
    }

    let areaTexto = document.createElement('textarea');
    areaTexto.value = texto;
    areaTexto.style.position = 'absolute';
    areaTexto.style.left = '-9999px';

    document.body.appendChild(areaTexto);

    let seleccionado = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;

    areaTexto.select();

    document.execCommand('copy');

    document.body.removeChild(areaTexto);

    if (seleccionado) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(seleccionado)
    }
}


/** Adding an event listener to the button with the id of "copiar" and when it is clicked, it will copy
the value of the textarea with the id of "mensaje" to the clipboard. */
window.onload = function () {
    document.getElementById('copiar').addEventListener('click', () =>{
        let contenido = document.getElementById('mensaje').value;

        copiarAlPortapapeles(contenido)
    })
}

/**
 * It's a function that adds an event listener to the element with the class name "copiar" and when the
 * element is clicked, it gets the value of the element with the class name "copiar" and stores it in
 * the variable "contenido".
 */
function btnCopiar() {
    document.getElementsByClassName("copiar").addEventListener('click', () => {
        let contenido = document.getElementsByClassName('copiar').value;
        mensaje.value = "";
    })
}

/**
 * The function btnEncriptar() takes the value of the textArea and passes it to the function
 * encriptar() which returns a value that is then assigned to the variable textoEncriptado. The value
 * of textoEncriptado is then assigned to the value of the mensaje textarea. The value of the textArea
 * is then set to an empty string and the background image of the mensaje textarea is set to none.
 */
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

/**
 * It takes a string and replaces all the vowels with their corresponding code.
 * @param stringEncriptado - The string that will be encrypted.
 * @returns The string that was passed in, but with the vowels replaced with the values in the array.
 */
function encriptar(stringEncriptado) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}



/**
 * It takes a string, converts it to lowercase, and then replaces all instances of the second element
 * in each array with the first element in each array.
 */
function btnDesencriptar() {
    const textoEncriptado = desencriptar(mensaje.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function btnDesencriptar2() {
    const textoEncriptado = desencriptar(textArea.value)
    textArea.value = textoEncriptado
    // textArea.value = "";
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}