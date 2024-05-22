function fromJsonToHtml(json) {

    let arr = JSON.parse(json);
    let outputArr = ['<table>'];
    outputArr.push(makeKeyRow(arr));
    arr.forEach(obj => outputArr.push(makeValueRow(obj)));
    outputArr.push('</table>');

    


    console.log(arr);
    let myJson = JSON.stringify(arr, null, 2);
    console.log(myJson);


}

fromJsonToHtml(`[{"Name":"Stamat", "Score":5.5},
                 {"Name":"Rumen", "Score":6}]`);