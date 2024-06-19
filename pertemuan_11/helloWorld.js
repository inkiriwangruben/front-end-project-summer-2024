function helloWorld(){
    return new promise((resolve) => {
        setTimeout(() => {
            resolve("hello, world!");
        }, 2000);
    });
}

export default helloWorld;
