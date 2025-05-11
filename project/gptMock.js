function isOffensive(message ) {
    const badWords = ["טיפש", "אידיוט", "מטומטם", "fuck", "fuckyou","מעפן"];
    return badWords.some(word => message.includes(word));
  }
  