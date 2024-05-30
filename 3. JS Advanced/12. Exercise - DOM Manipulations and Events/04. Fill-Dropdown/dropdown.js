function addItem() {
    let textEl = document.querySelector('#newItemText');
    let valueEl = document.querySelector('#newItemValue');
    let dropdownEl = document.querySelector('select');

    let text = textEl.value;
    let value = valueEl.value;

    let optionEl = document.createElement('option');
    optionEl.textContent = text;
    optionEl.value = value;

    dropdownEl.append(optionEl);

    textEl.value = '';
    valueEl.value = '';
    textEl.focus();
}