function worldTour(input) {
    let string = input.shift();
    for (let current of input) {
        let [command, first, second] = current.split(":");

        if (command !== "Travel") {
            switch (command) {
                case "Add Stop":
                    if (first >= 0 && first < string.length) {
                        string =
                            string.substring(0, +first) + second + string.substring(+first);
                    }
                    break;
                case "Remove Stop":
                    if (
                        first >= 0 &&
                        first < string.length &&
                        second >= 0 &&
                        second < string.length
                    ) {
                        string =
                            string.substring(0, +first) + string.substring(+second + 1);
                        break;
                    }
                case "Switch":
                    string = string.split(first).join(second);
            }
            console.log(string);
        } else {
            console.log(`Ready for world tour! Planned stops: ${string}`);

        }        
    }
}

worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel",
]);
