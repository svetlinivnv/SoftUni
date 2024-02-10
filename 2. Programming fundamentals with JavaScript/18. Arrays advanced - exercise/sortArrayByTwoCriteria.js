function sortArrayByTwoCriteria(input) {

    input.sort((a, b) => {
        let lengthComapre = a.length - b.length;
        return lengthComapre !== 0 ? lengthComapre : a.localeCompare(b);
    })
    console.log(input.join('\n'));
}

// sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);