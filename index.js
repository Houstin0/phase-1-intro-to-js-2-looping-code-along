// Code your solutions in this file
function writeCards(names, occasion) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      messages.push(
        `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`
      )
    }
  
    return messages;
  }
  
  function countDown(countdown) {
    while (countdown >= 0) {
      countdown--
      console.log(countdown+1)
    }
  }
  countDown(5)