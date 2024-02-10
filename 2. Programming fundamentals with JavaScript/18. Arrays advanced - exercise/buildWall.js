function buildWall(heights) {
    let cubicYardsPerFoot = 195;
    let costPerCubicYard = 1900;

    let days = 0;
    let concreteUsedPerDay = [];

    while (heights.some(h => h < 30)) {
        let dailyConcrete = 0;

        for (let i = 0; i < heights.length; i++) {
            if (heights[i] < 30) {
                heights[i]++;
                dailyConcrete += cubicYardsPerFoot;
            }
        }
        concreteUsedPerDay.push(dailyConcrete);
        days++;
    }

    let totalCost = concreteUsedPerDay.reduce((acc, curr) => acc + curr, 0) * costPerCubicYard;
    
    console.log(concreteUsedPerDay.join(', '));
    console.log(`${totalCost} pesos`);
}

buildWall([17]);