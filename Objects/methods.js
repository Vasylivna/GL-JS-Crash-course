const dog  = {
    friendly: true,
    speak: () => console.log("Woof! Woof!"),
};
//returns the primitive value of the specified object
//result - {friendly: true, speak: f}
dog.valueOf();

//check, if has property
// result - true
dog.hasOwnProperty("speak");

//check, if has property
// result - false
dog.hasOwnProperty("likesIcecream");

// get atring representation of an object 
dog.toString();


