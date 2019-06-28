// document.getElementById("msg").innerHTML = '<h1>Hello, world!</h1>'
const printMessage = (elementId, format, content) => {
  document.querySelector(`#${elementId}`).innerHTML = 
    `<${format}>${content}</${format}>`;
}

printMessage("msg", "h1", "Hello, world!");
printMessage("info", "h2", "Bye");

// Square elements in array

// The first solution is used imperative paradism

var array = [0, 1, 2, 3, 4, 5, 6];
for (let i = 0; i < array.length; i++) {
  array[i] = Math.pow(array[i], 2);
}
console.log(array);

// Imperative tells computers, in great detail, how to perform a certain task.

// Declerative solution
array.map(num => Math.pow(num, 2));
console.log(array);

// The idea hear is we replace the for loop by a function. 
// The lamda expression in ES6 (a => b) help us reduce the structure of function syntactically

/**
 * Pure functions
 * 
 * It depends only on the input provided and not any on hidden or external state during its evaluation
 * It doesn't inflict change beyond its scope.
 */

let counter = 0;
function increment() {
  return ++counter;
}

// This function above is impure as it reads and modifies an external variable - counter.
// Side effeccts occur when functions reading or writing to external resources. 

/** Side effects can occur in many situation:
 * 
 * Changing variable, property or data structure globally
 * 
 * Changing the original value of function's arguments
 * 
 * Processing user input
 * 
 * Throwing an exception, unless it's caught within the same function
 * 
 * Printing to the screen or logging 
 * 
 * Querying the HTML documents, browser cookies, or databases.
 */

// Functional programming doesn't restrict all changes of state because we still are in a world of full dynamical behavior and mutation. Indeed, practical functional programming provides a framework to help us separate the pure from the impure.

function showStudentData(ssn) {
  let student = db.get(ssn); // access the object storage to look up students by ssn
  if (student !== null) { // throw exception
    document.querySelector("#asad").innerHTML = `
      ${student.ssn},
      ${student.firstname},
      ${student.lastname}
    `;
  } else {
    throw new Error('Student not found or banned');
  }
}

// As we can see, the function above is impure as it relies on external resouces, making the coding inflexible, hard to work and test. 

// Now, it's time for functional programming, let's put a functional hat for this solution.
/**
 * There are many techniques you can use in functional programming. But now, we can use two of those to implement to our code. 
 * 
 * Separate this long function into shorter functions, each with single purpose.
 * 
 * Reduce side effects by explicitly definning all arguments needed for the functions to carry out their job
 */

const find = curry(function(db, id) {
  let obj = db.get(id);
  if (obj === null) {
    throw new Error('Object not found...');
  } 
  return obj;
});

const csv = (student) => {
  return `${student.ssn},
  ${student.firstname},
  ${student.lastname}`;
};

const append = curry(function(elementId, info) {
  document.querySelector(elementId).innerHTML = info;
});

const showStudentData2 = run(
  append('#asad'),
  csv,
  find(db)
);

// These solution is more flexible as it has three reusable functions
// One important thing is the interaction with HTML elements is moved into its own function.

// However, there is a null-check branching statement in find(). We'll fix that by using Referencial Transparency

/**
 * Referencial Transparency 
 * 
 * 
 */


