function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
    
    error_message.style.padding = 10px;
    
    if(name.length < 1){
        text = "Please enter the name";
        error_message.innerHTML = text;
        return false;
    }
    
    if(subject.length < 1){
        text = "Please enter the subject";
        error_message.innerHTML = text;
        return false;
    }
    
    if(email.indexOf('@')== -1 || email.length < 6){
        text = "Please enter valid email address";
        error_message.innerHTML = text;
        return false;
    }
    
    if(message.length < 50){
        text = "Please enter more than 50 characters";
        error_message.innerHTML = text;
        return false;
    }
    
    alert("Form submited successfully");
    
    return true;
}

