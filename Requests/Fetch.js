const url = 'https://swapi.dev/api/';

fetch(url + "films/")
    .then((response) => {
        response.json().then((data) => {
            for (let film of data.results) {
                console.log(film.title);
            }
        })
    })
    .catch((err) => {
        console.log("error!", err);
})

