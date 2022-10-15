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
        } else if (n == 2) {
            animal = n;
            total = 15;
        } else {
            animal = n;
            total = 40;
        }
    }
    for (x = 0; x == total; x++) {
        edad = prompt("Ingrese la edad")
        if (edad >= 0 && edad <= 1) {
            categoria1++;
        } else if (edad < 3) {
            categoria2++;
        } else {
            categoria3++;
        }
    }
}

function obesidad() {
    
 
    let peso_anterior;
    let peso = 0;
    let suma = 0;

   

    for (let x = 1; x <= 5; x++) {


        peso_anterior = parseInt(prompt("Persona #" + x + "\nIngresa el peso anterior"))

        for (let a = 1; a <= 10; a++) {
            peso = parseInt(prompt("Ingresa el peso #" + a))
            suma = suma + peso;
        }
        if (suma / 10 == peso_anterior) {
            document.writeln("La persona #" + x + " se mantiene en el peso")
        } else {
            if (suma / 10 > peso_anterior) {
                document.writeln("La persona #" + x + " SUBIO")
            } else {
                document.writeln("La persona #" + x + " BAJO")
            }
        }
        document.write(" ")
    }
}

function edades() {
    let sexo = 0;
    let alumnos = 0;
    let x = 1;
    let numero_hombres = 0;
    let edad_hombres = 0;
    let promedio_hombres = 0.0;
    let numero_mujeres = 0;
    let edad_mujeres= 0;
    let promedio_mujeres = 0.0;
    alumnos = prompt("Ingresa una cantidad de alumnos")
    while (x <= alumnos) {
        edad = parseInt(prompt("Ingrese la edad"))
        sexo = prompt("Elige 1 o 2 para el sexo" + "\n1. Hombre" + "\n2. Mujer")
        if (sexo == 1) {
            edad_hombres = edad_hombres + edad;
            numero_hombres++;
            promedio_hombres = edad_hombres / numero_hombres;
        } else if (sexo == 2) {
            edad_mujeres = edad_mujeres + edad;
            numero_mujeres++;
            promedio_mujeres = edad_mujeres / numero_mujeres;
        }
        x++;
    }

    let suma_edades = edad_hombres + edad_mujeres;
    let promedio = suma_edades/ alumnos;

    document.write("El promedio de edades de todo el grupo es: " + promedio);
    document.writeln("El promedio de edades de hombres del grupo es: " + promedio_hombres);
    document.writeln("El promedio de edades de mujeres del grupo es: " + promedio_mujeres);
}

function zoo() {
    
    let n;
    let total = 0;
    let edad = 0;
    let categoria1 = 0;
    let categoria2 = 0;
    let categoria3 = 0;
    let animal;

    n = parseInt(prompt("Elige 1-3 según el tipo de animal" + "\n1- Elefantes" + "\n2- Jirafas" + "\n3- Chimpances"))

    if (n > 0 && n < 4) {
        if (n == 1) {
            animal = "Elefantes";
            total = 20;
        } else if (n == 2) {
            animal = "Jirafas";
            total = 15;
        } else {
            animal = "Chimpances";
            total = 40;
        }
        for (let x = 1; x <= total; x++) {
            edad = prompt("Ingrese la edad")
            if (edad >= 0 && edad <= 1) {
                categoria1++;
            } else if (edad < 3) {
                categoria2++;
            } else {
                categoria3++;
            }
        }
    }
    document.write("Porcentaje de edades de " + animal);
    document.writeln((categoria1 / total) * 100 + "% de 0 a 1 año\n");
    document.writeln((categoria2 / total) * 100 + "% de mas de 1 año y menos de 3");
    document.writeln((categoria3 / total) * 100 + "% de 3 año o más");
}

function kia() {
    var vendedor = new Array(10);
    var comision_ven = new Array(10);
    let i = 1;
    let nombre = "";
    let venta = "";
    while (i <= 3) {
        nombre = parseInt(prompt("KIA" + "\nIngrese el nombre del vendedor:"))
        for (let x = 0; x <= vendedor.length; x++) {
            vendedor[x] = nombre;
            console.log(vendedor[i])
        }
        venta = parseInt(prompt("Ingrese el importe total de venta"))
        if (venta >= 100000 && 300000) {
            comision = venta * 0.03;
        } else if (venta >= 3000000 && venta < 5000000) {
            comision = venta * 0.04;
        } else if (venta >= 5000000 && venta < 7000000) {
            comision = venta * 0.05;
        } else if (venta >= 7000000) {
            comision = venta * 0.06;
        } else if (venta < 1000000) {
            document.writeln("El vendedor no tiene comisiones")
        }
        i++;
        comision_ven[comision];
    }
    i = 1;
    comision_ven[comision];
    document.writeln("")
    document.writeln(" COMISIONES VENDEDORES ")
    document.writeln("-----------------------------------------------------")
    while (i <= 3) {
        document.writeln("Nombre vendedor: " + vendedor + " Comision: " + comision_ven)
        document.writeln("-----------------------------------------------------")
        i++;
    }
    document.writeln("-----------------------------------------------------")
}





