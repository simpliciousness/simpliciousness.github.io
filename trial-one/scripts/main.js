let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ghost-stories.png') {
      myImage.setAttribute ('src','images/piers.png');
    } else {
      myImage.setAttribute ('src','images/ghost-stories.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'remember to channel the vibes of the dead gods, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'remember to channel the vibes of the dead gods, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }