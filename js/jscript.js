var arrayPc = [];
var arrayUtente = [];
var listaPc= document.getElementById("listaPc");
var listaUtente= document.getElementById("listaUtente");


// inserimento numeri array pc
for (var i = 0; i < 5; i++) {
  var numPc = randomNum(1,100);
  if (!(insideCheck(arrayPc,numPc))) {
    arrayPc.push(numPc);
    listaPc.innerHTML += "<li>" + numPc + "</li>" ;
  } else {
    numPc = randomNum(1,100);
  }
}

// inserimento numero lista utente
while (arrayUtente.length < 5) {
  var numUtente = parseInt(prompt("dammi un numero"));

  if (insideCheck(arrayPc, numUtente)) {
    alert("hai perso");
    listaUtente.innerHTML += "<li>" + numUtente + "</li>" ;
    break
  }


  while (insideCheck(arrayUtente, numUtente)) {
    numUtente = parseInt(prompt("dato già presente, riprova:"));
  }

  arrayUtente.push(numUtente);
  listaUtente.innerHTML += "<li>" + numUtente + "</li>" ;

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
  var temp = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i]== num) {
      temp = true;
    }
  }
  return temp
}
