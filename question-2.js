const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("message: delayed success!");
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("error: delayed exception!");
        }, 500);
    });
};

resolvedPromise()
    .then(msg => console.log(msg))
    .catch(err => console.error(err));

rejectedPromise()
    .then(msg => console.log(msg))
    .catch(err => console.error(err));
