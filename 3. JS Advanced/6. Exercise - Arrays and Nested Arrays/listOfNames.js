function listOfNames(list) {

    let sortedList = list.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < sortedList.length; i++) {
        console.log(`${i + 1}.${sortedList[i]}`);
    }
}


listOfNames(["John", "Bob", "Christina", "Ema"]);