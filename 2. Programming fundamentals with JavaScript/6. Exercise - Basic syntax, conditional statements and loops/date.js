function calculateNextDay(year, month, day) {
    
    let currentDate = new Date(year, month - 1, day);

    currentDate.setDate(currentDate.getDate() + 1);

    let nextYear = currentDate.getFullYear();
    let nextMonth = currentDate.getMonth() + 1;
    let nextDay = currentDate.getDate();

    let result = `${nextYear}-${nextMonth}-${nextDay}`
    console.log(result);

}

calculateNextDay(2016, 9, 30);