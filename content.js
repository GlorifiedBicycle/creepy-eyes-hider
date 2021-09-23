console.log('Creepy Eyes are being HIDDEN!');

const creepKiller = () => {
  console.log('creepKiller is running!');


  // create array of all reacts currently in view
  const arrOfReacts = document.getElementsByClassName("c-reaction");
  // console.log(arrOfReacts);


  // filter arrOfReacts for ::eyes:: and count is at least 3
  const arrOfEyes = [];
  let threshold = 1;
  for (const button of arrOfReacts) {
    if (button.ariaLabel.includes('react with eyes')
    && countPuller(button.ariaLabel) > threshold) {
      arrOfEyes.push(button);
    }
  }
  // console.log('arrOfEyes', arrOfEyes);


  // convert eyes to posts
  // arrOfEyes holds button elements which are eyes reacts with count > 2
  const arrOfParentBlocks = [];
  for (const eyesReact of arrOfEyes) {
    // push the message kit block (prevSib of react bar)
    const parent = eyesReact.parentNode.previousSibling;
    if ( !parent.className.includes("c-message_kit__blocks--rich_text")) {
      arrOfParentBlocks.push(parent);
    }
  }
  console.log('arrOfParentBlocks', arrOfParentBlocks);

  // select MESSAGE BLOCK for each PARENT BLOCK
  // arrOfMessageBlocks holds the posts to be hidden / replaced
  const arrOfMessageBlocks = [];
  for (let message of arrOfParentBlocks) {
    // push message block element (2 levels below)
    arrOfMessageBlocks.push(message.firstElementChild.firstElementChild);
  }
  console.log('arrOfMesageBlocks', arrOfMessageBlocks);


  // insert a new img element before messageBlock
  for (let messageBlock of arrOfMessageBlocks) {

    // console.log('Message Block', messageBlock);

    if (messageBlock.className == "c-message__message_blocks") {
      // create a new image element
      const newImage = document.createElement('img');
      newImage.className = "New-Image";
      newImage.src = 'https://glorifiedbicycles.com/wp-content/uploads/2019/09/notice.png';
      newImage.style.display = 'inline-flex';

      messageBlock.style.display = 'none';
      messageBlock.parentNode.prepend(newImage);
      console.log('Parent', messageBlock.parentNode.childNodes);
    }
  }

  // end of creepKiller
}

const timedCreepExecution = setInterval(creepKiller, 1000);


// take the reacts count from ariaLabel string
function countPuller(string) {
  let creepCount = '';
  
  for (const char of string) {
    if (char === ' ') {
      return Number(creepCount);
    } else {
      creepCount += char;
    }
  }
}
