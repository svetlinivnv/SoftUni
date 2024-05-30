function lockedProfile() {
    const users = document.querySelectorAll('div .profile');

    users.forEach(user => {

        const lock = user.querySelector('input[value="lock"');
        const unlock = user.querySelector('input[value="unlock"');

        const hiddenFields = user.querySelector('div[id$="HiddenFields"]');
        const showMore = user.querySelector('button');

        //Handle radio buttons:
        lock.addEventListener('click', (event) => {
            if (!lock.checked) {
                unlock.checked = false;
                lock.checked = true;
            }
        });
        unlock.addEventListener('click', (event) => {
            if (!unlock.checked) {
                lock.checked = false;
                unlock.checked = true;
            }
        });

        //Handle show more:
        showMore.addEventListener('click', (event) => {
            if (!lock.checked) {
                hiddenFields.style.display = hiddenFields.style.display === 'block' ? 'none' : 'block';
                showMore.textContent = showMore.textContent === 'Show more' ? 'Hide it' : 'Show more';
            }
        });
    });
}