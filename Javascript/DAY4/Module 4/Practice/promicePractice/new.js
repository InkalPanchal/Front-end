function test(age){
    return new Promise(function(resolve,reject){

        if (age < 18) {
        try {
            setTimeout(resolve("success"),5000);
        }
        catch(message){
            reject(message+"___________");
        }
        }
    })
}
console.log(test(1));