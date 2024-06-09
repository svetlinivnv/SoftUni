function tickets(list, sortBy) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let result = [];
    list.forEach(ticket => {
        let [destination, price, status] = ticket.split('|');
        result.push(new Ticket(destination, price, status));
    });

    let sortedResult = result.sort((a, b) => {
        if (sortBy === 'price') {
            return a[sortBy] - b[sortBy];
        } else {
            return a[sortBy].localeCompare(b[sortBy]);
        }
    });

    return sortedResult;
}

let output = tickets(['Philadelphia|94.20|available',

    'New York City|95.99|available',
    
    'New York City|95.99|sold',
    
    'Boston|126.20|departed'],
    
    'status');

    console.log(output);