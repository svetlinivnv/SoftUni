function attachEventsListeners() {
    const convertBtns = document.querySelectorAll('input[type=button]');

    convertBtns.forEach(button => {
        button.addEventListener('click', (event) => {
            const parent = button.parentElement;
            const inputElement = parent.querySelector('input[type=text]');
            const inputType = inputElement.id;
            const input = inputElement.value;

            let timeInSeconds = 0;

            if (inputType === 'days') {
                timeInSeconds = input * 24 * 60 * 60;
            } else if (inputType === 'hours') {
                timeInSeconds = input * 60 * 60;
            } else if (inputType === 'minutes') {
                timeInSeconds = input * 60;
            } else if (inputType === 'seconds') {
                timeInSeconds = input;
            }

            let days = timeInSeconds / 24 / 60 / 60;
            let hours = timeInSeconds / 60 / 60;
            let minutes = timeInSeconds / 60;
            let seconds = timeInSeconds;

            document.getElementById('days').value = days;
            document.getElementById('hours').value = hours;
            document.getElementById('minutes').value = minutes;
            document.getElementById('seconds').value = seconds;

        });
    });
}