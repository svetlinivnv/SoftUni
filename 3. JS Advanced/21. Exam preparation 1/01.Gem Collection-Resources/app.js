window.addEventListener('load', solution);

function solution() {
    const gemInput = document.getElementById('gem-name');
    const colorInput = document.getElementById('color');
    const caratsInput = document.getElementById('carats');
    const priceInput = document.getElementById('price');
    const typeInput = document.getElementById('type');
    const addButton = document.getElementById('add-btn');
    const previewList = document.getElementById('preview-list');
    const collectionList = document.getElementById('collection');

    addButton.addEventListener('click', addButtonClickHandler);

    function addButtonClickHandler(e) {
        const inputElements = [
            gemInput,
            colorInput,
            caratsInput,
            priceInput,
            typeInput
        ];

        if (inputElements.some(element => element.value === '')) {
            return;
        }

        const previewElement = createPreviewElement(
            gemInput.value,
            colorInput.value,
            caratsInput.value,
            priceInput.value,
            typeInput.value
        );

        previewList.appendChild(previewElement);

        // Disable Add Gem button
        e.currentTarget.setAttribute('disabled', 'disabled')

        // Clear inputs
        inputElements.forEach(element => element.value = '');
    }


    function createPreviewElement(name, color, carats, price, type) {
        const articleHeaderElement = document.createElement('h4');
        articleHeaderElement.textContent = name;

        const colorParagraphElement = document.createElement('p');
        colorParagraphElement.textContent = `Color: ${color}`;

        const caratsParagraphElement = document.createElement('p');
        caratsParagraphElement.textContent = `Carats: ${carats}`;

        const priceParagraphElement = document.createElement('p');
        priceParagraphElement.textContent = `Price: ${price}$`;

        const typeParagraphElement = document.createElement('p');
        typeParagraphElement.textContent = `Type: ${type}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(articleHeaderElement);
        articleElement.appendChild(colorParagraphElement);
        articleElement.appendChild(caratsParagraphElement);
        articleElement.appendChild(priceParagraphElement);
        articleElement.appendChild(typeParagraphElement);

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'Save to collection';

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit information';

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-btn');
        cancelButton.textContent = 'Cancel';

        const liElement = document.createElement('li');
        liElement.classList.add('gem-info');

        liElement.appendChild(articleElement);
        liElement.appendChild(saveButton);
        liElement.appendChild(editButton);
        liElement.appendChild(cancelButton);

        // Add event listeners
        editButton.addEventListener('click', (e) => {
            // Load info to input fields
            gemInput.value = name;
            colorInput.value = color;
            caratsInput.value = carats;
            priceInput.value = price;
            typeInput.value = type;
            // Remove preview element from preview list
            e.currentTarget.parentElement.remove();
            // Enable Add gem button
            addButton.removeAttribute('disabled');
        });

        saveButton.addEventListener('click', (e) => {
            // Create element for collection
            const collectionItemParagraph = document.createElement('p');
            collectionItemParagraph.classList.add('collection-item');
            collectionItemParagraph.textContent = `${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;

            const collectionListItem = document.createElement('li');
            collectionListItem.appendChild(collectionItemParagraph);

            // Add element to collection list
            collectionList.appendChild(collectionListItem);

            // Remove preview element from preview list
            e.currentTarget.parentElement.remove();

            // enable add button 
            addButton.removeAttribute('disabled');
        });


        cancelButton.addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove(e);
            addButton.removeAttribute('disabled');
        });

        return liElement;
    }
}