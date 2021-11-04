const MATH_PI = 3.14;
const r = 10;
const userName = "Robert";

console.log(userName !== "Stepan");

// using 'and'
const res = MATH_PI === 3.14 && r >= 10
    ?MATH_PI * (2 * r)
    :MATH_PI * (r * r);

console.log("result ", res);

//using 'not' and 'or'
const res2 = r !== 0 || r >= 10
    ?MATH_PI * (2 * r)
    :MATH_PI * (r * r);

console.log("result 2", res2);