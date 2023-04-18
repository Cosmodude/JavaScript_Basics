const URL = 'https://swapi.dev/api/';

const checkStatus = (response) => {
    if (!response.ok) {
        throw new Error(`Status code Error ${response.status}`);
    }
    console.log(response);
    return response.json();
}
const printPlanets = (planets)=>{
    console.log("Fetched 10 Planets!");
    for (let planet of planets.results) {
            console.log(planet.name);
    }
    return Promise.resolve(planets.next);
}

const fetchNext = (url =URL + "planets/" ) => {
    return fetch(url);
}

fetchNext()
    .then(checkStatus)
    .then(printPlanets)
    .then(fetchNext)
    .then(checkStatus)
    .then(printPlanets)
    .catch((err) => {  // will work only if call is impossible
        console.log("error!", err);
    })  // No Nesting!!!
// Still code is repeated

