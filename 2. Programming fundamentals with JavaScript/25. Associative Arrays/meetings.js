function meetings(input) {

    let meetList = {};

    input.forEach(meeting => {
        let [day, name] = meeting.split(' ');
        if (!meetList.hasOwnProperty(day)) {
            meetList[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    });

    for (let meeting in meetList) {
        console.log(`${meeting} -> ${meetList[meeting]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);