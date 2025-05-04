function isOffensive(message) {
    const badWords = ["טיפש", "אידיוט", "מטומטם", "fuck"];
    return badWords.some(word => message.includes(word));
  }
  