function extractText() {
    let itemsNodes = document.querySelectorAll('ul#items li');
    let textArea = document.querySelector('#result');
    console.log(itemsNodes);
    for (item of itemsNodes) {
        let currItemContent = item.textContent;
        textArea.value += currItemContent + '\n';
    }
}