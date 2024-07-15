"use strict";
let car = 'subaru';
//Test 1: Equality comparison (True)
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru'); //True
//Test 2: Strict equality comparison (True)
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru'); //True
//Test 3:Inequality comparison (False)
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); //False
//Test 4:Strict enequality comparison(False)
console.log("Is car !== 'subaru' ? I predict False.");
console.log(car !== 'subaru'); //False
//Test 5: Less than comparison(False)
console.log("Is car < 'subaru' ? I predict False.");
console.log(car < 'subaru'); //False (lexicographic comparison)
//Test 6: Less than comparison(False)
console.log("Is car > 'subaru' ? I predict False.");
console.log(car > 'subaru'); //False (lexicographic comparison)
//Test 7: Less than or equal comparison(True)
console.log("Is car <= 'subaru'? I predict true.");
console.log(car <= 'subaru'); //True
//Test 8:Greator than or Equal comparison(True)
console.log("Is car >= 'subaru'? I predict true.");
console.log(car >= 'subaru'); //True
//Test 9: Checking truthiness (True)
console.log("Is car? I predict True.");
console.log(car); //True (non-empty string is truthy)
//Test 10: Checking falsiness (False)
console.log("Is !car? I predict False.");
console.log(!car); //False (negation of a truthy value)
