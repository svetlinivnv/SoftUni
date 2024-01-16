function trekkingMania(input) {

    let groupsCount = Number(input[0]);
    
    let totalClimbers = 0;

    let musalaClimbers = 0;
    let montblancClimbers = 0;
    let kilimandzharoClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;

    for (index = 1; index <= groupsCount; index++) {
    let currentGroupCount = Number(input[index]);
        if (currentGroupCount <= 5) {
            totalClimbers += currentGroupCount;
            musalaClimbers += currentGroupCount;
        } else if (currentGroupCount <= 12) {
            totalClimbers += currentGroupCount;
            montblancClimbers += currentGroupCount;
        } else if (currentGroupCount <= 25) {
            totalClimbers += currentGroupCount;
            kilimandzharoClimbers += currentGroupCount;
        } else if (currentGroupCount <= 40) {
            totalClimbers += currentGroupCount;
            k2Climbers += currentGroupCount;
        } else {
            totalClimbers += currentGroupCount;
            everestClimbers += currentGroupCount;
        }
    }
    console.log(`${((musalaClimbers/totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((montblancClimbers/totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((kilimandzharoClimbers/totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((k2Climbers/totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((everestClimbers/totalClimbers) * 100).toFixed(2)}%`);
}

trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
