async function getInfo() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    const stopIdRef = document.getElementById('stopId');
    const ulRef = document.getElementById('buses');
    const stopNameRef = document.getElementById('stopName');

    const stopId = stopIdRef.value;
    const fullPath = BASE_URL + stopId;

    // then/catch method:

    // fetch(fullPath).then(response => {
    //     response.json().then(data => {
    //         clear();
    //         renderList(data);
    //     }).catch(error => {
    //         clear();
    //         stopNameRef.textContent = 'Error';
    //     });
    // });

    // Async/Await method:
    try {
        const response = await fetch(fullPath);
        const data = await response.json();

        clear();
        renderList(data);
    } catch (error) {
        clear();
        stopNameRef.textContent = 'Error';
    }

    function renderList(data) {
        const stopName = data.name;
        stopNameRef.textContent = stopName;

        Object.entries(data.buses).forEach(info => {
            const [busNumber, busTime] = info;

            const li = document.createElement('li');
            li.textContent = `Bus ${busNumber} arrives in ${busTime} minutes`;
            ulRef.appendChild(li);
        });
    }

    function clear() {
        stopIdRef.value = '';
        ulRef.innerHTML = '';
    }
}