const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1초 끝");
    }, 1000);
})
    .then((data) => {
        console.log(data);
        console.log("setTimeout 끝!");
    })
    .catch((err) => console.log(err.message));
