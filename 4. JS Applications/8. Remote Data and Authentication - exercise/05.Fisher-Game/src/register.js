function register() {
    const REGISTER_ENDPOINT = 'http://localhost:3030/users/register';

    document.getElementById('logout').style.display = 'none';
    document.querySelector('form').addEventListener('submit', onSubmit);

    function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePassword = formData.get('rePass');

        if (!email || !password || password !== rePassword) {
            return alert('Incorrect data');
        }

        onRegister({ email, password });
    }

    async function onRegister(data) {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(REGISTER_ENDPOINT, options);
        if (!response.ok) {
            return alert('Error');
        }
        const responseData = await response.json();

        sessionStorage.setItem('userData', JSON.stringify(responseData));
        window.location = 'index.html';
    }
}

register();