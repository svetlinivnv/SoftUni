function stringLength (str1, str2, str3) {

    let lengthSum = 0;
    lengthSum += str1.length;
    lengthSum += str2.length;
    lengthSum += str3.length;
    console.log(lengthSum);
    let avgLength = Math.floor(lengthSum/3);
    console.log(avgLength);
}

stringLength('chocolate', 'ice cream', 'cake');