function test(age){
    return new Promise (function(resolve, reject) {

        var success = {
            Status: "success",
            code: "200",
            message: "Age is valid"
        }

        var error = {
            Status: "false",
            code: "401",
            message: "Age is invalid!"
        }

        if (age < 18) {
            resolve(success);
        }else {
            reject(error);
        }

    })
}

console.log(test(18));

console.log(test(17).then(
    (success)=>{console.log(success)},
    (error)=> {console.log(error)}
));