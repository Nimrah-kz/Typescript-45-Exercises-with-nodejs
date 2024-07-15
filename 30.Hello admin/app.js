"use strict";
let userNames = ["admin", "hafsa", "huzaifa", "ayesha", "ainy"];
userNames.forEach(username => {
    if (username === "admin") {
        console.log("Hello", username, "should you like to see a status report?");
    }
    else {
        console.log("Hello", username, "thankyou for logging in again.");
    }
});
