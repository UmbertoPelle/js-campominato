var arrayPc = [];
var arrayUtente = [];
var listaPc= document.getElementById("listaPc");
var listaUtente= document.getElementById("listaUtente");
var errore = document.getElementById("errore");
var win = document.getElementById("win");


// inserimento numeri array pc
while (arrayPc.length < 16) {
  var numPc = randomNum(1,100);
  if (!(insideCheck(arrayPc,numPc))) {
    arrayPc.push(numPc);
    listaPc.innerHTML += "<li>" + numPc + "</li>" ;
  }
}
console.log("Lista PC: ",arrayPc);

// inserimento numero lista utente
var trovato = false;
var numUtente = 0;
while (arrayUtente.length < 5 && trovato == false) {
  numUtente = parseInt(prompt("inserisci un numero da 1 a 100:"));

  while (range(numUtente,1,100) == false) {
    numUtente = parseInt(prompt("Devi inserire un valore da 1 a 100:"));
  }

  if (insideCheck(arrayPc, numUtente)) {
    trovato = true;
    errore.innerHTML = "Hai perso , il numero inserito è una bomba ->"+numUtente;
  }


  while (insideCheck(arrayUtente, numUtente)) {
    numUtente = parseInt(prompt("dato già presente, riprova:"));
  }

  if (insideCheck(arrayUtente,numUtente) == false && insideCheck(arrayPc, numUtente) == false) {
    arrayUtente.push(numUtente);
    listaUtente.innerHTML += "<li>" + numUtente + "</li>" ;
  }


}



// condizione vittoria
if (arrayUtente.length == 5) {
  win.innerHTML="Congratulazioni, hai vinto!!"
}


console.log("Lista UTENTE: ", arrayUtente);
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
