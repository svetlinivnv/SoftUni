function movies(input) {

    const movies = [];

    for (let current of input) {

        if (current.includes('addMovie')) {
            let name = current.split('addMovie ').join('');
            let movieObject = { name: name };
            movies.push(movieObject);

        } else if (current.includes('directedBy')) {
            let array = current.split(' directedBy ');
            let name = array[0];
            director = array[1];

            let movieFound = movies.find(m => m.name === name);
            if (movieFound) {
                movieFound.director = director;
            }

        } else {
            let array = current.split(' onDate ');
            let name = array[0];
            date = array[1];
            let movieFound = movies.find(m => m.name === name);
            if (movieFound) {
                movieFound.date = date;
            }
        }
    }

    let filteredMovies = movies.filter(m => m.name && m.director && m.date);
    for (let current of filteredMovies) {
        let formatted = JSON.stringify(current);
        console.log(formatted);
    }

}
movies([

    'addMovie Fast and Furious',

    'addMovie Godfather',

    'Inception directedBy Christopher Nolan',

    'Godfather directedBy Francis Ford Coppola',

    'Godfather onDate 29.07.2018',

    'Fast and Furious onDate 30.07.2018',

    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen'

]);