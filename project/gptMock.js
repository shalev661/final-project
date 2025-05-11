function isOffensive(message ) {
    const badWords = ["טיפש", "אידיוט", "מטומטם", "fuck", "fuckyou","חסר בורג"];
    return badWords.some(word => message.includes(word));
  }
  