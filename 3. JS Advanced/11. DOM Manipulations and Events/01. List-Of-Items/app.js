function addItem() {
    const inputEl = document.getElementById('newItemText');
    const itemsUlEl = document.getElementById('items');

    const liElement = document.createElement("li");
    liElement.textContent = inputEl.value;

    itemsUlEl.append(liElement);
    
    inputEl.value = '';
    inputEl.focus();
}