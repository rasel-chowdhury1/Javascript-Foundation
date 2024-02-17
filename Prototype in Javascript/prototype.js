
function Person(name,age){
    let person = Object.create(Person.prototype);
    console.log(person)

    person.name = name;
    person.age = age;

  return person;
};

Person.prototype = {
    eat(){
        console.log("person is eating")
    },
    sleep(){
        console.log('Person is sleeping')
    },
    play(){
        console.log('person is playing')
    }
}

function PersonWithNew(name,age){
    // let this = Object.create(PersonwithNew.prototype);

    this.name = name;
    this.age = age;

//   return this;
};

PersonWithNew.prototype = {
    eat(){
        console.log("person is eating")
    },
    sleep(){
        console.log('Person is sleeping')
    },
    play(){
        console.log('person is playing')
    }
}




const sakib = Person('Sakib', 30);
console.log('without new ->',sakib)
const tamim = Person('Tamim', 35)
sakib.eat();
sakib.sleep()

const sakib1 = new PersonWithNew('Sakib1',25);
console.log('using new -> ',sakib1)
const tamim1 = new PersonWithNew('Tamim1',25);



const captain = {
    name: 'Mashrafi',
    age: 35,
    country: 'Bangladesh'
}

const player = Object.create(captain)

console.log(player)

function test(){}
console.dir(test)