function cinemaTickets(input) {
  let studentTickets = 0;
  let standardTickets = 0;
  let kidTickets = 0;

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Finish") {
    let movieTitle = command;
    let totalSeats = Number(input[index]);
    index++;

    let seatsTaken = 0;

    let command1 = input[index];
    index++;

    while (command1 !== "End") {
      let ticketType = command1;
      switch (ticketType) {
        case "student":
          studentTickets++;
          break;
        case "standard":
          standardTickets++;
          break;
        case "kid":
          kidTickets++;
          break;
      }

      seatsTaken++;

      if (seatsTaken === totalSeats) {
        break;
      }

      command1 = input[index];
      index++;
    }

    console.log(
      `${movieTitle} - ${((seatsTaken / totalSeats) * 100).toFixed(2)}% full.`
    );

    command = input[index];
    index++;
  }

  let totalTickets = studentTickets + standardTickets + kidTickets;
  console.log(`Total tickets: ${totalTickets}`);
  console.log(
    `${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(
    `${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`
  );
}

// cinemaTickets([
//   "Taxi",
//   "10",
//   "standard",
//   "kid",
//   "student",
//   "student",
//   "standard",
//   "standard",
//   "End",
//   "Scary Movie",
//   "6",
//   "student",
//   "student",
//   "student",
//   "student",
//   "student",
//   "student",
//   "Finish",
// ]);

cinemaTickets([
  "The Matrix",

  "20",

  "student",

  "standard",

  "kid",

  "kid",

  "student",

  "student",

  "standard",

  "student",

  "End",

  "The Green Mile",

  "17",

  "student",

  "standard",

  "standard",

  "student",

  "standard",

  "student",

  "End",

  "Amadeus",

  "3",

  "standard",

  "standard",

  "standard",

  "Finish",
]);
