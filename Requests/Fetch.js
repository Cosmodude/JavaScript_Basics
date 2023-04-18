const url = 'https://swapi.dev/api/';

fetch(url + "films/")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Status code Error ${response.status}`);
        }
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log("Fetched films");
        for (let film of data.results) {
            console.log(film.title);
            let heroURL = film.characters[0];
            console.log(heroURL);
            return fetch(heroURL);
        }
    })
    .then((hero) => {
        if (!hero.ok) {
            throw new Error(`Status code Error ${response.status}`);
        }
        return hero.json();
    })
    .then((character) => {
        console.log("Fetched main character:");
        console.log(character.name);
    })
    .catch((err) => {  // will work only if call is impossible
        console.log("error!", err);
    })  // No Nesting!!!
// Still code is repeated

