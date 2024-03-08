function cutAndReverse(input) {
    const stringLength = input.length;
    let half1 = input.slice(0, stringLength / 2);
    let half2 = input.slice(stringLength / 2);
    let half1Reversed = half1.split('').reverse().join('');
    let half2Reversed = half2.split('').reverse().join('');

    console.log(half1Reversed);
    console.log(half2Reversed);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');