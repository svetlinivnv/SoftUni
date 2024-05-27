function solve() {
    let textInput = document.getElementById('input').value;
    let outputElement = document.getElementById('output');
    outputElement.innerHTML = '';

    let splittedInput = textInput.split('.')
    splittedInput = splittedInput.map((sentence) => sentence += '.');


    let paragraphAcc = '';
    let sentenceCounter = 0;

    for (let i = 0; i < splittedInput.length; i++) {
        let sentence = splittedInput[i].trim();
        if (sentence.length > 1) {
            paragraphAcc += `${sentence}`;
            sentenceCounter++;
        }

        if (sentenceCounter === 3 || i === splittedInput.length - 1 && paragraphAcc.length > 0) {
            outputElement.innerHTML += `<p>${paragraphAcc}</p>`;
            paragraphAcc = '';
            sentenceCounter = 0;
        }
    }
}