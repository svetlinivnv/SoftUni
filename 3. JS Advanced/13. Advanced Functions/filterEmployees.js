function filterEmployees(data, criteria) {

    let inputParsed = JSON.parse(data);
    let count = 0;
    let [criteriaKey, criteriaValue] = criteria.split('-');

    if (criteria === 'all') {
        inputParsed.forEach(employee => {
            console.log(`${count++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);

        });
    } else {
        inputParsed
            .filter(employee => employee[criteriaKey] === criteriaValue)
            .forEach(employee => console.log(`${count++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`))
    }
}

filterEmployees(`[{

"id": "1",

"first_name": "Kaylee",

"last_name": "Johnson",

"email": "k0@cnn.com",

"gender": "Female"

}, {

"id": "2",

"first_name": "Kizzee",

"last_name": "Johnson",

"email": "kjost1@forbes.com",

"gender": "Female"

}, {

"id": "3",

"first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`, 'last_name-Johnson'
)