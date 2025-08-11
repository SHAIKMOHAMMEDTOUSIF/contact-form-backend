document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Stop page refresh

    // Get form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    // Send data to backend
    try {
        const res = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        const data = await res.json();

        if (res.ok) {
            formMessage.style.color = "green";
            formMessage.textContent = data.message || "Message sent successfully!";
            document.getElementById("contactForm").reset();
        } else {
            formMessage.style.color = "red";
            formMessage.textContent = data.error || "Something went wrong!";
        }

    } catch (error) {
        console.error("Error:", error);
        formMessage.style.color = "red";
        formMessage.textContent = "Unable to send message. Please try again.";
    }
});
