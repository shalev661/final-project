document.addEventListener('DOMContentLoaded', () => {
  
  // Default profile info using your existing variables
  let defaultProfileInfo = [
    { gameWon: gameswon1, gameLost: gameslost1, name: "שחקן1", reputation: 10 },
    { gameWon: gameswon2, gameLost: gameslost2, name: "שחקן2", reputation: 10 }
  ];

  // Load from localStorage or use default
  let storedData = localStorage.getItem('profileInfo');
  let profileInfo;
  
  if (storedData) {
    try {
      profileInfo = JSON.parse(storedData);
    } catch (e) {
      // If parsing fails, use default
      profileInfo = defaultProfileInfo;
    }
  } else {
    // No stored data, use default and save it
    profileInfo = defaultProfileInfo;
    localStorage.setItem('profileInfo', JSON.stringify(profileInfo));
  }

  // Show greeting for first player
  const greetingDiv = document.getElementById('greeting');
  if (profileInfo && profileInfo.length > 0) {
    greetingDiv.innerHTML = `שלום ${profileInfo[0].name}, זכית ${profileInfo[0].gameWon} והפסדת ${profileInfo[0].gameLost}`;
  }

  // Show profile info for all players
  const profileContainer = document.getElementById('profile');
  if (profileContainer) {
    profileContainer.style.display = 'block';
    profileContainer.innerHTML = '';

    profileInfo.forEach(player => {
      const playerDiv = document.createElement('div');
      playerDiv.innerHTML = `
        <h3>${player.name}</h3>
        <p>יש לך ${player.gameWon} נצחונות, ${player.gameLost} הפסדים, ו- ${player.reputation} נקודות מוניטין.</p>
      `;
      profileContainer.appendChild(playerDiv);
    });
  }
});