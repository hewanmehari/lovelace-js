// 1

function failedLoginAttempt(loginAttempt) {
    loginAttempt = 1;
    while (loginAttempt <= 3) {
        console.log(`This is your ${loginAttempt}st attempt.`)
        loginAttempt++;
    }
    console.log("Account Locked");
}
failedLoginAttempt();

// 2
function voting(vote) {
    vote.forEach(votes => {

        do {
            console.log(votes);
        }
        while (vote[vote.length]);
    });
};
voting(["v1", "v2", "v3"]);



// 3
function dayName(days) {
    days.forEach(day => {
        switch (day) {
            case 1:
                console.log(`Monday is found on day ${day}`)
                break;
            case 2:
                console.log(`Tuesday is found on day ${day}`)
                break;
            case 3:
                console.log(`Wednesday is found on day ${day}`)
                break;
            case 4:
                console.log(`Thursday is found on day ${day}`)
                break;
            case 5:
                console.log(`Friday is found on day ${day}`)
                break;
            case 6:
                console.log(`Saturday is found on day ${day}`)
                break;
            case 7:
                console.log(`Sundnay is found on day ${day}`)
                break;
            default:
                console.log("No more days");
                break;

        }

    });
};

let days = [3, 4, 1, 9, 3, 8, 2, 5];
dayName(days);

// 4
function passwordStrength(passwords) {
    passwords.forEach(password => {
        if (password.length >= 8) {
            console.log("Strong password");

        }
        else {
            console.log("Weak password");
        }
    })
};
let passwords = ["pass1213word", "selam", "onetwo"];
passwordStrength(passwords);



// 5
function language(greetingTypes) {
    greetingTypes.forEach(greeting => {
        switch (greeting) {
            case 'en':
                console.log(`Greeting in ${greeting} is Hello.`);
                break;
            case 'fr':
                console.log(`Greeting in ${greeting} is Bonjour.`)
                break;
            case 'sw':
                console.log(`Greeting in ${greeting} is Habari.`)
                break;
            default:
                console.log(` Did not understand the language.`)
                break;

        }
    })
};
let greetingTypes = ["en", "sw", "ko"];
language(greetingTypes);





// 6
const temprature = [42, 30, 27];
for (let i = 0; i < temprature.length; i++) {
    if (temprature[i] > 30) {
        console.log("High heat alert!");
    }
    else if (temprature[i] < 15) {
        console.log("Cold aler!");
    }
    else {
        console.log("Normal condition!");
    }
}


// 7
let registration = ["Betty", "Daniel", "Kevin"];
while (registration.length > 0) {
    const name = registration.shift();
    console.log(name + " has registered");
}

// 8

let score = 0;
do {
    score += 10;
    console.log("current score" + score);
}
while (score < 50);
console.log("Test passed with score" + score);