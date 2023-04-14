
const firstRequest = new XMLHttpRequest();
const url = 'https://swapi.dev/api/';

firstRequest.addEventListener('load', function ()  {
    console.log('first works');
    const respText = JSON.parse(this.responseText);
    const starshipURL = respText.results[0].starships[0];
    const starshipReq = new XMLHttpRequest();
    starshipReq.addEventListener('load', function () {
        const starship = JSON.parse(this.responseText);
        console.log(starship);
    });
    starshipReq.addEventListener('error', function (e) {
        console.log("Eror", e);
    });
    starshipReq.open("GET", starshipURL);
    starshipReq.send();
    /*for (let film of respText.results) {
        console.log(film.title);
    }*/
})
firstRequest.addEventListener('error', () => {
    console.log('error!');
})

firstRequest.open("GET", url + "films/");
firstRequest.send();