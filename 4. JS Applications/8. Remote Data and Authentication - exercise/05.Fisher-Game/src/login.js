function login() {
    const LOGIN_ENDPOINT = 'http://localhost:3030/users/login';
    document.getElementById('logout').style.display = 'none';
    document.querySelector('form').addEventListener('submit', onSubmit);

    function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if (!email || !password) {
            return alert('Please fill in email and password');
        }

        onLogin({ email, password });
    }

    async function onLogin(data) {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(LOGIN_ENDPOINT, options);
        if (!response.ok) {
            return alert('Incorrect username or password');
        }
        const userData = await response.json();

        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = 'index.html';
    }
}

login();