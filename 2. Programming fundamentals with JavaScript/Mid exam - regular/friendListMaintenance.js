function friendListMaintenance(input) {

    let friendsList = input.shift().split(',').map(name => name.trim());
    let blacklistedNames = 0;
    let lostNames = 0;

    for (let current of input) {
        let [command, ...arr] = current.split(' ');
        switch (command) {
            case 'Blacklist':
                if (friendsList.includes(arr[0])) {
                    let index = friendsList.indexOf(arr[0]);
                    friendsList[index] = 'Blacklisted';
                    console.log(`${arr[0]} was blacklisted.`);
                    blacklistedNames++;
                } else console.log(`${arr[0]} was not found.`);
                break;
            case 'Error':
                let errorIndex = +arr[0];
                if (errorIndex >= 0 && errorIndex < friendsList.length) {
                    if (friendsList[errorIndex] !== 'Lost' && friendsList[errorIndex] !== 'Blacklisted') {
                        console.log(`${friendsList[errorIndex]} was lost due to an error.`);
                        friendsList[errorIndex] = 'Lost';
                        lostNames++;
                    }
                }
                break;
            case 'Change':
                changeIndex = +arr[0];
                if (changeIndex >= 0 && changeIndex < friendsList.length) {
                    console.log(`${friendsList[changeIndex]} changed his username to ${arr[1]}.`);
                    friendsList[changeIndex] = arr[1];
                }
                break;
        }
    }
    console.log(`Blacklisted names: ${blacklistedNames}`);
    console.log(`Lost names: ${lostNames}`);
    console.log(friendsList.join(' '));
}

// friendListMaintenance(["Mike, John, Eddie",
// "Blacklist Mike",
// "Error 0",
// "Report"]);

friendListMaintenance(["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report"]);

// friendListMaintenance(["Mike, John, Eddie, William",
// "Blacklist Maya",
// "Error 1",
// "Change 4 George",
// "Report"]);