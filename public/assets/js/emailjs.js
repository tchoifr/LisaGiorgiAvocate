// Initialiser EmailJS avec ta clé publique
emailjs.init("Bj9C5s9LZ6g5CMK5F"); // Remplace "ton_public_key" par ta clé publique

// Fonction pour envoyer l'email via EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Vérifie les données récupérées avant l'envoi
    console.log(formData); 

    // Envoi de l'email à l'administrateur
    emailjs.send("service_efui837", "template_bageqt7", formData) // Envoi à l'administrateur
        .then(function(response) {
            console.log('Message envoyé à l\'administrateur', response);
        }, function(error) {
            console.error('Erreur lors de l\'envoi à l\'administrateur', error);
        });

    // Envoi de l'email de confirmation au client
    const clientConfirmationData = {
        to_name: formData.name,
        to_email: formData.email,
        message: formData.message
    };

    emailjs.send("service_efui837", "template_sbmk7fu", clientConfirmationData) // Envoi au client
        .then(function(response) {
            // Message de succès
            document.getElementById('status-message').innerHTML = "<p>Message envoyé avec succès !</p>";
            document.getElementById('status-message').style.color = "green";
            document.getElementById('contact-form').reset(); // Réinitialiser le formulaire
        }, function(error) {
            // Message d'erreur
            document.getElementById('status-message').innerHTML = "<p>Erreur lors de l'envoi, essayez à nouveau.</p>";
            document.getElementById('status-message').style.color = "red";
            console.error('Erreur d\'envoi', error);
        });
});
