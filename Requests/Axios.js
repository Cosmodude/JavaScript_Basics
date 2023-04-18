const URL = 'https://swapi.dev/api/';

const fetchNext = (url =URL + "starships/" ) => {
    return axios.get(url);
}

const printStarships = ({data}) => {  // don't forget to distructure data
    console.log(data);
    for (let ship of data.results) {
        console.log(ship.name);
    }
    return fetchNext(data.next);
}

fetchNext()
    .then(printStarships)
    .then(printStarships)
    .then(printStarships)
    .catch((err) => {
        console.log(err);
    })