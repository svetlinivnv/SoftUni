function app() {
    const endpoints = {
        logout: 'http://localhost:3030/users/logout'
    }
    const userBtnsRef = document.getElementById('user');
    const guestBtnsRef = document.getElementById('guest');
    const welcomeRef = document.querySelector('.email span');
    
    let userData = JSON.parse(sessionStorage.getItem('userData'));

    document.getElementById('logout').addEventListener('click', onLogout);
    updateNav ()

    async function onLogout() {   
        if (!userData) {
            return;
        }
        
        const options = {
            method: 'GET',
            headers: {
                'X-authorization': userData.accessToken
            }
        }

        await fetch (endpoints.logout, options);
        sessionStorage.clear();
        userData = JSON.parse(sessionStorage.getItem('userData'));
        updateNav ();
        window.location = 'login.html';

    }
    
    function updateNav () {
        if(userData) {
            welcomeRef.textContent = userData.email;
            userBtnsRef.style.display = 'inline-block';
            guestBtnsRef.style.display = 'none';
        } else {
            welcomeRef.textContent = 'guest';
            userBtnsRef.style.display = 'none';
            guestBtnsRef.style.display = 'inline-block';
        }
    }
}

app();