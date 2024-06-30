async function attachEvents() {
    const locationsUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
    const conditions_BASE_URL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const threeD_BASE_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
    document.getElementById('submit').addEventListener('click', getLocations);

    const icons = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    }

    const forecastEl = document.getElementById('forecast');
    const locationInput = document.getElementById('location');
    const currentEl = document.getElementById('current');
    const upcomingEl = document.getElementById('upcoming');

    function clear() {
        const current = document.querySelector('.forecasts');
        const forecast = document.querySelector('.forecast-info');
        if (current && forecast) {
            current.remove();
            forecast.remove();
        }
        forecastEl.style.display = 'none';
    }

    async function getLocations() {
        clear();
        const selectedLocation = locationInput.value;
        try {
            const response = await fetch(locationsUrl);
            const data = await response.json();
            const location = data.find(loc => loc.name === selectedLocation);

            if (location) {
                await conditions(location.code);
                await threeDays(location.code);
                forecastEl.style.display = 'block';
            } else {
                throw new Error('Invalid location');
            }
        } catch (error) {
            alert(`${error}`);
        }
    }

    async function conditions(code) {
        const response = await fetch(conditions_BASE_URL + code);
        const data = await response.json();
        const locationName = data.name;
        const low = data.forecast.low;
        const high = data.forecast.high;
        const condition = data.forecast.condition;

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('forecast-data');
        nameSpan.textContent = locationName;

        const lowHighSpan = document.createElement('span');
        lowHighSpan.classList.add('forecast-data');
        lowHighSpan.innerHTML = `${low}${icons.Degrees}/${high}${icons.Degrees}`;

        const conditionSpan = document.createElement('span');
        conditionSpan.classList.add('forecast-data');
        conditionSpan.textContent = condition;

        const conditionParentSpan = document.createElement('span');
        conditionParentSpan.classList.add('condition');
        conditionParentSpan.appendChild(nameSpan);
        conditionParentSpan.appendChild(lowHighSpan);
        conditionParentSpan.appendChild(conditionSpan);

        const conditionSymbolSpan = document.createElement('span');
        conditionSymbolSpan.classList.add('condition', 'symbol');
        conditionSymbolSpan.innerHTML = icons[condition];

        const forecastsDiv = document.createElement('div');
        forecastsDiv.classList.add('forecasts');
        forecastsDiv.appendChild(conditionSymbolSpan);
        forecastsDiv.appendChild(conditionParentSpan);

        currentEl.appendChild(forecastsDiv);
    }

    async function threeDays(code) {
        const response = await fetch(threeD_BASE_URL + code);
        const data = await response.json();

        const forecastInfoDiv = document.createElement('div');
        forecastInfoDiv.classList.add('forecast-info');

        data.forecast.forEach(day => {
            const low = day.low;
            const high = day.high;
            const condition = day.condition;

            const symbolSpan = document.createElement('span');
            symbolSpan.classList.add('symbol');
            symbolSpan.innerHTML = icons[condition];

            const lowHighSpan = document.createElement('span');
            lowHighSpan.classList.add('forecast-data');
            lowHighSpan.innerHTML = `${low}${icons.Degrees}/${high}${icons.Degrees}`;

            const conditionSpan = document.createElement('span');
            conditionSpan.classList.add('forecast-data');
            conditionSpan.textContent = condition;

            const parentSpan = document.createElement('span');
            parentSpan.classList.add('upcoming');
            parentSpan.appendChild(symbolSpan);
            parentSpan.appendChild(lowHighSpan);
            parentSpan.appendChild(conditionSpan);

            forecastInfoDiv.appendChild(parentSpan);
            upcomingEl.appendChild(forecastInfoDiv);
        });
    }
}

attachEvents();