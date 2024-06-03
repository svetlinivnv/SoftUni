function sortArray(array, order) {
    let sortingFunctions = {
        ascending: function (array) {
            array = array.sort((a, b) => a - b);
        },
        descending: function (array) {
            array = array.sort((a, b) => b - a);
        }
    }

    if (order === 'asc') {
        sortingFunctions.ascending(array);
    } else if (order === 'desc') {
        sortingFunctions.descending(array);
    }

    return array;
}


sortArray([14, 7, 17, 6, 8], 'asc');