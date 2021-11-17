const dog  = {
    userName: 'Taddy',
    friendly: true,
    speak: () => console.log('Woof! Woof!'),
    likeCats: false
};
//adding a new property name 
dog.userName = 'Rex';

// removing a property
delete dog.likeCats;