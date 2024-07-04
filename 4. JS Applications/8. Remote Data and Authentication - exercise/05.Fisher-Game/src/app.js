function app() {
    const endpoints = {
        logout: 'http://localhost:3030/users/logout',
        listCatches: 'http://localhost:3030/data/catches',
        newCatch: 'http://localhost:3030/data/catches',
        updateCatch: 'http://localhost:3030/data/catches/',
        deleteCatch: 'http://localhost:3030/data/catches/'
    }

    let userData = JSON.parse(sessionStorage.getItem('userData'));
    const logoutBtnRef = document.querySelector('#logout');
    const welcomeUser = document.querySelector('.email span');
    const addForm = document.querySelector('form');
    logoutBtnRef.addEventListener('click', onLogout);
    addForm.addEventListener('submit', submitCatch);
    document.querySelector('.load').addEventListener('click', loadCatches);

    loadCatches();
    userCheck();
    btnsHandler();

    async function onLogout() {
        const options = {
            method: 'GET',
            headers: {
                'X-Authorization': userData.accessToken
            }
        }

        const response = await fetch(endpoints.logout, options);

        if (!response.ok) {
            return alert('Error logging out');
        }

        sessionStorage.removeItem('userData');
        userData = '';
        window.location = 'index.html';
        userCheck();
    }

    function userCheck() {
        if (userData) {
            document.querySelector('#guest').style.display = 'none';
            document.querySelector('#user').style.display = 'inline-block';
            welcomeUser.textContent = userData.email;
            document.querySelector('.add').disabled = false;

        } else {
            document.querySelector('#guest').style.display = 'inline-block';
            document.querySelector('#user').style.display = 'none';
            welcomeUser.textContent = 'guest';
            document.querySelector('.add').disabled = true;
        }
    }

    async function loadCatches() {
        const catchesEl = document.querySelector('#catches');
        catchesEl.innerHTML = '';
        const response = await fetch(endpoints.listCatches);
        if (!response.ok) {
            return alert('Failed fatching catches');
        }
        const catches = await response.json();
        catches.forEach(element => {
            const divCatchEl = document.createElement('div');
            divCatchEl.classList.add('catch');
            divCatchEl.innerHTML = createCatch(element);
            catchesEl.appendChild(divCatchEl);
        });
        btnsHandler();
    }

    function createCatch(data) {
        const catchItem = `
                        <label>Angler</label>
                        <input type="text" class="angler" value="${data.angler}">
                        <label>Weight</label>
                        <input type="text" class="weight" value="${data.weight}">
                        <label>Species</label>
                        <input type="text" class="species" value="${data.species}">
                        <label>Location</label>
                        <input type="text" class="location" value="${data.location}">
                        <label>Bait</label>
                        <input type="text" class="bait" value="${data.bait}">
                        <label>Capture Time</label>
                        <input type="number" class="captureTime" value="${data.captureTime}">
                        <button class="update" data-item=${data._id} data-id="${data._ownerId}">Update</button>
                        <button class="delete" data-item=${data._id} data-id="${data._ownerId}">Delete</button>
                        `
        return catchItem;
    }

    function submitCatch(e) {
        e.preventDefault();
        const catchData = new FormData(e.target);
        const catchInfo = {
            angler: catchData.get('angler'),
            weight: catchData.get('weight'),
            species: catchData.get('species'),
            location: catchData.get('location'),
            bait: catchData.get('bait'),
            captureTime: catchData.get('captureTime')
        }

        if (!catchInfo.angler || !catchInfo.weight || !catchInfo.species || !catchInfo.location || !catchInfo.bait || !catchInfo.captureTime) {
            return alert('Please fill all catch data fields');
        }

        addCatch(catchInfo);
    }

    async function addCatch(data) {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': userData.accessToken
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(endpoints.newCatch, options);
        if (!response.ok) {
            alert('Failed to submit new catch');
        }

        addForm.reset();
        loadCatches();
    }

    function btnsHandler() {
        const updateBtn = document.querySelectorAll('.update');
        const deleteBtn = document.querySelectorAll('.delete');
        updateBtn.forEach(btn => btn.addEventListener('click', onUpdate));
        deleteBtn.forEach(btn => btn.addEventListener('click', onDelete));

        if (!userData) {
            updateBtn.forEach(btn => btn.disabled = true);
            deleteBtn.forEach(btn => btn.disabled = true);
            return;
        }

        updateBtn.forEach(btn => {
            const catchOwner = btn.dataset.id;
            if (catchOwner === userData._id) {
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        });

        deleteBtn.forEach(btn => {
            const catchOwner = btn.dataset.id;
            if (catchOwner === userData._id) {
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        });
    }

    async function onUpdate(e) {
        const parentDiv = e.target.parentElement;
        const inputs = Array.from(parentDiv.querySelectorAll('input'));
        const inputValuesArr = inputs.map(input => input.value);
        const [angler, weight, species, location, bait, captureTime] = inputValuesArr;
        const id = e.target.dataset.item;

        const options = {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': userData.accessToken
            },
            body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
        }

        const response = await fetch(`${endpoints.updateCatch}${id}`, options);
        if (!response.ok) {
            return alert('Failed to update catch');
        }

        loadCatches();
    }

    async function onDelete(e) {
        const id = e.target.dataset.item;
        const options = {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': userData.accessToken
            }
        }
        const response = await fetch(`${endpoints.deleteCatch}${id}`, options);
        if (!response.ok) {
            return alert('Failed deleting that item');
        }

        e.target.parentElement.remove();
    }

    btnsHandler();
}

app();