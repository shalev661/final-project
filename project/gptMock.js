function isOffensive(message ) {
    const badWords = ["טיפש", "אידיוט", "מטומטם", "fuck", "fuckyou","faggot","kill yout self","kys"];
    return badWords.some(word => message.includes(word));
  }
  