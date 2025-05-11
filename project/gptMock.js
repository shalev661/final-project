function isOffensive(message ) {
    const badWords = ["טיפש", "אידיוט", "מטומטם", "fuck", "fuckyou", "stupid"];
    return badWords.some(word => message.includes(word));
  }
  