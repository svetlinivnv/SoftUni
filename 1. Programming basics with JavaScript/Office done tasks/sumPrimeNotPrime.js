function sumPrimeNotPrime(input) {
  let index = 0;
  let command = input[index];

  let primeSum = 0;
  let notPrimeSum = 0;

  while (command != "stop") {
    let currentNumber = Number(input[index]);
    index++;
    command = input[index];

    if (currentNumber < 0) {
      console.log("Number is negative.");
      continue;
    } else {
        let isPrime = true;
      for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
        if (currentNumber % i === 0) {
          isPrime = false;
          break;
        } 
      }
      if (isPrime) {
        primeSum += currentNumber;
      } else {
        notPrimeSum += currentNumber;
      }

    }
  }
  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${notPrimeSum}`);
}

sumPrimeNotPrime(["3", "9", "0", "7", "19", "4", "stop"]);

// sumPrimeNotPrime(["30",

// "83",

// "33",

// "-1",

// "20",

// "stop"]);
