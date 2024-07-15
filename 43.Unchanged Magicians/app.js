"use strict";
//Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//funtion to make magicians great  through .map()
//it will modify array.
function make_great(magicians) {
    return magicians.map(name => `The great ${name}`);
}
//Define an array of magicians names.
let magician_names = ["criss angel", "David blaine", "Darren brown"];
// Make a copy of orginal array through .slice() function
let copy_magician_names = magician_names.slice();
//modify the copy array to include the great with their names.
let copy_great_magicians = make_great(copy_magician_names);
// show both array.
//orginal
console.log("original array\n");
show_magicians(magician_names);
//copied
console.log('\ncopied array\n');
show_magicians(copy_great_magicians);
