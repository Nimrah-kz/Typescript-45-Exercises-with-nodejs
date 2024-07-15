"use strict";
let currentUsers = ["admin", "hafsa", "huzaifa", "ayesha", "ainy"];
let newUsers = ["admin", "hafsa", "huzaifa", "nimrah", "umair"];
for (let new_users of newUsers) {
    const lowercase_new_users = new_users.toLowerCase();
    if (currentUsers.map(user => user.toLowerCase()).includes(lowercase_new_users)) {
        console.log(`the username ${new_users} is not available`);
    }
    else {
        console.log(`the username ${new_users} is available`);
    }
}
