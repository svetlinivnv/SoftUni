function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    
    let currentStopId = 'depot';
    let currentStopName = '';
    let nextStopId = '';

    const infoBox = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    function updateInfoBox(message) {
        infoBox.textContent = message;
    }

    async function fetchStop(stopId) {
        try {
            const response = await fetch(BASE_URL + stopId);
            if (!response.ok) {
                throw new Error('Stop not found');
            }
            return await response.json();
        } catch (error) {
            updateInfoBox('Error');
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    async function depart() {
        departBtn.disabled = true;
        const stopInfo = await fetchStop(currentStopId);
        if (stopInfo) {
            currentStopName = stopInfo.name;
            nextStopId = stopInfo.next;
            updateInfoBox(`Next stop ${currentStopName}`);
            arriveBtn.disabled = false;
            currentStopId = nextStopId;
        }
    }
    
    async function arrive() {
        updateInfoBox(`Arriving at ${currentStopName}`);
        currentStopId = nextStopId;
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();