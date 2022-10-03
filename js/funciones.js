function convertir(){
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 291;
    let euro = 310;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Pesos a Dolares es: $" + resultado);
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de Pesos a Euro es: $"+ resultado);
    }

    else{
        alert("Tenes que completar todos los campos");
    }
}