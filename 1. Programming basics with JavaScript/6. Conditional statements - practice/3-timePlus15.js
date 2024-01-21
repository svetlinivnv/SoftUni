function timePlus15(input) {

    let hour = Number(input[0]);
    let minute = Number(input[1]);

    let totalMinutes = hour * 60 + minute + 15;

    let formattedHour = totalMinutes / 60;
    let formattedMinutes = totalMinutes % 60;

    if (Math.floor(formattedHour) > 23) {
        formattedHour = 0;
    }

    if (formattedMinutes < 10) {
        console.log(`${Math.floor(formattedHour)}:0${formattedMinutes}`);
    } else {    
    console.log(`${Math.floor(formattedHour)}:${formattedMinutes}`);
    }

}

timePlus15(["23", "00"]);