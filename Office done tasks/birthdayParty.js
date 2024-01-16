function birthdayParty(input) {

    let rent = Number(input[0]);
    let cake = 0.2 * rent;
    let drinks = 0.55 * cake;
    let animator = (1/3) * rent;
    let total = rent + cake + drinks + animator;

    console.log(total);
}

birthdayParty(['2250']);