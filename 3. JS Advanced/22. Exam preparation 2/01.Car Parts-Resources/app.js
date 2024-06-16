window.addEventListener('load', solve);

function solve() {
    const carModelInput = document.getElementById('car-model');
    const carYearInput = document.getElementById('car-year');
    const partNameInput = document.getElementById('part-name');
    const partNumberInput = document.getElementById('part-number');
    const conditionInput = document.getElementById('condition');
    const nextBtn = document.getElementById('next-btn');
    const infoListElement = document.querySelector('.info-list');
    const confirmListElement = document.querySelector('.confirm-list');
    const completeImageElement = document.getElementById('complete-img');
    const completeTextElement = document.getElementById('complete-text');

    nextBtn.addEventListener('click', nextBtnClickHandler);

    function nextBtnClickHandler(e) {
        e.preventDefault();
        const inputs = [
            carModelInput,
            carYearInput,
            partNameInput,
            partNumberInput,
            conditionInput,
        ];

        if (inputs.some(element => element.value === '') || inputs[1].value < 1980 || inputs[1].value > 2023) {
            return;
        }

        const infoListContent = createPartInfoElement(carModelInput.value, carYearInput.value, partNameInput.value, partNumberInput.value, conditionInput.value);
        infoListElement.appendChild(infoListContent);
        inputs.forEach(input => { input.value = ''; });
        nextBtn.setAttribute('disabled', 'disabled');
        completeImageElement.style.visibility = 'hidden';
        completeTextElement.textContent = '';

    }

    function createPartInfoElement(carModel, carYear, partName, partNumber, condition) {
        const carModelElement = document.createElement('p');
        carModelElement.textContent = `Car Model: ${carModel}`;

        const carYearElement = document.createElement('p');
        carYearElement.textContent = `Car Year: ${carYear}`;

        const partNameElement = document.createElement('p');
        partNameElement.textContent = `Part Name: ${partName}`;

        const partNumberElement = document.createElement('p');
        partNumberElement.textContent = `Part Number: ${partNumber}`;

        const conditionElement = document.createElement('p');
        conditionElement.textContent = `Condition: ${condition}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(carModelElement);
        articleElement.appendChild(carYearElement);
        articleElement.appendChild(partNameElement);
        articleElement.appendChild(partNumberElement);
        articleElement.appendChild(conditionElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit-btn');
        editButtonElement.textContent = 'Edit';

        const continueButtonElement = document.createElement('button');
        continueButtonElement.classList.add('continue-btn');
        continueButtonElement.textContent = 'Continue';

        const liPartContentElement = document.createElement('li');
        liPartContentElement.classList.add('part-content');
        liPartContentElement.appendChild(articleElement);
        liPartContentElement.appendChild(editButtonElement);
        liPartContentElement.appendChild(continueButtonElement);

        // add event listeners
        editButtonElement.addEventListener('click', (e) => {
            carModelInput.value = carModel;
            carYearInput.value = carYear;
            partNameInput.value = partName;
            partNumberInput.value = partNumber;
            conditionInput.value = condition;
            editButtonElement.parentElement.remove();
            nextBtn.removeAttribute('disabled');
        });

        continueButtonElement.addEventListener('click', (e) => {
            const confirmListContent = continueButtonElement.parentElement;
            continueButtonElement.parentElement.remove();

            confirmListContent.querySelector('.edit-btn').remove();
            confirmListContent.querySelector('.continue-btn').remove();

            const confirmBtnElement = document.createElement('button');
            confirmBtnElement.classList.add('confirm-btn');
            confirmBtnElement.textContent = 'Confirm';
            confirmListContent.appendChild(confirmBtnElement);

            const cancelBtnElement = document.createElement('button');
            cancelBtnElement.classList.add('cancel-btn');
            cancelBtnElement.textContent = 'Cancel';
            confirmListContent.appendChild(cancelBtnElement);

            confirmListElement.appendChild(confirmListContent);

            confirmBtnElement.addEventListener('click', (e) => {
                e.currentTarget.parentElement.remove();
                nextBtn.removeAttribute('disabled');
                completeImageElement.style.visibility = 'visible';
                completeTextElement.textContent = 'Part is Ordered!';
            });

            cancelBtnElement.addEventListener('click', (e) => {
                e.currentTarget.parentElement.remove();
                nextBtn.removeAttribute('disabled');
            });
        });

        return liPartContentElement;
    }
}