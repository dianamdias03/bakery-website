function sendEmail() {
    var name = this.querySelector('input[name=name]'), name = name.value;
    var phone = this.querySelector('input[name=phone]'), phone = phone.value;
    var email = this.querySelector('input[name=email]'), email = email.value;
    var message = this.querySelector('input[name=message]'), message = message.value;
    var messageToSend = 'Olá, \nVocê recebeu uma mensagem de '+ name +'\n' +
                    'Mensagem: ' + message + '\n' + 'Dados para contato:\n' + 
                    'Telefone: ' + phone + '\nEmail: ' + email;
    this.querySelector('input[name=Body]').setAttribute('value', texto);
    Email.send({
    Host: "smtp.gmail.com",
    Username: "devdianad@gmail.com",
    Password: "han77251D",
    To: 'devdianad@gmail.com',
    From: email,
    Subject: "Nova mensagem",
    Body: messageToSend,
    })
    .then(function (message) {
        alert("mail sent successfully")
    });
}

function sendMessage(){

    const template_params = {
        name: document.querySelector('input[name=name]').value,
        phone: document.querySelector('input[name=phone]').value,
        email: document.querySelector('input[name=email]').value,
        message: document.querySelector('textarea[name=message]').value
    }

    emailjs.send("service_gxgxxte", "template_3416mn6", template_params, "G4-038UlVmM6p55zx").then((response) => {
        console.log("Email enviado: " + response.status, response.text)
        document.querySelector('input[name=name]').value='';
        document.querySelector('input[name=phone]').value='';
        document.querySelector('input[name=email]').value='';
        document.querySelector('input[name=message]').value='';
    }, (err) => {
        console.log("Erro: " + err.message)
    })
}