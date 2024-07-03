function login() {
    const LOGIN_URL = 'http://localhost:3030/users/login';

    document.querySelector('form').addEventListener('submit', onLogin);

    async function onLogin(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if (sessionStorage.getItem('userData')) {
            alert('Already logged-in');
            return;
        }

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            }, 
            body: JSON.stringify({ email, password} )
        }
        const response = await fetch(LOGIN_URL, options);
        const responseData = await response.json();
        sessionStorage.setItem('userData', JSON.stringify(responseData));
        document.querySelector('#login').style.display = 'none';
        window.location = 'index.html';
    }

}

login();