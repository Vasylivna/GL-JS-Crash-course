const object1 = {
    a: 'someSrting',
    b: 42
};
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}