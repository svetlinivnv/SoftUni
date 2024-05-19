function sortAnArrayByTwoCriteria(array) {

    let sortedArray = array.sort((a, b) => {
        let result = a.length - b.length;
        if (result === 0) {
            result = a.localeCompare(b);
        }
        return result;
    })
    sortedArray.forEach(element => {
        console.log(element);
    });
}

sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);