function furniture(input) {
    let pattern = />>[A-Z][A-z]{1,}<<[0-9]{1,}[\.|0-9|\!]{0,}\!{1,1}[0-9]{1,}/;
    let totalSpent = 0;

    console.log('Bought furniture:');
    for (let purchase of input) {
        if (pattern.test(purchase)) {
            let [item, priceQuantity] = purchase.split('<<');
            let [price, quantity] = priceQuantity.split('!');
                totalSpent += price * parseInt(quantity);
                console.log(item.substring(2));
        }
    }
    console.log(`Total money spend: ${totalSpent.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5'," ", 'Purchase']);
// furniture(['>>Laptop<<312.2323!3', '>>TV<<300.21314!5', '>Invalid<<!5', '>>TV<<300.21314!20', '>>Invalid<!5', '>>TV<<30.21314!5', '>>Invalid<<!!5', 'Purchase']);
// furniture(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase']);