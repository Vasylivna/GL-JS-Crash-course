	
const dog = { 
    friendly: true,
    speak: () => console.log("Woof! Woof!"),
 };
  
 // reuse and extend dog properties for dog Teddy
 const Teddy = Object.assign({}, dog);
 Teddy.name = 'Teddy';
  
 // reuse and extend dog properties for dog Rex
 const Rex = Object.assign({}, dog);
 Rex.name = 'Rex'