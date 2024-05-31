function solve() {
    const inputArea = document.querySelector('#exercise textarea');
    const resultArea = document.querySelector('#exercise textarea:last-of-type');
    const generateBtn = document.querySelector('#exercise button');
    const tbodyEl = document.querySelector('tbody');
    const buyBtn = document.querySelector('#exercise button:last-of-type');

    // Generate items:
    function generateItem() {
        const input = JSON.parse(inputArea.value);
        input.forEach(item => {
            inputArea.value = '';
            const { name, img, price, decFactor } = item;
            let tr = document.createElement('tr');
            tr.innerHTML = `<td><image src="${img}"></td>
                            <td><p>${name}</p></td>
                            <td><p>${price}</p></td>
                            <td><p>${decFactor}</p></td>
                            <td><input type="checkbox"></td>`;
            tbodyEl.append(tr);
        });
    }

    // Buy functionality:
    function buyFunctionality() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        let boughtNames = [];
        let totalPrice = 0;
        let decorationTotal = 0;
        let counter = 0;

        checkboxes.forEach(cb => {
            if (cb.checked) {
                let row = cb.parentElement.parentElement;
                let rowChildren = row.children;
                let name = rowChildren[1].textContent;
                let price = Number(rowChildren[2].textContent);
                let dFactor = Number(rowChildren[3].textContent);
                boughtNames.push(name);
                totalPrice += price;
                decorationTotal += dFactor;
                counter++;
            }
        });

        if (boughtNames.length > 0) {
            resultArea.value = `Bought furniture: ${boughtNames.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decorationTotal / counter}`
        } else {
            resultArea.value = '';
        }
    }

    //Event listeners:
    generateBtn.addEventListener('click', generateItem);
    buyBtn.addEventListener('click', buyFunctionality);
}