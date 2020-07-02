var btn1=document.getElementById("1");
var btn2=document.getElementById("2");
var btn3=document.getElementById("3");
var btn4=document.getElementById("4");
var btn5=document.getElementById("5");
var btn6=document.getElementById("6");
var btn7=document.getElementById("7");
var btn8=document.getElementById("8");
var btn9=document.getElementById("9");
var btn10=document.getElementById("10");
var btn11=document.getElementById("11");
var btn12=document.getElementById("12");
var globale=document.getElementById("globale");


var buttons=[btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10,btn11,btn12];
var bombe=[];
var checkClick=[true,true,true,true,true,true,true,true,true,true,true,true]
for (var i = 0; i < 4; i++) {
  var temp = randomNum(1,11);
  console.log(temp);
  buttons[temp].classList.add("red");
  bombe+=buttons[temp];
};

var cont=0;

if (cont<8) {
  btn1.addEventListener("click",function () {
    if (checkClick[0]==true) {
      click(btn1,globale);
      cont++;
      checkClick[0]=false;
      if (cont==8) {
        alert("hai vinto");
      }
    }
  });
  btn2.addEventListener("click",function () {
    if (checkClick[1]==true) {
      click(btn2,globale);
      cont++;
      checkClick[1]=false;
      if (cont==8) {
        alert("hai vinto");
      }
    }
  });
  btn3.addEventListener("click",function () {
    if (checkClick[2]==true) {
      click(btn3,globale);
      cont++;
      checkClick[2]=false;
      if (cont==8) {
        alert("hai vinto");
      }
    }
  });
  btn4.addEventListener("click",function () {
    if (checkClick[3]==true) {
      click(btn4,globale);
      cont++;
      checkClick[3]=false;
      if (cont==8) {
        alert("hai vinto");
      }
    }
  });
  btn5.addEventListener("click",function () {
    if (checkClick[4]==true) {
      click(btn5,globale);
      cont++;
      checkClick[4]=false;
      if (cont==8) {
        alert("hai vinto");
      }
    }
  });
  btn6.addEventListener("click",function () {
    if (checkClick[5]==true) {
      click(btn6,globale);
      cont++;
      checkClick[5]=false;
      if (cont==8) {
        alert("hai vinto");
      }
    }
  });
  btn7.addEventListener("click",function () {
    if (checkClick[6]==true) {
      click(btn7,globale);
      cont++;
      checkClick[6]=false;
      if (cont==8) {
        alert("hai vinto");
      }
    }
  });
  btn8.addEventListener("click",function () {
    if (checkClick[7]==true) {
      click(btn8,globale);
      cont++;
      checkClick[7]=false;
      if (cont==8) {
        alert("hai vinto");
      }
    }
  });
  btn9.addEventListener("click",function () {
    if (checkClick[8]==true) {
      click(btn9,globale);
      cont++;
      checkClick[8]=false;
      if (cont==8) {
        alert("hai vinto");
      }
    }
  });
  btn10.addEventListener("click",function () {
    if (checkClick[9]==true) {
      click(btn10,globale);
      cont++;
      checkClick[9]=false;
      if (cont==8) {
        alert("hai vinto");
      }
    }
  });
  btn11.addEventListener("click",function () {
    if (checkClick[10]==true) {
      click(btn11,globale);
      cont++;
      checkClick[10]=false;
      if (cont==8) {
        alert("hai vinto");
      }
    }
  });
  btn12.addEventListener("click",function () {
    if (checkClick[11]==true) {
      click(btn12,globale);
      cont++;
      checkClick[11]=false;
      if (cont==8) {
        alert("hai vinto");
      }
    }
  });
}

// functions
function click(btn,x) {
  btn.classList.remove("grey")
  if (btn.classList == "red") {
    x.className="hidden";
    console.log(x);
    alert("hai perso")
  }else {
    btn.classList.add("white");
  }
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
