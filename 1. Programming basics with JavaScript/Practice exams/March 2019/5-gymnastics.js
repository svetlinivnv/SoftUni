function gymnastics(input) {

    let country = input[0];
    let type = input[1];

    let complexity = 0;
    let performance = 0;
    let totalGrade = 0;

    switch (country) {
        case 'Russia':
            switch (type) {
                case 'ribbon':
                    complexity = 9.100;
                    performance = 9.400;
                    break;
                case 'hoop':
                    complexity = 9.300;
                    performance = 9.800;
                    break;
                case 'rope':
                    complexity = 9.600;
                    performance = 9.000;
                    break;
            }
            break;
        case 'Bulgaria':
            switch (type) {
                case 'ribbon':
                    complexity = 9.600;
                    performance = 9.400;
                    break;
                case 'hoop':
                    complexity = 9.550;
                    performance = 9.750;
                    break;
                case 'rope':
                    complexity = 9.500;
                    performance = 9.400;
                    break;
            }
            break;
        case 'Italy':
            switch (type) {
                case 'ribbon':
                    complexity = 9.200
                    performance = 9.500;
                    break;
                case 'hoop':
                    complexity = 9.450;
                    performance = 9.350;
                    break;
                case 'rope':
                    complexity = 9.700;
                    performance = 9.150;
                    break;
            }
            break;
    }

    totalGrade = complexity + performance;
    console.log(`The team of ${country} get ${totalGrade.toFixed(3)} on ${type}.`);

    let percentToMax = ((20 - totalGrade) / 20) * 100;

    console.log(`${percentToMax.toFixed(2)}%`);

}

gymnastics(['Bulgaria', 'ribbon']);