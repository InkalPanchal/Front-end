const e_id = document.getElementById("e_id");
const contact = document.getElementById("contact");
const email = document.getElementById("email");
const btn = document.getElementById("submit");

btn.addEventListener('click', (e) =>{

    
    if (e_id.value.length < 5 ){
        alert('Employee id must be 5 character long!')

        if(alert){
            e.preventDefault();
        }
    } 

    let pattern = (/\w\d@\w.\w/ && /\w@\w.\w/ );
    let text = email.value;
    let result = pattern.test(text);
    document.getElementById("mailErr").innerHTML = result;
        if (result) {
            document.getElementById("mailErr") = `Ok`;
        } 
        else{
            alert(`Enter valid email id`);
            e.preventDefault();
        }

        
    

    
}) 