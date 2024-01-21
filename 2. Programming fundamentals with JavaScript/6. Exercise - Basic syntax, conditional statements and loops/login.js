function login(input) {

    let username = input.shift();
    let password = '';

    //Get password (reverse username)
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    let guess = input.shift();
    let tries = 0;
    while (guess !== password) {
        tries++;
        if (tries === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log('Incorrect password. Try again.');
        guess = input.shift();

    }
    console.log(`User ${username} logged in.`);
}


// login(['Acer', 'login', 'go', 'let me in', 'recA']);
// login(['momo','omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);