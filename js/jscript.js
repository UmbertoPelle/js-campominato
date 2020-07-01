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
  } //else {
  //   numPc = randomNum(1,100);
  // }
}

// inserimento numero lista utente
var trovato = false;
var numUtente = 0;
while (arrayUtente.length < 5 && trovato == false) {
  numUtente = parseInt(prompt("inserisci un numero da 1 a 100:"));

  if (range(numUtente,1,100) == false) {
    numUtente = parseInt(prompt("Devi inserire un valore valido:"));
  }

  if (insideCheck(arrayPc, numUtente)) {
    alert("hai perso");
    trovato = true;
  }


  while (insideCheck(arrayUtente, numUtente)) {
    numUtente = parseInt(prompt("dato già presente, riprova:"));
  }

  if (insideCheck(arrayUtente,numUtente) == false && range(numUtente,0,101) && insideCheck(arrayPc, numUtente) == false) {
    arrayUtente.push(numUtente);
    listaUtente.innerHTML += "<li>" + numUtente + "</li>" ;
  }


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

function range(num , min , max) {
  if (num >= min && num <= max && !isNaN(num)) {
    return true
  } else {
    return false
  }
}
