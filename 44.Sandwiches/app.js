"use strict";
function make_sandwich(...item) {
    console.log("\n Making a sandwich with these item: \n");
    item.forEach(singleitem => console.log(singleitem));
    console.log("\n  Enjoy your sandwich");
}
make_sandwich("peproni", "sauces", "cream cheese", "mashroom");
make_sandwich("egg", "lettuce", "mayo");
make_sandwich("butter", "chicken", "cucumber", "sauces", "lettuce", "egg", "jelpano");
