 function rollerDice(){
  const numberVal = document.getElementById('rollInput').value;
  
  const values = [];
  const images = [];


  const dicePar = document.getElementById('diceDiv');
  const dice_container = document.getElementById('dice_container');
  
  
  
  for(let i = 0; i < numberVal;i ++){
      const value = Math.floor(Math.random()*6)+1;
      values.push(value);
      images.push(`<img src = "imagenes/${value}.JPG" style= height: 150px; width: 150px>`);
    }
    dicePar.textContent = `Dice: ${values.join(', ')}`;
    dice_container.innerHTML = images.join(''); 

}

