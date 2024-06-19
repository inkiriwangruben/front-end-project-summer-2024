//1 let dan const
const calculateAge = (birthYear) => { 2019 - birthYear;
};

const yearUntilRetirement = (object) => {
    let age = calculateAge(object.year);
    let retirement = 60 - age;
    if (retirement > 0) {
    console.log(object.firstName + ' retires in '+ retirement + ' years');
    } else {
    console.log(object.firstName + ' i s already retired.');
    }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

//2.String literal & rest parameter
const addNumber = (...numbers) => {
    const numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    numbers.map(number => {
        sum += number;
    });
    return `Total: ${sum}`;
}

console.log(addNumber(1,2,3,4,5,6,7));

//3.Arrow function
const phi = 3.14;
const power = 2;
let radius = 0;

const calculateArea = (obj) => phi * Math.pow(obj.radius, obj.power);

radius = 21;
const area21 = calculateArea({ radius, power });

radius = 7;
const area7 = calculateArea({ radius, power });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4.Default parameter
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
}

makeAjaxRequest('www.google.com');
