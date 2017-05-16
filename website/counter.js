window.onload=function(){
  fcountUp('fundsElement', 0, 100);
  tcountUp('timeElement', 0, 100);
  hcountUp('hardwareElement', 0, 100);
}

function fcountUp(elementID, startVal, endVal) {
  var element = document.getElementById(elementID);
  var delay = 10;
  var i = startVal;

  function go() {
    if (i <= endVal) {
      element.innerHTML = i;
      setTimeout(go, delay);
      i++;
    }
  }
  go();
}

//////////////////////////////////////////

function tcountUp(elementID, startVal, endVal) {
  var element = document.getElementById(elementID);
  var delay = 10;
  var i = startVal;

  function go() {
    if (i <= endVal) {
      element.innerHTML = i;
      setTimeout(go, delay);
      i++;
    }
  }
  go();
}

///////////////////////////////////////////

function hcountUp(elementID, startVal, endVal) {
  var element = document.getElementById(elementID);
  var delay = 10;
  var i = startVal;

  function go() {
    if (i <= endVal) {
      element.innerHTML = i;
      setTimeout(go, delay);
      i++;
    }
  }
  go();
}
