const url = 'https://swapi.dev/api/';

fetch(url + "filmssss/")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Status code Error ${response.status}`);
        }
            console.log(response);
            response.json().then((data) => {
                for (let film of data.results) {
                    console.log(film.title);
                }
            })
    })
    .catch((err) => {  // will work only if call is impossible
        console.log("error!", err);
})

