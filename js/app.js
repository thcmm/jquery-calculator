'use strict';


$(document).ready(function() {
  console.log("Ready to Rock!");

  // $('span').on('click', logEventType);

  // $('span').click(function(){
  //   $(this).toggleClass('active');
  // });

  $('span').click(function(){
    var keyInput = $(this).html();

    switch (keyInput) {
    case "C":
        clearDisplay();
        break;
    case "=":
        evalDisplay();
        break;
    default:
      updateDisplay($(this).html());
}
});

function updateDisplay(theText) {
  console.log("updateDisply : " +  theText);
  var existingText = $('#screen').html();
  $('#screen').html(existingText + theText);
}

function evalDisplay() {
  // need to parst out * & / operators
  var screenText = $('#screen').html();
  console.log("screenText = " + screenText);

var newScreenTest = testForMultDivOperator(screenText);
console.log("newScreenTest = " + newScreenTest);

  var result = eval(newScreenTest);
  console.log("the result = " + result);
  clearDisplay();
  updateDisplay(result);
}

function testForMultDivOperator(theString) {
  console.log("testForMultDivOperator : ");
  var repairedOperator = "";
  console.log("the string: ", theString);
  if (theString.indexOf("x") > 0) {
    repairedOperator = theString.replace("x", "*");
    console.log("Repaired Operator Mult", repairedOperator);
    return repairedOperator;
  } else if (theString.indexOf("÷") > 0) {
    repairedOperator = theString.replace("÷", "/");
    console.log("Repaired Operator Div", repairedOperator);
    return repairedOperator;
  } else {return theString;}
}


function clearDisplay() {
  $('#screen').html("");
}
  var logEventType = function(event) {
    console.log(event.type);
  };
});
