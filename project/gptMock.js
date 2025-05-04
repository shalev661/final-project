function isOffensive(message) {
    const badWords = ["טיפש", "אידיוט", "מטומטם", "fuck", "אוטיסט"];
    return badWords.some(word => message.includes(word));
  }
  