function checkBreach() {
    const email = document.getElementById("emailInput").value;
    const resultDiv = document.getElementById("result");
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");
    const securityTipsDiv = document.getElementById("securityTips");

    // Email format validation
    if (!validateEmail(email)) {
        popupMessage.innerHTML = `⚠️ Please enter a valid email address.`;
        popup.style.display = "block";
        return;
    }

    // Simulating a breach check
    const breachedEmails = ["test@example.com", "user123@gmail.com", "compromised@domain.com"];
    if (breachedEmails.includes(email)) {
        resultDiv.innerHTML = `⚠️ Alert: The email <strong>${email}</strong> was found in a data breach!`;
        resultDiv.style.color = "#ff4500";

        // Show security tips
        securityTipsDiv.innerHTML = `
            <strong>Security Tips:</strong><br>
            - Change your password immediately.<br>
            - Enable two-factor authentication (2FA).<br>
            - Use a password manager to generate strong passwords.
        `;

        popupMessage.innerHTML = `⚠️ Breach detected! Take immediate action for <strong>${email}</strong>.`;
        popup.style.display = "block";
    } else {
        resultDiv.innerHTML = `✅ Good news: The email <strong>${email}</strong> was not found in any known breaches.`;
        resultDiv.style.color = "#00ff00";
        securityTipsDiv.innerHTML = ""; // Clear security tips if no breach
        popupMessage.innerHTML = `✅ No breach found for <strong>${email}</strong>.`;
        popup.style.display = "block";
    }
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
