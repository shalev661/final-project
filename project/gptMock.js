function isOffensive(message ) {
    const badWords = ["טיפש", "אידיוט", "מטומטם", "fuck", "fuckyou" , "go to hell" , "בן זונה" , "זונה" , "בת זונה" , "שרמוטה"]; 
    return badWords.some(word => message.includes(word));
  }
  