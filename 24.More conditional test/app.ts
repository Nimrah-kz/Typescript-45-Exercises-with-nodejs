//.Test for equality and Inequality with strings
 console.log('Equality test:' ,("Nimrah" as string) === "Nimrah");

 console.log("Inequality test:" ,("Nimrah" as string) !== "Imran");

 //.Test using the lower case function.
console.log("lowercase test:", "HUZAIFA".toLowerCase() === "huzaifa");

//. Numerical tests invoving equality and inequality, greater than or equal to, and less than or equal to.
console.log("Equality test:", 1000 === 1000); //Equality
console.log("Inequality test:",(10 as number) !==9);// Inequality
console.log("greater than test", 10000 > 100);//Greter than
console.log("less than test", 10 < 100);//Less than
console.log("greater than and equal to test" , 10 >= 10); //Greater than is equal to
console.log("less than and equal to test" , 5 <= 10); //less than is equal to


//.Test using "and" and "or"operators.
console.log("And operator test", true && true);
console.log("or operator test", true || false);

//.Test whether an item is in a array.
const car = [1,2,3];
console.log("test number" , car.includes(1));

//.Test whether an item is not in a array.
const car1 = [1,2,3];
console.log("test number" , !car.includes(6));

