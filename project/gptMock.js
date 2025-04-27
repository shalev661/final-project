// סימולציה: אם ההודעה כוללת אחת מהמילים – נחשב כפוגעני
function isOffensive(message) {
    const badWords = ["טיפש", "אידיוט", "מטומטם"];
    return badWords.some(word => message.includes(word));
  }
  