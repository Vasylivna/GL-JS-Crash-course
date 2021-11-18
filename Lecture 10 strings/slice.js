//________________________Slice_____________________//

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// output: "the lazy dog."

console.log(str.slice(4, 19));
// output: "quick brown fox"

console.log(str.slice(-4));
// output: "dog."

console.log(str.slice(-9, -5));
// output: "lazy"
