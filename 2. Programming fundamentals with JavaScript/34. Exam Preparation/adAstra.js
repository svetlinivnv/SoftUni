function adAstra(input) {
    let pattern = /([\|#])(?<food>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let exec = pattern.exec(input);
    let totalKcal = 0;
    let output = [];

    while (exec) {
        let food = exec.groups.food;
        let date = exec.groups.date;
        let calories = Number(exec.groups.calories);
        totalKcal += calories;
        let currOutputData = `Item: ${food}, Best before: ${date}, Nutrition: ${calories}`;
        output.push(currOutputData);
        exec = pattern.exec(input);
    }
    console.log(`You have food to last you for: ${Math.floor(totalKcal / 2000)} days!`);
    output.forEach(element => console.log(element));
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
// adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
// adAstra(['||Apples|08/10/20|200||']);




// let pattern = /[#\|](?<food>[A-Za-z ]+)[#\|](?<date>[0-9]{2}[\/][0-9]{2}[\/][0-9]{2})[#\|](?<calories>\d+)[#\|]/g;