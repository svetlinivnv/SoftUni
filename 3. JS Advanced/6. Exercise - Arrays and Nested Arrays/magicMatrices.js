function magicMatrices(matrice) {

    for (let i = 0; i < matrice.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < matrice[i].length; j++) {
            rowSum += matrice[i][j];
        }
        console.log(rowSum);
    }




}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);