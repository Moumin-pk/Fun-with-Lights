let normal = document.querySelector('.normal')
let police_light = document.querySelector('.police_light')
let flaser = document.querySelector('.flaser')
let off = document.querySelector('.off')

let red = document.querySelector('.red')
let blue = document.querySelector('.blue')


normal.addEventListener('click', () => {
  red.style.animation = 'none'
  blue.style.animation = 'none'
  red.style.backgroundColor = '#ffffff';
  blue.style.backgroundColor = '#ffffff';
} )


police_light.addEventListener('click', () => {
  red.style.backgroundColor = 'red'
  blue.style.backgroundColor = 'blue'
  red.style.animation = 'megas 0.5s linear infinite';
  blue.style.animation = 'mega 0.5s linear infinite'; 
} )


flaser.addEventListener('click', () => {
  red.style.backgroundColor = 'white'
  blue.style.backgroundColor = 'white'
  red.style.animation = 'flaser 0.5s linear infinite';
  blue.style.animation = 'flaser 0.5s linear infinite';
} )


off.addEventListener('click', () => {
  red.style.backgroundColor = 'black'
  blue.style.backgroundColor = 'black'
  red.style.animation = 'none'
  blue.style.animation = 'none'
  
} )