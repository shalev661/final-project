function isOffensive(message ) {
    const badWords = ["טיפש", "אידיוט", "מטומטם", "fuck", "fuckyou","idiot"];
    return badWords.some(word => message.includes(word));
  }
  