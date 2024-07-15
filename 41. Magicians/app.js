"use strict";
//Exercise 41
//Magicians: Make a array of magicians names. pass the array to a function
//called show_magician(), which prints the name of each magicians in the array.
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
let magician_names = ["criss angel", "David blaine", "Darren brown"];
show_magicians(magician_names);
