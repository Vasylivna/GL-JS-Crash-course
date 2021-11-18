//_____includes_________//

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
const hasWord = sentence.includes(word); // true Якщо значення є 

console.log(`The word "${word}"
	${hasWord ? 'is' : 'is not'} in the sentence`);


const hasCatWord = sentence.includes('cat'); // false якщо не знайшло такого значення!
