//-----------------------------------task_1

const dog = {};
dog.name = 'Moochskctar';
console.log('Result Task 1: Object DOG : ', dog);
dog.age = 500;
console.log('Result Task 1: Object DOG : ', dog);
dog.sex = 'male';
console.log('Result Task 1: Object DOG : ', dog);
dog.sex = 'unknown';
console.log('Result Task 1: Object DOG : ', dog);
delete dog.age;
console.log('Result Task 1: Object DOG : ', dog);

//-----------------------------------task_2

function isEmpty(object) {
    for (let prop in object) {
        return false;
    }
    return true;
}
const obj = {};
console.log(`Result Task 2: Object obj is Empty : ${isEmpty(obj)}`);
console.log(`Result Task 2: Object dog is Empty : ${isEmpty(dog)}`);

//-----------------------------------task_3

const QTY = {
    Dogs: 100000,
    Cats: 1625476540,
    Bananas: 155330
}
let sumAnimal = 0;
for (let prop in QTY) {
    sumAnimal += QTY[prop];
}
console.log('Result Task 3: Total sum of animals: ', sumAnimal);

//-----------------------------------task_4

function mumu(object) {
    const mumuObj = {};
    for (let prop in object) {
        if (typeof(object[prop]) === 'number') {
            mumuObj[prop] = object[prop] * 5;
        }
    }
    return mumuObj;
}
console.log('Result Task 4: Primary Object is : ', QTY);
console.log('Result Task 4: New Object is : ', mumu(QTY));

//-----------------------------------task_5

function getName() {
    for (let prop in this) {
        if (prop === 'name') {
            return this[prop];
        } else {
            return 'The object has no property Name'
        }
    }
}
dog.getName = getName;
QTY.getName = getName;
console.log('Result Task 5: Object with the name property. DOG name is :', dog.getName());
console.log('Result Task 5: Object without the name property. QTY name is : ', QTY.getName());