window.addEventListener('load', solve);

function solve() {
    // Validate input fields
    function validateInputs() {
        const carModel = document.getElementById('car-model').value;
        const carYear = Number(document.getElementById('car-year').value);
        const partName = document.getElementById('part-name').value;
        const partNumber = document.getElementById('part-number').value;
        const condition = document.getElementById('condition').value;

        return carModel && carYear && partName && partNumber && condition &&
            carYear >= 1980 && carYear <= 2023;
    }

    // Clear input fields
    function clearInputs() {
        document.getElementById('car-model').value = '';
        document.getElementById('car-year').value = '';
        document.getElementById('part-name').value = '';
        document.getElementById('part-number').value = '';
        document.getElementById('condition').value = '';
    }

    // Next button click
    document.getElementById('next-btn').addEventListener('click', function (event) {
        event.preventDefault();
        if (validateInputs()) {
            const dataObj = {
                carModel: document.getElementById('car-model').value,
                carYear: document.getElementById('car-year').value,
                partName: document.getElementById('part-name').value,
                partNumber: document.getElementById('part-number').value,
                condition: document.getElementById('condition').value
            };

            const infoList = document.querySelector('.info-list');
            const infoListContent = `<li class="part-content">
                                        <article>
                                            <p>Car Model: ${dataObj.carModel}</p>
                                            <p>Car Year: ${dataObj.carYear}</p>
                                            <p>Part Name: ${dataObj.partName}</p>
                                            <p>Part Number: ${dataObj.partNumber}</p>
                                            <p>Condition: ${dataObj.condition}</p>
                                        </article>
                                        <button class="edit-btn">Edit</button>
                                        <button class="continue-btn">Continue</button>
                                    </li>`;
            infoList.insertAdjacentHTML('beforeend', infoListContent);

            // Clear inputs and disable Next button
            clearInputs();
            document.getElementById('next-btn').disabled = true;

            // Hide complete image and clear the text
            document.getElementById('complete-img').style.visibility = 'hidden';
            document.getElementById('complete-text').textContent = '';
        }
    });

    // Edit and Continue button clicks
    document.addEventListener('click', function (event) {
        if (event.target.className === 'continue-btn') {
            const listItem = event.target.parentNode;
            const article = listItem.querySelector('article');
            const pElements = article.querySelectorAll('p');

            const dataObj = {
                carModel: pElements[0].textContent.split(': ')[1],
                carYear: pElements[1].textContent.split(': ')[1],
                partName: pElements[2].textContent.split(': ')[1],
                partNumber: pElements[3].textContent.split(': ')[1],
                condition: pElements[4].textContent.split(': ')[1]
            };

            const confirmList = document.querySelector('.confirm-list');
            const confirmListContent = `<li class="part-content">
                                            <article>
                                                <p>Car Model: ${dataObj.carModel}</p>
                                                <p>Car Year: ${dataObj.carYear}</p>
                                                <p>Part Name: ${dataObj.partName}</p>
                                                <p>Part Number: ${dataObj.partNumber}</p>
                                                <p>Condition: ${dataObj.condition}</p>
                                            </article>
                                            <button class="confirm-btn">Confirm</button>
                                            <button class="cancel-btn">Cancel</button>
                                        </li>`;
            confirmList.insertAdjacentHTML('beforeend', confirmListContent);
            listItem.remove();
        }
    });


    // Confirm and Cancel button clicks
    document.addEventListener('click', function (event) {
        if (event.target.className === 'confirm-btn') {
            event.target.parentNode.remove();
            document.getElementById('next-btn').disabled = false;
            document.getElementById('complete-img').style.visibility = 'visible';
            document.getElementById('complete-text').textContent = 'Part is Ordered!';
        } else if (event.target.className === 'cancel-btn') {
            event.target.parentNode.remove();
            document.getElementById('next-btn').disabled = false;
        }
    });
}