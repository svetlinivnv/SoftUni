// In progress 80/100

function postOffice (input) {
    const [firstPart, secondPart, thirdPart] = input[0].split('|');
    let firstPartCapitals = firstPart.match(/(\$([A-Z])+\$|\#[A-Z]+\#|\%[A-Z]+\%|\*[A-Z]+\*|\&[A-Z]+\&)/g);
    let secondPartValid = secondPart.match(/[0-9]+:[0-9]{2}/g);
    let filteredThird = new Set([...thirdPart.match(/\b[A-Z][a-z][\-*A-Za-z]*\b/g)]);
    let lettersArr = [];
    let output = [];

    firstPartCapitals.forEach(element => {
        if (element[0] === element[element.length - 1]) {
            element = element.substring(1, element.length - 1);
            for (let i = 0; i < element.length; i++) {
                lettersArr.push(String(element[i].charCodeAt(0)));
            }
        }
    });
    lettersArr.forEach(letter => {
        secondPartValid.forEach(element => {
            if (element.includes(letter)) {
                let [ascii, wordLength] = element.split(':');
                wordLength = Number(wordLength);
                ascii = Number(ascii);
                for (let word of filteredThird) {
                    let firstLetterAscii = word[0].charCodeAt(0);
                    if (ascii === firstLetterAscii && word.length === wordLength + 1) {
                        if (!output.includes(word)) {
                            output.push(word);
                        }
                    }
                }
            }            
        }); 
    });
    output.forEach(element => {
        console.log(element);
    });
}

// postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);
postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])