//___________________Execution context________________

const x = 10;

function foo() {
   const y = 20;

   function bar() {

        const z = 15;
        const output = x + y + z;
        
        return output;

   }

  return bar;
  
}

console.log(foo()());
