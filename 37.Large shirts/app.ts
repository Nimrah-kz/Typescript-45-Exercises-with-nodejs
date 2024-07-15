function make_shirt(size:string= "large", message:string = "I love typescript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);

}

make_shirt(); //Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into coding"); // custom message, small size