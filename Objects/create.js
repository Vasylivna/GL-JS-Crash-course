const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log('My name is ${this.name}. Am I human? ${this.isHuman}');
    }
};

const Mat = Object.create(person);

Mat.name = 'Matthew';
Mat.isHuman = true;

Mat.printIntroduction();