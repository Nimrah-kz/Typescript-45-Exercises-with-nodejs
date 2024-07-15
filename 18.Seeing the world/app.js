"use strict";
//Exercise 18
//Think of at least five places in the world you'd like to visit.
//. Store the location in a array. Make sure the array is not in alphabetical order.
//. Print your array in its original order.
let places = [`hunza`, `swat`, `gilgit`, `islamabad`, `hyderabad`];
console.log(`original :` + places);
//.Print your array in alphabetical order without modifying the actual list.
console.log(`alphabetical order ` + [...places].sort());
//.Show that your array is still in its original order by printing it again.
console.log(`original :` + places);
//. Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`reverse order ` + [...places].reverse());
//.Show that your array is still in its original order by printing it again.
console.log(`original :` + [...places].sort().reverse());
//.Reverse the order of your list. Print the array to show that its order has changed.
console.log(`original array reversed :` + placesp.reverse());
//.Reverse the order of your list again. Print the list to show it's back to its original order.
//.Sort your array so it's stored in alphabetical order.Print the array to show that its order has been changed.
console.log(`back to original order :` + places.sort().reverse());
//.Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`sorted in alphabetical order: ` + places.sort());
//.Sort to change your array so it's stored reverse alphabetical order. Print the list to show that its order has changed.
console.log(`original array reversed again:` + places.sort().reverse());
