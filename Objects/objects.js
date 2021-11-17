const dog  = {
    userName: 'Teddy',
    age: 3,
    hasHotDog: true,
    speak: () => console.log('Woof!'),
}

console.log('The Dog name is', dog.userName);
console.log('The Dog age is', dog.age);

if (dog.hasHotDog) {
    console.log('The Dog has Hot Dog');
}

dog.speak()