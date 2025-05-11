function isOffensive(message ) {
    return badWords.some(word => message.includes(word));
  }
  