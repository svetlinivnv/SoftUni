function browserHistory(browser, arr) {

    for (let current of arr) {
        let [...currentAsArray] = current.split(' ');
        let command = currentAsArray[0];
        let website = currentAsArray[1];

        switch (command) {
            case 'Open':
                browser['Open Tabs'].push(website);
                browser['Browser Logs'].push(current);
                break;
            case 'Close':
                let closeTabIndex = browser['Open Tabs'].indexOf(website);
                if (closeTabIndex !== -1) {
                    browser['Open Tabs'].splice(closeTabIndex, 1);
                    browser['Recently Closed'].push(website);
                    browser['Browser Logs'].push(current);
                }
                break;
            case 'Clear':
                browser['Open Tabs'] = [];
                browser['Browser Logs'] = [];
                browser['Recently Closed'] = [];
                break;
        }
    }
    console.log(browser['Browser Name']);
    console.log(`Open Tabs: ${browser['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browser['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browser['Browser Logs'].join(', ')}`);
}

// browserHistory({"Browser Name":"Google Chrome",

// "Open Tabs":["Facebook","YouTube","Google Translate"], 

// "Recently Closed":["Yahoo","Gmail"],

// "Browser Logs":[
//     "Open YouTube",
//     "Open Yahoo",
//     "Open Google Translate",
//     "Close Yahoo",
//     "Open Gmail",
//     "Close Gmail",
//     "Open Facebook"]},

// ["Close Facebook", "Open StackOverFlow", "Open Google"]);


browserHistory({
    "Browser Name": "Mozilla Firefox",

    "Open Tabs": ["YouTube"],

    "Recently Closed": ["Gmail",

        "Dropbox"],

    "Browser Logs": ["Open Gmail",

        "Close Gmail", "Open Dropbox",

        "Open YouTube", "Close Dropbox"]
},

    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);