function vacationBooklist(input) {

    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let totalHours = bookPages / pagesPerHour;
    let hoursPerDay = totalHours / days;

    console.log(hoursPerDay);

}

vacationBooklist(["212 ", "20", "2"]);