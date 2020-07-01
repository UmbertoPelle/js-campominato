var btnDiff =document.getElementById("btn");
var listaPc= document.getElementById("listaPc");
var listaUtente= document.getElementById("listaUtente");
var errore = document.getElementById("errore");
var win = document.getElementById("win");

// avvio gioco
btnDiff.addEventListener("click",function(){
  var arrayPc = [];
  var arrayUtente = [];
  errore.innerHTML = "";
  listaPc.innerHTML = "" ;
  listaUtente.innerHTML = "" ;
  win.innerHTML= "";

 // scelta difficoltà
  var difficoltà= document.getElementById("difficoltà").value;
  if (difficoltà==0) {
    // inserimento numeri array pc
    while (arrayPc.length < 16) {
      var numPc = randomNum(1,100);
      if (!(insideCheck(arrayPc,numPc))) {
        arrayPc.push(numPc);
      }
    }
    console.log("Lista PC: ",arrayPc);

    // inserimento numero lista utente
    var trovato = false;
    var numUtente = 0;
    while (arrayUtente.length < 16 && trovato == false) {
      numUtente = parseInt(prompt("inserisci un numero da 1 a 100:"));

      while (range(numUtente,1,100) == false) {
        numUtente = parseInt(prompt("Devi inserire un valore da 1 a 100:"));
      }

      if (insideCheck(arrayPc, numUtente)) {
        trovato = true;
        errore.innerHTML = "Hai perso , il numero inserito è una bomba ➛"+numUtente + "💣";
        for (var i = 0; i < arrayPc.length; i++) {
          listaPc.innerHTML += "<li>" + arrayPc[i] + "</li>" ;
        }
      }

      while (insideCheck(arrayUtente, numUtente)) {
        numUtente = parseInt(prompt("dato già presente, riprova:"));
      }

      if (insideCheck(arrayUtente,numUtente) == false && insideCheck(arrayPc, numUtente) == false) {
        arrayUtente.push(numUtente);
        listaUtente.innerHTML += "<li>" + numUtente + "</li>" ;
      }
    }


  } else if (difficoltà==1) {
    // inserimento numeri array pc
    while (arrayPc.length < 16) {
      var numPc = randomNum(1,80);
      if (!(insideCheck(arrayPc,numPc))) {
        arrayPc.push(numPc);
      }
    }
    console.log("Lista PC: ",arrayPc);

    // inserimento numero lista utente
    var trovato = false;
    var numUtente = 0;
    while (arrayUtente.length < 16 && trovato == false) {
      numUtente = parseInt(prompt("inserisci un numero da 1 a 80:"));

      while (range(numUtente,1,80) == false) {
        numUtente = parseInt(prompt("Devi inserire un valore da 1 a 80:"));
      }

      if (insideCheck(arrayPc, numUtente)) {
        trovato = true;
        errore.innerHTML = "Hai perso , il numero inserito è una bomba ➛"+numUtente + "💣";
        for (var i = 0; i < arrayPc.length; i++) {
          listaPc.innerHTML += "<li>" + arrayPc[i] + "</li>" ;
        }
      }

      while (insideCheck(arrayUtente, numUtente)) {
        numUtente = parseInt(prompt("dato già presente, riprova:"));
      }

      if (insideCheck(arrayUtente,numUtente) == false && insideCheck(arrayPc, numUtente) == false) {
        arrayUtente.push(numUtente);
        listaUtente.innerHTML += "<li>" + numUtente + "</li>" ;
      }
    }


  } else {
    // inserimento numeri array pc
    while (arrayPc.length < 16) {
      var numPc = randomNum(1,50);
      if (!(insideCheck(arrayPc,numPc))) {
        arrayPc.push(numPc);
      }
    }
    console.log("Lista PC: ",arrayPc);

    // inserimento numero lista utente
    var trovato = false;
    var numUtente = 0;
    while (arrayUtente.length < 16 && trovato == false) {
      numUtente = parseInt(prompt("inserisci un numero da 1 a 50:"));

      while (range(numUtente,1,50) == false) {
        numUtente = parseInt(prompt("Devi inserire un valore da 1 a 50:"));
      }

      if (insideCheck(arrayPc, numUtente)) {
        trovato = true;
        errore.innerHTML = "Hai perso , il numero inserito è una bomba ➛"+numUtente + "💣";
        for (var i = 0; i < arrayPc.length; i++) {
          listaPc.innerHTML += "<li>" + arrayPc[i] + "</li>" ;
        }
      }

      while (insideCheck(arrayUtente, numUtente)) {
        numUtente = parseInt(prompt("dato già presente, riprova:"));
      }

      if (insideCheck(arrayUtente,numUtente) == false && insideCheck(arrayPc, numUtente) == false) {
        arrayUtente.push(numUtente);
        listaUtente.innerHTML += "<li>" + numUtente + "</li>" ;
      }
    }


  }

  // condizione vittoria
  if (arrayUtente.length == 16) {
    win.innerHTML="Congratulazioni, hai vinto!!";
    for (var i = 0; i < arrayPc.length; i++) {
      listaPc.innerHTML += "<li>" + arrayPc[i] + "</li>" ;
    }
  }
});




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
