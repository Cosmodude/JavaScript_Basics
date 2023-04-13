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
            const pages = {
                "/users": [
                    { id: 1, username: "Cosmodude" },
                    { id: 5, username: "Liya" },
                ],
                "/users/Cosmodude": {
                    revenue: 1e8,
                },
                "/about": "Description",
                "/forbs/100000000": "Cosmodude",
            };
    
            const data = pages[url];
            if (data)   {
                resolve({status: 200,data});
            }
            else{ reject({ status: 404 }); }
        }, 3000);
    });
}

fakeRequest("/users")
// if resolve
    .then((res) => {
        const name = res.data[0].username;
        console.log("Status code", res.status);
        console.log("Data", res.data);
        console.log("success!");
        return fakeRequest(`/users/${name}`)
    })
    .then((res) => {
        const revenue = res.data.revenue;
        console.log(revenue);
        return fakeRequest(`/forbs/${revenue}`);
    })
    .then((res) => {
    console.log(res.data);
    })
// if reject
    .catch((response) => {
    console.log(response.status);
    });
