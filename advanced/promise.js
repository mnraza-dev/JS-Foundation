// Promises are the utility to create asynchrounous nature in JavaScript    

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data Fetched")
            }
            else {
                reject("Operation Rejected")
            }

        }, 3000);
    })
}


fetchData()
    .then((data) => {
        console.log(data);
        console.log(data.toUpperCase());
        return {
            name: "MN Raza",
            age: 29,
        }
    }).then((val) => {
        console.log("Done", val);
    })
    .catch((err) => {
        console.error(err);
    })