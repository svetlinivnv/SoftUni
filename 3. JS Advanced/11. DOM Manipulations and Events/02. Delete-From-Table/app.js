function deleteByEmail() {
    let rows = document.querySelectorAll('tbody td:nth-of-type(even)');
    let input = document.querySelector('input[name="email"]');
    let result = document.getElementById('result');

    let searchedEmail = input.value;

    for (let row of rows) {
        let email = row.textContent;

        if (email === searchedEmail) {
            row.parentElement.remove();
            result.textContent = 'Deleted.'
            break;
        } else {
            result.textContent = 'Not found.'
        }
    }

    input.value = '';

    setTimeout(() => {
        result.textContent = '';
    }, 3000);

    input.focus();
}