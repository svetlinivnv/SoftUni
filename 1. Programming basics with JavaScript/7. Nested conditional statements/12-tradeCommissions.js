function tradeCommissions(input) {

    let town = input[0];
    let sells = Number(input[1]);
    let comission = 0;

    switch(town) {
        case 'Sofia':
            if (sells >= 0 && sells <= 500) {
                comission = sells * 0.05;
            } else if (sells > 500 && sells <= 1000) {
                comission = sells * 0.07;
            } else if (sells > 1000 && sells <= 10000) {
                comission = sells * 0.08;
            } else if (sells > 10000) {
                comission = sells * 0.12;
            } else {
                console.log('error');
            }
        break;
        case 'Varna':
            if (sells >= 0 && sells <= 500) {
                comission = sells * 0.045;
            } else if (sells > 500 && sells <= 1000) {
                comission = sells * 0.075;
            } else if (sells > 1000 && sells <= 10000) {
                comission = sells * 0.10;
            } else if (sells > 10000) {
                comission = sells * 0.13;
            } else {
                console.log('error');
            }
        break;
        case 'Plovdiv':
            if (sells >= 0 && sells <= 500) {
                comission = sells * 0.055;
            } else if (sells > 500 && sells <= 1000) {
                comission = sells * 0.08;
            } else if (sells > 1000 && sells <= 10000) {
                comission = sells * 0.12;
            } else if (sells > 10000) {
                comission = sells * 0.145;
            } else {
                console.log('error');
            }
        break;
        default: console.log('error');

    }

    if (comission != 0){
    console.log(comission.toFixed(2));
}
}

tradeCommissions(["Kaspichan", "-50"]);