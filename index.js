function convertir() {
    let metros = parseFloat(document.getElementById("metros").value);
    
    if (isNaN(metros) || metros < 0) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido.";
        return;
    }

    let centimetros = metros * 100;
    let milimetros = metros * 1000;

    document.getElementById("resultado").innerHTML = 
        `${metros} metros son ${centimetros} centímetros y ${milimetros} milímetros.`;
}
