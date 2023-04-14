
const firstRequest = new XMLHttpRequest();
const url = 'https://swapi.dev/api/';

firstRequest.addEventListener('load', function ()  {
    console.log('works');
    const respText = JSON.parse(this.responseText);
    console.log(respText);
    for (let film of respText.results) {
        console.log(film.title);
    }
})
firstRequest.addEventListener('error', () => {
    console.log('error!');
})

firstRequest.open("GET", url + "films/");
firstRequest.send();