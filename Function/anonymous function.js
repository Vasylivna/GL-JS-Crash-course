function makeDecision(makeFn) {
    makeFn();
  }
  
  // call the function passing an anonymous function
  makeDecision(function() {
    console.log("Let's dance");
  });
  