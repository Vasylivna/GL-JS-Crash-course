const array = [1, 2, 3, 4];
let res = 0;

console.log(item); // is not available

array.forEach(item => {
  res += item;
})

console.log(item); // also is not available

//==========================================================

let res = 0;
console.log(i); // i - is not available

for (let i = 0; i < 10; i++) {
  res += i;
}

console.log(i); // i - also is not available