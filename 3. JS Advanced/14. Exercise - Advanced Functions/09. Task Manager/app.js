function solve() {
    const taskEl = document.querySelector('#task');
    const descriptionEl = document.querySelector('#description');
    const dueDateEl = document.querySelector('#date');
    const addBtnEl = document.querySelector('#add');

    const openEl = document.querySelector('section:nth-of-type(2) div:nth-of-type(2)');
    const inProgressEl = document.querySelector('section:nth-of-type(3) div:nth-of-type(2)');
    const completeEl = document.querySelector('section:nth-of-type(4) div:nth-of-type(2)');

    function clearInputs() {
        taskEl.value = '';
        descriptionEl.value = '';
        dueDateEl.value = '';
        taskEl.focus();
    }

    addBtnEl.addEventListener('click', createTask);

    function createTask(event) {
        event.preventDefault();
        if (taskEl.value && descriptionEl.value && dueDateEl.value) {
            let articleEl = document.createElement('article');
            let h3El = document.createElement('h3');
            let p1El = document.createElement('p');
            let p2El = document.createElement('p');
            let divContainer = document.createElement('div');
            divContainer.classList.add("flex");
            h3El.textContent = taskEl.value;
            p1El.textContent = `Description: ${descriptionEl.value}`;
            p2El.textContent = `Due Date: ${dueDateEl.value}`;
            articleEl.append(h3El, p1El, p2El);
            let btn1 = createButton("green", "Start", startTask);
            let btn2 = createButton("red", "Delete", deleteTask);
            divContainer.append(btn1, btn2);
            articleEl.append(divContainer);
            openEl.append(articleEl);
            clearInputs();
        }
    }

    function createButton(addClass, text, handler) {
        let btn = document.createElement('button');
        btn.textContent = text;
        btn.classList.add(addClass);
        btn.addEventListener('click', handler);
        return btn;
    }

    function startTask(event) {
        let container = event.target.parentElement;
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        let delBtn = createButton("red", "Delete", deleteTask);
        let finishBtn = createButton("orange", "Finish", finishTask);
        container.append(delBtn, finishBtn);
        let elToMove = container.parentElement;
        inProgressEl.append(elToMove);
    }

    function deleteTask(event) {
        let elToDelete = event.target.parentElement.parentElement;
        elToDelete.remove();
    }

    function finishTask(event) {
        let container = event.target.parentElement;
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        let elToMove = container.parentElement;
        elToMove.querySelector('div').remove();
        completeEl.append(elToMove);
    }
}