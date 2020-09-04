const form = document.querySelector(".form-contact");
const submit = document.querySelector(".contact-submit");
const statusContenair = document.querySelector(".form-status");
const statusMessage = document.querySelector(".form-status-message");
const inputs = document.querySelectorAll(".form-contact input,textarea");

submit.addEventListener("click", function(e){
    e.preventDefault();
    var formData = new FormData(form);
    if(checkFormData(formData).dataCheck){
        console.log(checkFormData(formData));
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "./ressources/php/contact.php", true);
    
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200) {
                let response = JSON.parse(xhr.response);
                xhrReturn(response);
                console.log(response);
              }
        }
        xhr.send(formData);
    } else {
        statusMessage.style.color = "red";
        statusMessage.innerHTML = "<i class='fas fa-times-circle'></i>" + checkFormData(formData).errorMessage;
        statusContenair.style.display = "flex";
    }
})

function checkFormData(formData){
    let fName = formData.get("f-name");
    let lName = formData.get("l-name");
    let mail = formData.get("mail");
    let object = formData.get("object");
    let message = formData.get("message");
    console.log(fName);

    var mailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let response = {
        dataCheck: true,
        errorMessage: "Formulaire envoyé avec succès"
    }

    inputs.forEach(function(el){
        el.style.borderColor = "unset";
    });

    if(fName.length <= 0){
        response.dataCheck = false;
        response.errorMessage = "Veuiller remplir le champ 'Prenom'";
        inputs[0].style.borderColor = "red";
    } else if(lName.length <= 0){
        response.dataCheck = false;
        response.errorMessage = "Veuiller remplir le champ 'Nom'";
        inputs[1].style.borderColor = "red";
    } else if(!mailRe.test(String(mail).toLowerCase())){
        response.dataCheck = false;
        response.errorMessage = "Addresse mail non valide";
        inputs[2].style.borderColor = "red";
    } else if(object.length <= 0){
        response.dataCheck = false;
        response.errorMessage = "Veuiller remplir le champ 'Objet'";
        inputs[3].style.borderColor = "red";
    } else if(message.length <= 0){
        response.dataCheck = false;
        response.errorMessage = "Veuiller remplir le champ 'Message'";
        inputs[4].style.borderColor = "red";
    }

    return response;
}

function xhrReturn(response){
    //reset all inputs error style
    inputs.forEach(function(el){
        el.style.borderColor = "unset";
    });
    statusContenair.style.display = "flex";
    if(response.success == 1){
        statusMessage.style.color = "green";
        statusMessage.innerHTML = "<i class='fas fa-check-circle'></i>" + response.message;
        inputs.forEach(function(el){
            el.value = "";
        })
    } else if(response.success == 0 && response.failedInput != null){
        let input = document.getElementById(response.failedInput);
        input.style.borderColor = "red";
    }
}
