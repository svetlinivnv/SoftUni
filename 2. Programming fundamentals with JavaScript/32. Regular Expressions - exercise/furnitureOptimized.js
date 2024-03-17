function furniture (data) {
    const pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let price = 0;

    console.log('Bought furniture:');
    for (let line of data) {
        if (pattern.test(line)) {
            let product = pattern.exec(line);
            let currPrice = Number(product.groups.price) * Number(product.groups.quantity);
            price += currPrice;
            console.log(product.groups.name);
        }
    }
    console.log(`Total money spend: ${price.toFixed(2)}`);
}

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']);