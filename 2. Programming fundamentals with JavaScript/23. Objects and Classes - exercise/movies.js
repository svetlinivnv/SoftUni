function movies(input) {

    // class Movie {
    //     constructor(movieName, directorName, releaseDate) {
    //         this.name = movieName;
    //         this.director = directorName;
    //         this.date = releaseDate;
    //     }
    // }
    
    const objects = [];
    let movieList = {};

    for (let current of input) {
        let movie = '';
        let directorName = '';
        let releaseDate = '';

        if (current.includes('addMovie')) {
            let movie = current.split('addMovie ').join('');
            movieList.name = movie;

        } else if (current.includes('directedBy')) {
            let array = current.split(' directedBy ');
            movie = array[0];
            directorName = array[1];
            let currentMovie = objects.find((m) => m.name === movie);
            if (currentMovie) {
                currentMovie.director = directorName;
                let index = objects.indexOf(currentMovie);
                objects.slice(index, 1, currentMovie);

            }
        } else {
            let array = current.split(' onDate ');
            movie = array[0];
            releaseDate = array[1];
            let currentMovie = objects.find((m) => m.name === movie);
            if (currentMovie) {
                currentMovie.date = releaseDate;
                let index = objects.indexOf(currentMovie);
                objects.slice(index, 1, currentMovie);
            }
        }
        objects.push(movieList)
        const a = objects.filter((m) => m.name && m.director && m.date);
    }

    console.log(a[1], a[2]);

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