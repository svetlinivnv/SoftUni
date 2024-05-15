function roadRadar(speed, area) {

    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    let currentLimit = 0;

    switch (area) {
        case 'motorway':
            currentLimit = motorwayLimit; break;
        case 'interstate':
            currentLimit = interstateLimit; break;
        case 'city':
            currentLimit = cityLimit; break;
        case 'residential':
            currentLimit = residentialLimit; break;
    }

    if (speed <= currentLimit) {
        console.log(`Driving ${speed} km/h in a ${currentLimit} zone`);
    } else {
        let difference = speed - currentLimit;
        let status = '';
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${currentLimit} - ${status}`);
    }
}

roadRadar(85, 'city');