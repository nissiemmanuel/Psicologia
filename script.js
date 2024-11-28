// Botón de WhatsApp
const btnWhatsapp = document.querySelector('.btn-whatsapp');
btnWhatsapp.addEventListener('click', () => {
    window.open('https://wa.me/', '_blank');
});

// Botón de Email
const btnEmail = document.querySelector('.btn-email');
btnEmail.addEventListener('click', () => {
    window.location.href = 'mailto:contacto@psicologo.com';
});
