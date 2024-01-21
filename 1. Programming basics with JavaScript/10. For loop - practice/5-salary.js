function salary(input) {

    let tabsOpen = Number(input[0]);
    let salary = Number(input[1]);

    for (i = 2; i <= tabsOpen + 2; i++) {
        let currentTab = input[i];

        if (currentTab === 'Facebook') {
            salary -= 150;
        } else if (currentTab === 'Instagram') {
            salary -= 100;
        } else if (currentTab === 'Reddit') {
            salary -= 50;
        }

        if (salary <= 0) {
            console.log('You have lost your salary.');
            return;
        }
    }
    
        console.log(`${salary.toFixed(0)}`);

}


salary(["10", "7150", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
//salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);