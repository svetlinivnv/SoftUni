function lunchBreak(input) {

    let title = input[0];
    let length = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = (1 / 8) * breakTime;
    let restTime = (1 / 4) * breakTime;

    let freeTime = breakTime - (lunchTime + restTime);

    if (freeTime >= length) {
        console.log(`You have enough time to watch ${title} and left with ${Math.ceil(freeTime - length)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${title}, you need ${Math.ceil(length - freeTime)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones",

"60",

"96"]);