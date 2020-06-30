var arrayPc = [];
var arrayUtente = [];

// inserimento numeri array pc
for (var i = 0; i < 5; i++) {
  var temp = randomNum(1,100);
  if (!(insideCheck(arrayPc,temp))) {
    arrayPc.push(temp);
  } else {
    temp = randomNum(1,100);
  }
}

// inserimento numero lista utente
while (arrayUtente.length < 5) {
  var numUtente = parseInt(prompt("dammi un numero"));

  if (insideCheck(arrayPc, numUtente)) {
    alert("hai perso");
    break
  }

  var z = 0;
  while (insideCheck(arrayUtente, numUtente) && z < 10) {
    numUtente = parseInt(prompt("dato già presente, riprova:"));
    z++
  }

  arrayUtente.push(numUtente);

}

// condizione vittoria
if (arrayUtente.length == 5) {
  alert("Congratulazione ,hai vinto!!")
}


console.log("Lista PC: ",arrayPc,"Lista UTENTE: ", arrayUtente);
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
