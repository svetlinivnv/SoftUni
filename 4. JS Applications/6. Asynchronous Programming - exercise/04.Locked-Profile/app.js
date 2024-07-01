function lockedProfile() {
    const USERS_URL = 'http://localhost:3030/jsonstore/advanced/profiles';

    async function getUsers() {
        const response = await fetch(USERS_URL);
        const data = await response.json();


    }

    function createProfile(username, email, age) {
        const hrElement = docment.createElement('hr');

        const emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';

        const emailInput = document.createElement('input');
        

    }
}