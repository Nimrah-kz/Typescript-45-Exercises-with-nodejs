//Exercise 42
//Define the function to show magicians names

function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

//funtion to make magicians great  through .map()
//it will modify array.
function make_great(magicians: string[]){
   return magicians.map(name => `The great ${name}`);
}
//Define an array of magicians names.
let magician_names = ["criss angel" , "David blaine", "Darren brown"];

//call make_great function to modify magicians names.
let great_magicians = make_great(magician_names);

//Show modified list of magicians through call show_magicians.
show_magicians(great_magicians);