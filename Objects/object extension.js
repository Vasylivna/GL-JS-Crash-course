const dog  = {
    friendly: true,
    speak: () => console.log('Woof! Woof!'),
};
// adding new property name 
dog.name = 'Rex';
// adding new method
dog['run'] = () => console.log('Run');
