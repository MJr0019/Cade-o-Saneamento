
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
                        document.getElementById('erro1').innerHTML = '✔️ Mensagem enviada com sucesso!'
                        document.getElementById('erro_01').style.display = 'block' ;
                        document.getElementById('erro_02').style.display = 'none' ;
                }else{
                        document.getElementById('erro2').innerHTML = '❌ Ocorreu um erro. Verifique uns dos campos novamente, por favor.'
                        document.getElementById('erro_02').style.display = 'block' ;
                        document.getElementById('erro_01').style.display = 'none' ;

                }
}

                Email.send({
                    //Debug:
                    // Host: "smtp.mailtrap.io",
                    // Username: "6fc4e2dfa2d38d",
                    // Password: "721ecf2e98ff48",
                    // port: 2525,
                    // To: 'cadeosaneamento2020smtp@gmail.com',
                    // CC: 'cadeosaneamento@gmail.com',
                    // From: 'cadeosaneamento2020smtp@gmail.com',
                //DEV:
                Host: "smtp.elasticemail.com",
                Username: "cadeosaneamento2020smtp@gmail.com",
                Password: "CA409E06E5C5E5B68640931F007A680BE42A",
                port: 2525,
                To: 'cadeosaneamento2020smtp@gmail.com',
                CC: 'cadeosaneamento@gmail.com',
                From: obj.email ? 'cadeosaneamento2020smtp@gmail.com' : '',
                Subject:'[Cadê o saneamento?] '+'[Contato] - '+ obj.subject,
                Body:
                '<h2> &rarr; Resposta do Contato</h2>'
                +'<hr>'+
                '<p>&#9679; Nome:</p>'+ obj.name +'<br>'+
                '<br> <p>&#9679; E-mail:</p>'+ obj.email +'<br>'+
                '<br> <p>&#9679; Localização da comunidade:</p>'+ obj.community +'<br>'+
                '<br> <p>&#9679; Mensagem ou Den&uacute;cia:</p>'+ obj.message +
                '<br> <hr>'

            }).then(
                message => checkMessage(message)
            );
        }