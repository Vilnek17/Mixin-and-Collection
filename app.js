const mixin = {
    getPrice() { return this.price },
    getVat() {return 'wrong options'},
    exciseDuty() {return 'wrong options'},
    singleTax() {return 'wrong options'},
}

class Cola {
    constructor(brend, price) {
        this.brend = brend;
        this.price = price;
    }
}
Object.assign(Cola.prototype, mixin)
Cola.prototype.getVat = function () {return this.withVAT = this.price + this.price * 0.2;}

class Whiskey {
    constructor(brend, price) {
        this.brend = brend;
        this.price = price;
    }
}
Object.assign(Whiskey.prototype, mixin)
Whiskey.prototype.exciseDuty = function() {return this.withVAT = (this.price + this.price * 0.3) + 10}

class Ice {
    constructor(price) {
        this.price = price;
    }
}

Object.assign(Ice.prototype, mixin)
Ice.prototype.singleTax = function() {return this.withVAT = this.price + 1}

const CoCa = new Cola('CoCa', 10);
const Jack = new Whiskey('Jack', 100);
const iceb = new Ice(2);
console.log(CoCa.getVat());
console.log(Jack.exciseDuty());
console.log(iceb.singleTax());

function uniceString(strings) {
    const uniceArr = strings.split('; ')
    return new Set(uniceArr)
}

console.log(uniceString("cherry; orange; cherry; banana; banana"));


const ul = document.querySelector('.shop-list');
const item = ul.getElementsByTagName('li');
let array = []
for (const key in item) {
    if (typeof item[key].innerText == 'string') {
        array.push(item[key].innerText);
    }
}
console.log(new Set(array));

const mike ={name:'Mike', age: 18};
const bob ={name:'Bob', age: 25};
const nikola = { name: 'nikola', age: 32 };

const userVisits = new Map();

function mikeVisit() {
    let count = 1;
    return function () {
        userVisits.set(mike, count);
    return count++;
    };
}

const mikeVisits = mikeVisit();

function bobVisit() {
    let count = 1;
    return function () {
        userVisits.set(bob, count);
    return count++;
    };
}

const bobVisits = bobVisit();

function nikolaVisit() {
    let count = 1;
    return function () {
        userVisits.set(nikola, count);
    return count++;
    };
}

const nikolaVisits = nikolaVisit();
mikeVisits(mike);
mikeVisits(mike);
mikeVisits(mike);
bobVisits(bob);
nikolaVisits(nikola);
nikolaVisits(nikola);
console.log(userVisits.get(mike));//3
console.log(userVisits.get(bob));//1
console.log(userVisits.get(nikola));//2
