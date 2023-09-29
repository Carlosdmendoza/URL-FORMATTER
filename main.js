function formatURL() {
    const urlInput = document.getElementById('urlInput').value;
    const formattedUrl = document.getElementById('formattedUrl');
    const copyButton = document.getElementById('copyButton');
    const infoBox = document.getElementById('infoBox');

    // Check if the input is empty
    if (!urlInput.trim()) {
        showInfoBox('Please paste a URL', 'error', 2000);
        return; // Stop further processing
    }

    // Check if it's a valid Google Drive link
    if (!urlInput.includes('drive.google.com')) {
        showInfoBox('Not a valid Google Drive link', 'error', 2000);
        return; // Stop further processing
    }

    // Format the URL
    let newUrl = urlInput.replace("file/d/", "uc?export=view&id=");
    newUrl = newUrl.replace("/view?usp=sharing", "");

    // Display the formatted URL
    formattedUrl.textContent = newUrl;

    // Show the copy button
    copyButton.style.display = 'inline-block';
}

function copyFormattedURL() {
    const formattedUrl = document.getElementById('formattedUrl').textContent;
    copyToClipboard(formattedUrl);
    
    // Show the info box for success message
    showInfoBox("URL saved on clipboard", 'success', 3000);
}

function showInfoBox(message, messageType, duration) {
    const infoBox = document.getElementById('infoBox');
    infoBox.textContent = message;
    infoBox.className = 'info-box ' + messageType; // Add the class based on messageType
    infoBox.style.display = 'block';
    
    setTimeout(function() {
        infoBox.style.display = 'none';
    }, duration);
}

function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}
