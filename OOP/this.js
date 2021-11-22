//________________This____________________

const user = {
    name: "Michael",
    age: 30,
  
    sayHi() {
      // this - is "current object"
      console.log(this.name);
    }
  
  };
  
console.log(user.sayHi()); // Michael

//===========================================================

const arrowFn1 = () => {
    console.log(this);
  }
  function Circle() {
    this.PI = 3.14;
    this.r = 20;
        
    this.getArea = () => {
      console.log(this);
      
      return this.PI * Math.pow(this.r, 2);
    }
   }
  
  const cr = new Circle();
  console.log(cr.getArea());
  