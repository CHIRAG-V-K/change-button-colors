
//change color of all buttons 
let allButtons= document.getElementsByTagName('button');
let copyAllButtons = [];
for(let i=0;i<allButtons.length;i++){
  copyAllButtons.push(allButtons[i].classList[1]);
}

function buttonColorChange(buttonColorChoices){
   if(buttonColorChoices.value ==='red'){
     buttonRed();
   }else if(buttonColorChoices.value ==='green'){
     buttonGreen();
   }else if(buttonColorChoices.value ==='yellow'){
     buttonYellow();
   }else if(buttonColorChoices.value ==='random'){
     buttonRandom();
   }else if(buttonColorChoices.value ==='reset'){
     buttonColorReset();
   }
}

function buttonRed(){
  for(let i=0;i<allButtons.length;i++){
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add('btn-danger');
  }
}

function buttonGreen(){
  for(let i=0;i<allButtons.length;i++){
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add('btn-success');
  }
}

function buttonYellow(){
  for(let i=0;i<allButtons.length;i++){
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add('btn-warning');
  }
}

function buttonRandom(){
  var choices=['btn-primary','btn-secondary','btn-danger','btn-warning','btn-success'];
  for(let i=0;i<allButtons.length;i++){
    let randomNumber = Math.floor(Math.random()*5);
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(choices[randomNumber]);
  }
}
function buttonColorReset(){
  for(let i=0;i<allButtons.length;i++){
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyAllButtons[i]);   
  }
}
