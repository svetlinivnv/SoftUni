function addItem() {
    const inputEl = document.getElementById('newItemText');
    const itemsUlEl = document.getElementById('items');

    const liElement = document.createElement("li");
    liElement.textContent = inputEl.value;
    const deleteBtn = document.createElement("a");
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';

    deleteBtn.addEventListener('click', (event) => liElement.remove());

    liElement.append(deleteBtn);
    itemsUlEl.append(liElement);

    inputEl.value = '';
    inputEl.focus();
}