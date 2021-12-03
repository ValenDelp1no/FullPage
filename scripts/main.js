(function () {
    emailjs.init("user_AsVicKkkQPCGbSANKPkCj");
})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userPhone = document.getElementById("phone").value;
    let userMessage = document.getElementById("message").value;

    var contactParams = {
        from_name: fullName,
        from_email: userEmail,
        from_phone: userPhone,
        message: userMessage
    };

    emailjs.send('service_6y0dora', 'template_q95w3sh', contactParams).then(function (res) { })
}