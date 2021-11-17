// export function sayHelloWorld() {
//   alert("Hello World!");
// }
// console.log(sayHelloWorld());

export function calculateFigureArea(figureType, a, b) {
  switch (figureType) {
    case "square": {
      alert(a * a);
    }
    break;
    case "circle": {
      alert(3.14 * a * a);
    }
    break;
    case "rectangle":{
      alert(a * b);
    }
    break;
    default: {
      alert("amulet figure");
    }
    break;
  }
}




export function calculateFigureArea(figureType, a, b) {
  switch (figureType) {
    case "square": {
      alert(a * a);
}
      break;
    case "circle":
      alert(3.14 * a * a);
      break;
    case "rectangle":
      alert(a * b);
      break;
    default:
      alert("amulet figure");
      break;
  }
}