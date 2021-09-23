console.log('Creepy Eyes are being HIDDEN!');

const creepKiller = () => {
  console.log('creepKiller is running!');


  // create array of all reacts currently in view
  const arrOfReacts = document.getElementsByClassName("c-reaction");
  // console.log(arrOfReacts);


  // filter arrOfReacts for ::eyes:: and count is at least 3
  const arrOfEyes = [];
  for (const button of arrOfReacts) {
    if (button.ariaLabel.includes('react with eyes')
    && countPuller(button.ariaLabel) > 1) {
      arrOfEyes.push(button);
    }
  }
  // console.log('arrOfEyes', arrOfEyes);


  // convert eyes to posts
  const arrOfPosts = [];
  for (const eyesReact of arrOfEyes) {
    arrOfPosts.push(eyesReact.closest(".c-virtual_list__item"));
  }
  // console.log('arrOfPosts', arrOfPosts);


  // change the properties of the parent element
  for (const post of arrOfPosts) {
    
    const redact = document.createElement('img');
    redact.src = 'http://glorifiedbicycles.com/wp-content/uploads/2019/09/redacted.png';

    post.replaceChild(redact, post.childNodes[0]);

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
