function isOffensive(message ) {
    const badWords = ["טיפש", "אידיוט", "מטומטם", "fuck", "fuckyou","ass","ssa","ahh","ah","fvck","fck"];
    return badWords.some(word => message.includes(word));
  }
  