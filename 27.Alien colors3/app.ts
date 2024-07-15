//Exercise 27
//define variable
let alien_color: string = "green"
//usng if and else -if statements
if(alien_color === "green"){
    console.log("(version 1)you have earned 5 points")
}

 else if (alien_color === "yellow") {
        console.log("you have earned 10 points")
    }
    else if (alien_color === "red"){
        console.log("you have earned 15 points");
    }
        
    //version 2
    let alien_color2: string = "yellow"
    if(alien_color2 === "green"){
        console.log("you have earned 5 points")
    }
    else if (alien_color2 === "yellow") {
        console.log("(version 2)you have earned 10 points")
    }
    else if (alien_color2 === "red"){
        console.log("you have earned 15 points");
    }
        
//version 3
let alien_color3: string = "red"
if(alien_color3 === "green"){
    console.log("you have earned 5 points")
}
else if (alien_color3 === "yellow") {
    console.log("(you have earned 10 points")
}
else if (alien_color3=== "red"){
    console.log("(version 3)you have earned 15 points");
}
    



