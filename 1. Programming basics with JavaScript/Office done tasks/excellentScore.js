function excellentScore(input) {

    let score = Number(input[0]);
    if (score >= 5.5) {
        console.log("Excellent");
    } else {
        console.log(`Score is ${score}, which is below 5.5`);
    }
}

excellentScore(["4.5"]);