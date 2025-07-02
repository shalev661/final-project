 const messagesDiv = document.getElementById("messagesDiv");
    const chatInput = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");
    const playerSelect = document.getElementById("playerSelect");

    sendBtn.addEventListener("click", () => {
      const text = chatInput.value.trim();
      if (!text) return;

      const playerName = playerSelect.value;

      const messageDiv = document.createElement("div");
      messageDiv.className = "message";
      messageDiv.innerHTML = `
        <strong>${playerName}:</strong> ${text}
        <button class="report-btn">דווח</button>
      `;

      const reportBtn = messageDiv.querySelector(".report-btn");
      reportBtn.addEventListener("click", () => {
        const confirmed = confirm("האם אתה בטוח שברצונך לדווח?");
        if (confirmed) {
          window.location.href = "report.html";
        }
      });

      messagesDiv.appendChild(messageDiv);
      chatInput.value = "";
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });