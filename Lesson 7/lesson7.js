//cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})

function canIMakeCake(obj1, obj2) {
    const result = {};
    let canIMake = true;
    let max = 0;
    let missedIngredient = 'All good';

    Object.keys(obj1).forEach(ingredient => {
        if (obj2[ingredient] === 0) {
            result[ingredient] = 0;
            canIMake = false;
            missedIngredient = ingredient;
        } else if(obj2[ingredient]) {
            console.log(obj2[ingredient]);
            result[ingredient] = parseInt(obj2[ingredient]/obj1[ingredient]);
        }
    });

    if (canIMake) {
        max = Math.min(...Object.values(result));
    }
    
    return {canIMake, max, missedIngredient, result};
}

console.log (canIMakeCake (
    {flour: 500, sugar: 200, eggs: 1},
    {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
));