function validate() {
    let regex = /[a-z]+@[a-z]+.[a-z]+/g;
    let emailInput = document.getElementById('email');

    emailInput.addEventListener('change', (event) => {
        emailInput.classList.remove('error');
        let input = emailInput.value;
        let isValid = regex.test(input);
        if (!isValid) {
            emailInput.classList.add('error');
            console.log('isInvalid');
        }
    });
}