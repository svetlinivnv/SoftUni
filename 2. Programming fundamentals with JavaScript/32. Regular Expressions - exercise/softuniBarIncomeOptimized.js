function softuniBarIncome(input) {
    const pattern = /%(?<customer>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<quantity>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/;
    let total = 0;

    for (let currentLine of input) {
        let current = pattern.exec(currentLine);
        if (current) {
            let { customer, product, quantity, price } = current.groups;
            let purchaseTotal = price * quantity;
            total += purchaseTotal;
            console.log(`${customer}: ${product} - ${purchaseTotal.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

softuniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);

// softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
// '%Peter%<Gum>1.3$',
// '%Maria%<Cola>|1|2.4',
// '%Valid%<Valid>valid|10|valid20$',
// 'end of shift']);