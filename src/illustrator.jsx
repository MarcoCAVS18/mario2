// Script para Illustrator: Eliminar objetos por color de relleno HEX (relleno)
var targetHexColors = [
  "#fffefe", 
  "#efd2c9"  
];

// Función para convertir RGB a HEX
function rgbToHex(color) {
  function toHex(value) {
    var hex = Math.round(value).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  return (
    "#" +
    toHex(color.red) +
    toHex(color.green) +
    toHex(color.blue)
  ).toUpperCase();
}

// Convertimos los colores de entrada a mayúsculas manualmente
var hexColorsUpper = [];
for (var i = 0; i < targetHexColors.length; i++) {
  hexColorsUpper.push(targetHexColors[i].toUpperCase());
}

// Verifica si un string está en un array (porque no hay .includes ni .indexOf)
function isInArray(str, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === str) {
      return true;
    }
  }
  return false;
}

function deleteByHexFillColor(doc, hexColors) {
  var items = doc.pathItems;
  for (var i = items.length - 1; i >= 0; i--) {
    var item = items[i];
    if (item.filled && item.fillColor.typename === "RGBColor") {
      var itemHex = rgbToHex(item.fillColor);
      if (isInArray(itemHex, hexColors)) {
        item.remove();
      }
    }
  }
}

// Ejecutamos si hay documento abierto
if (app.documents.length > 0) {
  var doc = app.activeDocument;
  deleteByHexFillColor(doc, hexColorsUpper);
  alert("Objetos eliminados por color de relleno HEX.");
} else {
  alert("No hay documento abierto.");
}
