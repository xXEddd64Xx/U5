const miArray = new Array("España", "Francia", "Andorra");
var arrayCopy;


function mostrarNumElem() {
    alert("El nombre d'elements que te l'array és: " + miArray.length);
}

function mostrarElem() {
    var cad = "";
    miArray.forEach(i => {
        cad = cad + i + "\n";
    });
    alert("Elements: \n" + cad);
}

function mostrarElemInv() {
    arrayCopy = miArray;
    arrayCopy.reverse();
    var cad = "";
    for (let i = arrayCopy.length-1; i >= 0; i--) {
        cad = cad + arrayCopy[i] + "\n";
        
    }
    alert("Elements: \n" + cad);
    arrayCopy.reverse();
}

function mostrarElemAlfa() {
    arrayCopy = miArray;
    arrayCopy.sort();
    var cad = "";
    array.forEach(i => {
        cad = cad + i + "\n";
    });
    alert("Elements: \n" + cad);
}

function insertP() {
    miArray.unshift(prompt("Quin pais vols afegir?"));
}

function insertF() {
    miArray.push(prompt("Quin pais vols afegir?"));
}

function borrarP() {
   var elemBorrado = miArray.shift();
   alert("S'ha borrat l'element: " + elemBorrado);
}

function borrarF() {
    var elemBorrado = miArray.pop();
    alert("S'ha borrat l'element: " + elemBorrado);
 }

 function mostrarSeleccio() {
     alert(miArray[prompt("Quin element vols veure? (Has d'escriure un nombre)")])
 }