function updatePreview() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const previewFrame = document.getElementById('preview');
    const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;

    previewDocument.open();
    previewDocument.write(`<!DOCTYPE html><html><head><style>${cssCode}</style></head><body>${htmlCode}</body></html>`);
    previewDocument.close();
}

function startChallenge() {
    alert("Commencez votre challenge en créant une page web sur le sujet de votre choix !");
}

// Fonction pour mettre à jour la prévisualisation en temps réel
document.getElementById('html-code').addEventListener('input', function() {
    const code = document.getElementById('html-code').value;
    const preview = document.getElementById('html-preview');
    
    // Mettre à jour la prévisualisation avec le code HTML de l'utilisateur
    preview.innerHTML = code;
});

// Fonction pour faire défiler la page jusqu'en bas
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
