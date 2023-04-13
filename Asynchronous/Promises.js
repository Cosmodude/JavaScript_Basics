const makePromise = () => {
    return new Promise((resolve, reject) => {
        resolve();
        //reject();
    })
}
makePromise()
    .then(() => {setTimeout(() => {console.log("Resolved")}, 1000);})
    .catch(() => {setTimeout(() => {console.log("Rejected");}, 1000)})
    // Very useful

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const rand = Math.random();
            if (rand < 0.3) { reject({ status: 404 }); }
            else { resolve(); }
        }, 3000);
    });
}
fakeRequest().then(() => {
    console.log("success!");
});
fakeRequest().catch((res) => {
    console.log(res.status);
});