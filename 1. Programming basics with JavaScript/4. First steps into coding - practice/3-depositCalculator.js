function depositCalculator(input) {
    
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterestPercent = Number(input[2]) / 100;
    
    let finalSum = depositSum + depositTerm * ((depositSum * annualInterestPercent) / 12);

    console.log(finalSum);
}

depositCalculator(["200", "3", "5.7"]);