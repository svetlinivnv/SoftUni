window.addEventListener("load", solve);

function solve() {
    const nameInput = document.getElementById('snowman-name');
    const heightInput = document.getElementById('snowman-height');
    const locationInput = document.getElementById('location');
    const creatorInput = document.getElementById('creator-name');
    const specialAttributeInput = document.getElementById('special-attribute');
    const snowmanPreviewElement = document.querySelector('.snowman-preview');
    const yourSnowmanElement = document.querySelector('.snow-list');
    const mainElement = document.getElementById('hero');
    const backImgElement = document.getElementById('back-img');
    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', addBtnHandler);

    function addBtnHandler(e) {
        e.preventDefault();
        const inputs = [
            nameInput,
            heightInput,
            locationInput,
            creatorInput,
            specialAttributeInput
        ]

        if (inputs.some(input => input.value === '')) {
            return;
        }

        const snowmanPreviewContent = createSnowmanPreviewElement(nameInput.value, heightInput.value, locationInput.value, creatorInput.value, specialAttributeInput.value);
        snowmanPreviewElement.appendChild(snowmanPreviewContent);
        inputs.forEach(input => {
            input.value = '';
        });

        addBtn.setAttribute('disabled', 'disabled');
    }

    function createSnowmanPreviewElement(name, height, location, creator, attribute) {
        const nameElement = document.createElement('p');
        nameElement.textContent = `Name: ${name}`;
        
        const heightElement = document.createElement('p');
        heightElement.textContent = `Height: ${height}`;

        const locationElement = document.createElement('p');
        locationElement.textContent = `Location: ${location}`;

        const creatorElement = document.createElement('p');
        creatorElement.textContent = `Creator: ${creator}`;

        const attributeElement = document.createElement('p');
        attributeElement.textContent = `Attribute: ${attribute}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(nameElement);
        articleElement.appendChild(heightElement);
        articleElement.appendChild(locationElement);
        articleElement.appendChild(creatorElement);
        articleElement.appendChild(attributeElement);

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('edit-btn');
        editBtnElement.textContent = 'Edit';

        const nextBtnElement = document.createElement('button');
        nextBtnElement.classList.add('next-btn');
        nextBtnElement.textContent = 'Next';

        const btnContainerElement = document.createElement('div');
        btnContainerElement.classList.add('btn-container');
        btnContainerElement.appendChild(editBtnElement);
        btnContainerElement.appendChild(nextBtnElement);
        
        const snowmanInfoElement = document.createElement('li');
        snowmanInfoElement.classList.add('snowman-info');
        snowmanInfoElement.appendChild(articleElement);
        snowmanInfoElement.appendChild(btnContainerElement);

        //event listeners:
        editBtnElement.addEventListener('click', (e) => {
            nameInput.value = name;
            heightInput.value = height;
            locationInput.value = location;
            creatorInput.value = creator;
            specialAttributeInput.value = attribute;

            document.querySelector('.snowman-info').remove();
            
            addBtn.removeAttribute('disabled');
        });

        nextBtnElement.addEventListener('click', (e) => {
            let snowmanContentElement = document.querySelector('.snowman-info');

            snowmanContentElement.querySelector('.btn-container').remove();

            const sendBtnElement = document.createElement('button');
            sendBtnElement.classList.add('send-btn');
            sendBtnElement.textContent = 'Send';

            snowmanContentElement.querySelector('article').appendChild(sendBtnElement);
            snowmanContentElement.classList.add('snowman-content');
            snowmanContentElement.classList.remove('snowman-info');

            yourSnowmanElement.appendChild(snowmanContentElement);

            //even listeners:
            sendBtnElement.addEventListener('click', (e) => {
                mainElement.remove();

                const backButton = document.createElement('button');
                backButton.classList.add('back-btn');
                backButton.textContent = 'Back';
                document.querySelector('.body').appendChild(backButton);

                backImgElement.removeAttribute('hidden');

                backButton.addEventListener('click', (e) => {
                    window.location.reload();
                });
            });
        });
        return snowmanInfoElement;
    }
}