function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        from_email:document.getElementById("fromEmail").value,
        message: document.getElementById("message").value,
        to_email: document.getElementById("toEmail").value,
    };

    emailjs.send('service_zbmfupf','template_z4zis3x',tempParams)
    .then(function(res){
        console.log();
    })
    }


