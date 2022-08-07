/* “Write an ES2015 Version” of each code below */


/** PROBLEM 1 
 
 Same keys and values
 
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
*/

const createInstructor = (firstName, lastName) => {
  return {
    firstName,
    lastName,
  };
}


/** PROBLEM 2

Computed Property Names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
*/

let favoriteNumber = 42;

var instructor = {
  firstName: "colt",
  [favoriteNumber]: "That is my Favorite!",
};




/** PROBLEM 3 

var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
*/

var instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};



/**PROBLEM 4

createAnimal function
Write a function which generates an animal object. The function should accept 3 arguments:

species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’) */


function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    }
  };
}

const d = createAnimal('dog', 'bark', 'woof')
// d.bark() will return 'woof'


