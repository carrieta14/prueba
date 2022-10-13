function Autos() {
    let cantidad_autos = 0;
    cantidad_autos = parseInt(prompt("Ingrese la cantidad de autos"))
    let placa;
    let contador1 = 0;
    let contador2 = 0;
    let contador3 = 0;
    let contador4 = 0;
    let contador5 = 0;
    let contador = 0;
    let aux;
    while (cantidad_autos !== contador) {
        placa = prompt("Ingrese la placa del auto")
        aux = placa.substring(placa.length - 1, placa.length)
        if (aux == "1" || aux == "2") {
            contador1++
        } else if (aux == "3" || aux == "4") {
            contador2++
        } else if (aux == "5" || aux == "6") {
            contador3++
        } else if (aux == "7" || aux == "8") {
            contador4++
        } else if (aux == "9" || aux == "0") {
            contador5++
        }
        contador++
    }
    document.write("Amarillos: " + contador1 + "\n");
    document.writeln("Rosas: " + contador2 + "\n");
    document.writeln("Rojos: " + contador3 + "\n");
    document.writeln("Verdes: " + contador4 + "\n");
    document.writeln("Azules: " + contador5 + "\n");
    document.writeln("Total de autos: " + contador);
}

function zoo() {
    x = 0;
    n = 0;
    total = 0;
    edad = 0;
    categoria1 = 0;
    categoria2 = 0;
    categoria3 = 0;
    let animal;
    n = prompt("Elige 1-3 según el tipo de animal" + "\n1- Elefantes" + "\n2- Jirafas" + "\n2- Chimpances")
    if (n > 0 && n < 4) {
        if (n == 1) {
            animal = n;
            total = 20;
        } else if (true) {

        }

    }
}