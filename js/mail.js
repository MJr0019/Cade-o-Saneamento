
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
                    SecureToken : "28529c21-f760-43a7-9c98-fb56c38662d5",
                    To: 'cadeosaneamento2020smtp@gmail.com',
                    CC: 'cadeosaneamento@gmail.com',
                    From: 'cadeosaneamento2020smtp@gmail.com',
                //DEV:
                // SecureToken : "7db74af8-ee4c-4281-a9fc-9f7c9306f1aa",
                // To: 'cadeosaneamento2020smtp@gmail.com',
                // CC: 'cadeosaneamento@gmail.com',
                // From: obj.email ? 'cadeosaneamento2020smtp@gmail.com' : '',
                Subject:'[Cadê o saneamento?] '+'[Contato] - '+ obj.subject,
                Body:
                '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'+
                '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">'+
                '<head>'+
                '<meta http-equiv="Content-type" content="text/html; charset=utf-8" />'+
                '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />'+
                '<meta http-equiv="X-UA-Compatible" content="IE=edge" />'+
                '<meta name="format-detection" content="date=no" />'+
                '<meta name="format-detection" content="address=no" />'+
                '<meta name="format-detection" content="telephone=no" />'+
                '<meta name="x-apple-disable-message-reformatting" />'+
                '<link href="https://fonts.googleapis.com/css?family=Kreon:400,700|Playfair+Display:400,400i,700,700i|Raleway:400,400i,700,700i|Roboto:400,400i,700,700i" rel="stylesheet" />'+
                '<style type="text/css" media="screen">'+
                            'body{padding:0 !important;margin:0 !important;display:block !important;min-width:100% !important;width:100% !important;background:#099AC2;-webkit-text-size-adjust:none }'+
                            'a{color:#000001;text-decoration:none }'+
                            'p{padding:0 !important;margin:0 !important }'+
                             'img{-ms-interpolation-mode:bicubic;}'+
                            '.mcnPreviewText{display:none !important;}'+
                            '.text-footer2 a{color:#ffffff;}'+
                             '@media only screen and (max-device-width:480px), only screen and (max-width:480px){.mobile-shell{width:100% !important;min-width:100% !important;}'+
                            '.m-center{text-align:center !important;}'+
                            '.m-left{text-align:left !important;margin-right:auto !important;}'+
                            '.center{margin:0 auto !important;}'+
                            '.content2{padding:8px 15px 12px !important;}'+
                            '.t-left{float:left !important;margin-right:30px !important;}'+
                            '.t-left-2{float:left !important;}'+
                            '.td{width:100% !important;min-width:100% !important;}'+
                            '.content{padding:30px 15px !important;}'+
                            '.section{padding:30px 15px 0px !important;}'+
                            '.m-br-15{height:15px !important;}'+
                            '.mpb5{padding-bottom:5px !important;}'+
                            '.mpb15{padding-bottom:15px !important;}'+
                            '.mpb20{padding-bottom:20px !important;}'+
                            '.mpb30{padding-bottom:30px !important;}'+
                            '.m-padder{padding:0px 15px !important;}'+
                            '.m-padder2{padding-left:15px !important;padding-right:15px !important;}'+
                            '.p70{padding:30px 0px !important;}'+
                            '.pt70{padding-top:30px !important;}'+
                            '.p0-15{padding:0px 15px !important;}'+
                            '.p30-15{padding:30px 15px !important;}'+
                            '.p30-15-0{padding:30px 15px 0px 15px !important;}'+
                            '.p0-15-30{padding:0px 15px 30px 15px !important;}'+
                            '.text-footer{text-align:center !important;}'+
                            '.m-td,.m-hide{display:none !important;width:0 !important;height:0 !important;font-size:0 !important;line-height:0 !important;min-height:0 !important;}'+
                            '.m-block{display:block !important;}'+
                            '.fluid-img img{width:100% !important;max-width:100% !important;height:auto !important;}'+
                            '.column,.column-dir,.column-top,.column-empty,.column-top-30,.column-top-60,.column-empty2,.column-bottom{float:left !important;width:100% !important;display:block !important;}'+
                            '.column-empty{padding-bottom:15px !important;}'+
                            '.column-empty2{padding-bottom:30px !important;}'+
                            '.content-spacing{width:15px !important;}'+
                            '}'+
                '</style>'+
                '</head>'+
                '<body class="body"style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#099AC2; -webkit-text-size-adjust:none;">'+
                '<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#099AC2">'+
                '<tr>'+
                '<td align="center" valign="top">'+
                '<table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">'+
                ' <tr>'+
                '<td class="td" style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">'+
                '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                '<tr>'+
                '<td class="p30-15" style="padding: 40px 0px 20px 0px;">'+
                '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                '<tr>'+
                '<th class="column-top" width="200"style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">'+
                '</th>'+
                '<th class="column-top"style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">'+
                '</th>'+
                '</tr>'+
                '</table>'+
                '</td>'+
                '</tr>'+
                '<tr>'+
                '<td bgcolor="#ffffff" class="p30-15 img-center" style="padding: 30px; border-radius: 20px 20px 0px 0px; font-size:0pt; line-height:0pt; text-align:center;">'+
                '<a href="https://cade-o-saneamento.000webhostapp.com/" target="_blank">'+
                '<img src="https://cade-o-saneamento.000webhostapp.com/images/logo.png" width="250" height="150" border="0" alt="" />'+
                '</a>'+
                '</td>'+
                '</tr>'+
                '<tr>'+
                        '<td class="text-nav-white" bgcolor="#038ACB"style="color:#ffffff; font-family:'+ 'Roboto'+', Arial, sans-serif; font-size:12px; line-height:22px; text-align:center; text-transform:uppercase; padding:12px 0px;">'+
                                        '<a href="https://cade-o-saneamento.000webhostapp.com/" target="_blank" class="link-white"style="color:#ffffff; text-decoration:none;">'+
                                            '<span class="link-white"style="color:#ffffff; text-decoration:none;">In&iacute;cio</span>'+
                                        '</a>'+
                                         '&nbsp; &nbsp; &nbsp;<span class="m-hide"> &nbsp; &nbsp; </span>'+
                                         '<a href="https://cade-o-saneamento.000webhostapp.com/sobre.html" target="_blank" class="link-white"style="color:#ffffff; text-decoration:none;">'+
                                            '<span class="link-white"style="color:#ffffff; text-decoration:none;">Sobre o Projeto</span>'+
                                        '</a>'+
                                         '&nbsp; &nbsp; &nbsp;<span class="m-hide"> &nbsp; &nbsp; </span>'+
                                         '<a href="https://cade-o-saneamento.000webhostapp.com/estatisticas.html" target="_blank" class="link-white"style="color:#ffffff; text-decoration:none;">'+
                                            '<span class="link-white"style="color:#ffffff; text-decoration:none;">Estat&iacute;sticas</span>'+
                                        '</a>'+
                                         '&nbsp; &nbsp; &nbsp;<span class="m-hide"> &nbsp; &nbsp; </span>'+
                                         '<a href="https://cade-o-saneamento.000webhostapp.com/contato.html" target="_blank" class="link-white"style="color:#ffffff; text-decoration:none;">'+
                                            '<span class="link-white"style="color:#ffffff; text-decoration:none;">Contato</span>'+
                                        '</a>'+
                                         '&nbsp; &nbsp; &nbsp;<span class="m-hide"> &nbsp; &nbsp; </span>'+
                                         '<a href="https://cade-o-saneamento.000webhostapp.com/denuncias.html" target="_blank" class="link-white"style="color:#ffffff; text-decoration:none;">'+
                                            '<span class="link-white"style="color:#ffffff; text-decoration:none;">Den&uacute;ncias</span>'+
                                        '</a>'+
                                         '&nbsp; &nbsp; &nbsp;<span class="m-hide"> &nbsp; &nbsp; </span>'+
                                         '<a href="https://cade-o-saneamento.000webhostapp.com/mapa.html" target="_blank" class="link-white"style="color:#ffffff; text-decoration:none;">'+
                                            '<span class="link-white"style="color:#ffffff; text-decoration:none;">Mapa</span>'+
                                        '</a>'+
                        '</td>'+
                '</tr>'+        
                '</table>'+
                '<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ebebeb">'+
                '<tr>'+
                '<td class="p30-15-0" style="padding: 50px 30px 0px;" bgcolor="#ffffff">'+
                '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                '</table>'+
                '</td>'+
                '</tr>'+
                '</table>'+
                '<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">'+
                '<tr>'+
                '<td class="p30-15" bgcolor="#ffffff" style="padding: 0px 30px 50px 30px;">'+
                '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                '<tr>'+
                '<td class="h5 center"style="text-align:center;"><multiline> </multiline></td>'+
                '</tr>'+
                '<tr>'+
                '<td class="h2-center pb40"style="color:#000000; font-family:'+ 'Playfair Display'+ ', Times,'+  'Times New Roman' + ', serif; font-size:32px; line-height:36px; text-align:center; padding-bottom:40px;">'+
                '<multiline>Resposta do Contato ou Den&uacute;ncia.</multiline>'+
                '</td>'+
                '</tr>'+
                        '<tr>'+
                        '<td class="pb40"style="padding-bottom:40px;">'+
                        '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                        '<tr>'+
                        '<th class="column-top" width="285"style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">'+
                        '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                        '<tr>'+
                        '<td valign="top" width="52" class="text-year"style="color:#099AC2; font-family:'+ 'Raleway'+', Arial,sans-serif; font-size:14px; line-height:22px; text-align:left;">'+
                        '<multiline><strong></strong></multiline>'+
                        '<td>'+
                        '<td valign="top">'+
                        '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                        '<tr>'+
                        '<td class="h5-black2 pb20"style="color:#099AC2; font-family:'+ 'Raleway'+', Arial,sans-serif; font-size:14px; line-height:22px; text-align:left;">'+
                        '<multiline>&#9679; Nome:</multiline>'+
                        '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<td class="text"style="color:#5d5c5c; font-family:'+ 'Raleway'+', Arial,sans-serif; font-size:14px; line-height:22px; text-align:left;">'+
                        '<multiline>'+ obj.name +'</multiline>'+
                        '</td>'+
                        '</tr>'+
                        '</table>'+
                        '</td>'+
                        '</tr>'+
                        '</table>'+
                        '</th>'+
                        '<th class="column-empty2" width="20"style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; direction:ltr;">'+
                        '</th>'+
                        '<th class="column-top" width="285"style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">'+
                        '</th>'+
                        '</tr>'+
                        '</table>'+
                        '</td>'+
                        '</tr>'+

                        '<tr>'+
                        '<td class="pb40"style="padding-bottom:40px;">'+
                        '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                        '<tr>'+
                        '<th class="column-top" width="285"style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">'+
                        '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                        '<tr>'+
                        '<td valign="top" width="52" class="text-year"style="color:#099AC2; font-family:'+ 'Raleway'+', Arial,sans-serif; font-size:14px; line-height:22px; text-align:left;">'+
                        '<multiline><strong></strong></multiline>'+
                        '<td>'+
                        '<td valign="top">'+
                        '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                        '<tr>'+
                        '<td class="h5-black2 pb20"style="color:#099AC2; font-family:'+ 'Raleway'+', Arial,sans-serif; font-size:14px; line-height:22px; text-align:left;">'+
                        '<multiline>&#9679; E-mail:</multiline>'+
                        '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<td class="text"style="color:#5d5c5c; font-family:'+ 'Raleway'+', Arial,sans-serif; font-size:14px; line-height:22px; text-align:left;">'+
                        '<multiline>'+ obj.email +'</multiline>'+
                        '</td>'+
                        '</tr>'+
                        '</table>'+
                        '</td>'+
                        '</tr>'+
                        '</table>'+
                        '</th>'+
                        '<th class="column-empty2" width="20"style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; direction:ltr;">'+
                        '</th>'+
                        '<th class="column-top" width="285"style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">'+
                        '</th>'+
                        '</tr>'+
                        '</table>'+
                        '</td>'+
                        '</tr>'+

                        '<tr>'+
                        '<td class="pb40"style="padding-bottom:40px;">'+
                        '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                        '<tr>'+
                        '<th class="column-top" width="285"style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">'+
                        '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                        '<tr>'+
                        '<td valign="top" width="52" class="text-year"style="color:#099AC2; font-family:'+ 'Raleway'+', Arial,sans-serif; font-size:14px; line-height:22px; text-align:left;">'+
                        '<multiline><strong></strong></multiline>'+
                        '<td>'+
                        '<td valign="top">'+
                        '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                        '<tr>'+
                        '<td class="h5-black2 pb20"style="color:#099AC2; font-family:'+ 'Raleway'+', Arial,sans-serif; font-size:14px; line-height:22px; text-align:left;">'+
                        '<multiline>&#9679; Localiza&ccedil;&atilde;o da comunidade:</multiline>'+
                        '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<td class="text"style="color:#5d5c5c; font-family:'+ 'Raleway'+', Arial,sans-serif; font-size:14px; line-height:22px; text-align:left;">'+
                        '<multiline>'+ obj.community +'</multiline>'+
                        '</td>'+
                        '</tr>'+
                        '</table>'+
                        '</td>'+
                        '</tr>'+
                        '</table>'+
                        '</th>'+
                        '</tr>'+
                        '</table>'+
                        '</td>'+
                        '</tr>'+

                        '<tr>'+
                        '<td class="pb40"style="padding-bottom:40px;">'+
                        '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                        '<tr>'+
                        '<th class="column-top" width="285"style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">'+
                        '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                        '<tr>'+
                        '<td valign="top" width="52" class="text-year"style="color:#099AC2; font-family:'+ 'Raleway'+', Arial,sans-serif; font-size:14px; line-height:22px; text-align:left;">'+
                        '<multiline><strong></strong></multiline>'+
                        '<td>'+
                        '<td valign="top">'+
                        '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                        '<tr>'+
                        '<td class="h5-black2 pb20"style="color:#099AC2; font-family:'+ 'Raleway'+', Arial,sans-serif; font-size:14px; line-height:22px; text-align:left;">'+
                        '<multiline>&#9679; Mensagem ou Den&uacute;cia:</multiline>'+
                        '</td>'+
                        '</tr>'+
                        '<tr>'+
                        '<td class="text"style="color:#5d5c5c; font-family:'+ 'Raleway'+', Arial,sans-serif; font-size:14px; line-height:22px; text-align:left;">'+
                        '<br>'+
                        '<multiline>'+ obj.message +'</multiline>'+
                        '</td>'+
                        '</tr>'+
                        '</table>'+
                        '</td>'+
                        '</tr>'+
                        '</table>'+
                        '</th>'+
                        '</tr>'+
                        '</table>'+
                        '</td>'+
                        '</tr>'+
                '<tr>'+
                '<td align="center">'+
                '<table border="0" cellspacing="0" cellpadding="0">'+
                '<tr>'+
                    '<td class="text-button3"style="color:#000000; font-family:'+ 'Kreon'+ 'Times New Roman' + ', Georgia, serif; font-size:14px; line-height:18px; text-align:center; border:1px solid #000000; padding:10px 30px; border-radius:20px;">'+
                        '<multiline>'+
                        '<a href="https://cade-o-saneamento.000webhostapp.com/denuncias.html" target="_blank" class="link"style="color:#000001; text-decoration:none;">'+
                        '<span class="link"style="color:#000001; text-decoration:none;">Ver todas as Den&uacute;ncias</span>'+
                        '</a>'+
                        '</multiline>'+
                    '</td>'+
                '</tr>'+
                '</table>'+
                '</td>'+
                '</tr>'+
                '</table>'+
                '</td>'+
                '</tr>'+
                '</table>'+
                '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                '<tr>'+
                '<td class="p30-15-0" bgcolor="#ffffff" style="border-radius: 0px 0px 20px 20px; padding: 70px 30px 0px 30px;">'+
                '</td>'+
                '</tr>'+
                '</table>'+
                '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                '<tr>'+
                '<td class="text-footer2 p30-15" style="padding: 30px 15px 50px 15px; color:#a9b6e0; font-family:'+ 'Raleway'+', Arial,sans-serif; font-size:12px; line-height:22px; text-align:center;">' +
                '</td>'+
                '<multiline><br /></multiline>'+
                '</td>'+
                '</tr>'+
                '</table>' +        
                '</td>'+
                '</tr>'+
                '</table>'+
                '</td>'+
                '</tr>'+
                '</table>'+
                '</body>'+
                '</html>'
                
            }).then(
                message => checkMessage(message)
            );
        }