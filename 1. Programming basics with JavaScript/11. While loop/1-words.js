function words(input) {

    let index = 0;
    let word = input[0];
    let currentWord = word;

    while (currentWord != 'Stop') {
        console.log(currentWord);
        index++;
        currentWord = input[index];
    }
}

words(["Nakov",

"SoftUni",

"Sofia",

"Bulgaria",

"SomeText",

"Stop",

"AfterStop",

"Europe",

"HelloWorld"]);