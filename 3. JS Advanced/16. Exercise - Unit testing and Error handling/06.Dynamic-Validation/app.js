function validate() {
    const validateEmail = /^[a-z]+@[a-z]+.[a-z]+$/;
    const input = document.querySelector('#email');

    input.addEventListener('change', () => {
        if (!validateEmail.test(input.value)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
}