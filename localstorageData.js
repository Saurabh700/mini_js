var scope = ["⦾ JavaScript has 3 types of scope:","⦾ Block scope", "⦾ Function scope", "⦾ Global scope"]

var hoisting = ["⦾ JavaScript Declarations are Hoisted In JavaScript, a variable can be declared after it has been used.", "⦾ In other words; a variable can be used before it has been declared."]

var constructorfunction = ["⦾ In an object method, this refers to the object.",
"⦾ Alone, this refers to the global object.",
"⦾ In a function, this refers to the global object.",
"⦾ In a function, in strict mode, this is undefined.",
"⦾ In an event, this refers to the element that received the event.",
"⦾ Methods like call(), apply(), and bind() can refer this to any object."]

var prototype = [
    "⦾ All JavaScript objects inherit properties and methods from a prototype:",

"⦾ Date objects inherit from Date.prototype",
"⦾ Array objects inherit from Array.prototype",
"⦾ Person objects inherit from Person.prototype",
"⦾ The Object.prototype is on the top of the prototype inheritance chain:",
"⦾ Date objects, Array objects, and Person objects inherit from Object.prototype."
]

localStorage.setItem("scope", JSON.stringify(scope))
localStorage.setItem("hoisting", JSON.stringify(hoisting))
localStorage.setItem("constructorfunction", JSON.stringify(constructorfunction))
localStorage.setItem("prototype", JSON.stringify(prototype))