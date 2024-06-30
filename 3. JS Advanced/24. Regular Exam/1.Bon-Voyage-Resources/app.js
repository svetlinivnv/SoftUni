window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const fromDateInput = document.getElementById('from-date');
    const toDateInput = document.getElementById('to-date');
    const infoListElement = document.querySelector('.info-list');
    const confirmListElement = document.querySelector('.confirm-list');
    const h1StatusElement = document.getElementById('status');
    const nextBtn = document.getElementById('next-btn');

    nextBtn.addEventListener('click', nextBtnHandler);

    function isValidDateRange(fromDate, toDate) {
        const startDate = new Date(fromDate);
        const endDate = new Date(toDate);
        return startDate < endDate;
    }

    function nextBtnHandler(e) {
        e.preventDefault();
        const inputs = [
            firstNameInput,
            lastNameInput,
            fromDateInput,
            toDateInput
        ];

        if (inputs.some(input => input.value === '') || !isValidDateRange(fromDateInput.value, toDateInput.value)) {
            return;
        }

        // create element here
        const infoListContentElement = createVacationContentElement(firstNameInput.value, lastNameInput.value, fromDateInput.value, toDateInput.value);
        infoListElement.appendChild(infoListContentElement);

        inputs.forEach(input => {
            input.value = '';
        });

        nextBtn.disabled = true;
    }

    function createVacationContentElement(firstName, lastName, fromDate, toDate) {
        const fullName = `${firstName} ${lastName}`;

        const fullNameElement = document.createElement('h3');
        fullNameElement.textContent = `Name: ${fullName}`;

        const fromDateElement = document.createElement('p');
        fromDateElement.textContent = `From date: ${fromDate}`;

        const toDateElement = document.createElement('p');
        toDateElement.textContent = `From date: ${toDate}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(fullNameElement);
        articleElement.appendChild(fromDateElement);
        articleElement.appendChild(toDateElement);

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('edit-btn');
        editBtnElement.textContent = 'Edit';

        const continueBtnElement = document.createElement('button');
        continueBtnElement.classList.add('continue-btn');
        continueBtnElement.textContent = 'Continue';

        const liVacationContentElement = document.createElement('li');
        liVacationContentElement.classList.add('vacation-content');
        liVacationContentElement.appendChild(articleElement);
        liVacationContentElement.appendChild(editBtnElement);
        liVacationContentElement.appendChild(continueBtnElement);

        // event listeners:
        editBtnElement.addEventListener('click', (e) => {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            fromDateInput.value = fromDate;
            toDateInput.value = toDate;

            document.querySelector('.vacation-content').remove();
            nextBtn.disabled = false;
        });

        continueBtnElement.addEventListener('click', (e) => {
            let confirmListContent = document.querySelector('.vacation-content');

            confirmListContent.querySelector('.edit-btn').remove();
            confirmListContent.querySelector('.continue-btn').remove();

            const confirmBtn = document.createElement('button');
            confirmBtn.classList.add('confirm-btn');
            confirmBtn.textContent = 'Confirm';

            const cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';

            confirmListContent.appendChild(confirmBtn);
            confirmListContent.appendChild(cancelBtn);

            infoListElement.querySelector('.vacation-content').remove();
            confirmListElement.appendChild(confirmListContent);

            //event listeners for confirm / cancel btns:
            confirmBtn.addEventListener('click', (e) => {
                confirmListElement.querySelector('.vacation-content').remove();
                nextBtn.disabled = false;
                h1StatusElement.classList.add('vacation-confirmed');
                h1StatusElement.textContent = 'Vacation Requested';
            });

            cancelBtn.addEventListener('click', (e) => {
                confirmListElement.querySelector('.vacation-content').remove();
                nextBtn.disabled = false;
                h1StatusElement.classList.add('vacation-cancelled');
                h1StatusElement.textContent = 'Cancelled Vacation';
            });

            h1StatusElement.addEventListener('click', (e) => {
                window.location.reload();
            });
        });

        return liVacationContentElement;
    }
}