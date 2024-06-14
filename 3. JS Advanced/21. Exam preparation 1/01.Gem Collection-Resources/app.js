window.addEventListener('load', solution);

function solution() {
    const addBtn = document.querySelector('#add-btn');
    const gemName = document.querySelector('#gem-name');
    const gemColor = document.querySelector('#color');
    const gemCarats = document.querySelector('#carats');
    const gemPrice = document.querySelector('#price');
    const gemType = document.querySelector('#type');
    const previewList = document.querySelector('#preview-list');
    const collection = document.querySelector('#collection');

    function onClick() {
        let isComplete = true;
        let inputs = []
        inputs.push(gemName, gemColor, gemCarats, gemPrice, gemType);
        let infoObj = {
            name: gemName.value,
            color: gemColor.value,
            carats: gemCarats.value,
            price: gemPrice.value,
            type: gemType.value,
        }
        // Check if form is complete
        let values = Object.values(infoObj);
        values.forEach(value => {
            if (value === '') {
                isComplete = false;
            }
        });

        // isComplete handling
        if (isComplete) {
            let previewContent = `<li class="gem-info">
                                    <article>
                                        <h4>${infoObj.name}</h4>
                                        <p>Color: ${infoObj.color}</p>
                                        <p>Carats: ${infoObj.carats}</p>
                                        <p>Price: ${infoObj.price}$</p>
                                        <p>Type: ${infoObj.type}</p>
                                    </article>
                                    <button class="save-btn">Save to Collection</button>
                                    <button class="edit-btn">Edit information</button>
                                    <button class="cancel-btn">Cancel</button>
                                  </li>`
            previewList.innerHTML = previewContent;
            // form handling on complete
            isComplete = false;
            addBtn.disabled = true;
            for (let input of inputs) {
                input.value = '';
            }

            // Handle preview buttons
            const saveBtn = document.querySelector('.save-btn');
            const editBtn = document.querySelector('.edit-btn');
            const cancelBtn = document.querySelector('.cancel-btn');
            const previewElement = document.querySelector('.gem-info');

            // Edit button
            editBtn.addEventListener('click', () => {
                addBtn.disabled = false;
                previewElement.remove();
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = values[i];
                }
            });

            // Save to collection button
            saveBtn.addEventListener('click', () => {
                console.log(collection.innerHTML);
                addBtn.disabled = false;
                previewElement.remove();
                let collectionItem = `<li>
                                        <p class="collection-item">${infoObj.name} - Color: ${infoObj.color}/
                                        Carats: ${infoObj.carats}/ Price: ${infoObj.price}$/ 
                                        Type: ${infoObj.type}</p>
                                      </li>`
                collection.innerHTML += collectionItem;
            });

            // Cancel item from Preview
            cancelBtn.addEventListener('click', () => {
                addBtn.disabled = false;
                previewElement.remove();
            });
        }
    }
    addBtn.addEventListener('click', onClick);
}