function register() {
    const REGISTER_URL = 'http://localhost:3030/users/register';
    document.querySelector('form').addEventListener('submit', onSubmit);
    
    function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePassword = formData.get('rePass')

        if (!email || !password || password !== rePassword) {
            return alert('Error');
        }
        
        registerUser({ email, password });
    }

    async function registerUser(data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(REGISTER_URL, options);
        const responseData = await response.json();

        if (!response.ok) {
            alert(responseData.message);
            return;
        }

        sessionStorage.setItem('userData', JSON.stringify(responseData));
        window.location = 'index.html';
    }

}

register();