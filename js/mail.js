
        let obj = {}
        function GetFormData() {
            return obj = {
                name: document.getElementById('name').value,
                email: document.getElementById("email").value,
                community: document.getElementById("comunidade").value,
                message: document.getElementById("message").value,
                subject: document.getElementById("subject").value
               

            }
        }
        function sendMail(e) {
            e.preventDefault()
            GetFormData()
            console.log(obj)

            function checkMessage(message){
                if (message == 'OK') {
                              document.getElementById('erro1').innerHTML = 'Mensagem enviada com sucesso!'
                }else{
                              document.getElementById('erro2').innerHTML = 'Erro. Verifique um dos campos novamente.'
                }
}

Email.send({
                Host: "smtp.mailtrap.io",
                Username: "6fc4e2dfa2d38d",
                Password: "721ecf2e98ff48",
                port: 2525,
                To: 'cadeosaneamento@gmail.com',
                From: obj.email,
                Subject: obj.subject,
                Body:
                '<h2> &rarr; Resposta do Contato</h2>'
                +'<hr>'+
                '<p>&#9679; Nome:</p>'+ obj.name +'<br>'+
                '<br> <p>&#9679; E-mail:</p>'+ obj.email +'<br>'+
                '<br> <p>&#9679; Localização da comunidade:</p>'+ obj.community +'<br>'+
                '<br> <p>&#9679; Mensagem ou Den&uacute;cia:</p>'+ obj.message +
                '<br> <hr>'

            }).then(
<<<<<<< Updated upstream
                message => checkMessage(message)
=======
                
                message => console.log(message)
>>>>>>> Stashed changes
            );
        }