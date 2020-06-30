var arrayPc = [];
var arrayUtente = [];

for (var i = 0; i < 5; i++) {
  var temp = randomNum(1,100);
  if (!(insideCheck(arrayPc,temp))) {
    arrayPc.push(temp);
  } else {
    temp = randomNum(1,100);
  }
}

var i=0;
while (i < 5) {
  var temp = parseInt(prompt("inserisci un numero"));
  if (!(insideCheck(arrayUtente,temp))) {
    arrayUtente.push(temp);
  } else {
    temp = parseInt(prompt("numero gia presente, prova un altro:"));
  }

  if (insideCheck(arrayPc,temp)) {
    alert("numero presente hai perso!")
  }

  i++
}

if (arrayUtente.length == 5) {
  alert("Congratulazione ,hai vinto!!")
}


console.log(arrayPc, arrayUtente);
// functions
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function insideCheck(array , num) {
  for (var i = 0; i < array.length; i++) {
    if (array[i]== num) {
      return true;
    } else {
      return false;
    }
  }
}
