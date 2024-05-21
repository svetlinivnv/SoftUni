function townsToJson(input) {
    let result = [];
    input.shift();
    for (row of input) {
        let [town, latitude, longitude] = row.split(' | ')
        town = town.substring(2);
        longitude = longitude.substring(0, longitude.length - 2);

        let tempObj = {
            Town: town,
            Latitude: Number(parseFloat(latitude).toFixed(2)),
            Longitude: Number(parseFloat(longitude).toFixed(2)),
        }
        result.push(tempObj);
    }

    let resultJson = JSON.stringify(result);
    console.log(resultJson);
}

townsToJson(['| Town | Latitude | Longitude |',
             '| Sofia | 42.696552 | 23.32601 |',
             '| Beijing | 39.913818 | 116.363625 |']);