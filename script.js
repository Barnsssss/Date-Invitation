const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");

// Function to move the "No" button
function moveNoButton() {
    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

// Extra safety (click)
noBtn.addEventListener("click", moveNoButton);


// YES BUTTON LOGIC (unchanged)
yesBtn.addEventListener("click", () => {

    card.innerHTML = `
        <h1>Yay! ❤️</h1>

        <img
            class="gif"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM25kNjVzcDZldHVlYnIzanNyYXppc2hpM3RlOHA4OHg2dGM3YzQ1cyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/xTiTnMhJTwNHChdTZS/giphy.gif"
            alt="Love GIF"
        >

        <div class="input-group">
            <label>Date 📅</label>
            <input type="date" id="dateInput">
        </div>

        <div class="input-group">
            <label>Time ⏰</label>
            <input type="time" id="timeInput">
        </div>

        <div class="input-group">
            <label>Meeting Place 📍</label>
            <input type="text" id="placeInput" placeholder="Where should we meet?">
        </div>

        <button id="confirmBtn">Confirm ❤️</button>
    `;

    const confirmBtn = document.getElementById("confirmBtn");

    confirmBtn.addEventListener("click", () => {

        const date = document.getElementById("dateInput").value;
        const time = document.getElementById("timeInput").value;
        const place = document.getElementById("placeInput").value;

        if (!date || !time || !place) {
            alert("Please fill in all fields ❤️");
            return;
        }

        card.innerHTML = `
            <h1>💕 Date Summary 💕</h1>

            <img
                class="gif"
                src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
                alt="Celebration GIF"
            >

            <div class="summary">
                <h2>📋 Date Summary</h2>

                <p><strong>💕 Status:</strong> Accepted</p>
                <p><strong>📅 Date:</strong> ${date}</p>
                <p><strong>⏰ Time:</strong> ${time}</p>
                <p><strong>📍 Meeting Place:</strong> ${place}</p>
                <p><strong>❤️ Message:</strong>I’d be so happy to go on a date with you. You mean so much to me.</p>
            </div>

            <div style="margin-top:20px; display:flex; justify-content:center; gap:15px; flex-wrap:wrap;">
                <button id="copyBtn">📋 Copy Plan</button>

                <a href="https://www.facebook.com/vernice.faustino/" target="_blank" style="text-decoration:none;">
                    <button>💌 DM Me</button>
                </a>
            </div>
        `;

        document.getElementById("copyBtn").addEventListener("click", () => {

            const summaryText =
`💕 Date Summary 💕

📅 Date: ${date}
📍 Meeting Place: ${place}
❤️ Status: Accepted`;

            navigator.clipboard.writeText(summaryText);

            alert("Date plan copied! ❤️");
        });
    });
});