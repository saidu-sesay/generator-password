let generateEl = document.getElementById('gen-btn')
let display1 = document.getElementById('msg1-btn')
let display2 = document.getElementById('msg2-btn')
const characters = ["A","B","C","D","E","F","G","H",
                     "I","J","K","L","M","N","O","P",
                     "Q","R","S","T","U","V","W","X",
                     "Y","Z","a","b","c","d","e","f",
                     "g","h","i","j","k","l","m","n",
                     "o","p","q","r","s","t","u","v",
                     "w","x","y","z", "0", "1", "2", 
                     "3", "4", "5", "6", "7", "8", "9",
                     "~","`","!","@","#","$","%","^","&",
                     "*","(",")","_","-","+","=","{","[","}",
                     "]",",","|",":",";","<",">",".","?",
                     "/"];

function getRandomCharacters() {
  let randomNumbers = Math.floor(Math.random() * characters.length)
  return characters[randomNumbers]
}

function getRandomCharacters2() {
  let randomNumbers = Math.floor(Math.random() * characters.length)
  return characters[randomNumbers]
}

generateEl.addEventListener('click', () => {
display1.textContent = getRandomCharacters() + getRandomCharacters() + getRandomCharacters() + getRandomCharacters() + getRandomCharacters() + getRandomCharacters() + getRandomCharacters() + getRandomCharacters() + getRandomCharacters() + getRandomCharacters() + getRandomCharacters() + getRandomCharacters() + getRandomCharacters() + getRandomCharacters() + getRandomCharacters()
display2.textContent = getRandomCharacters2() + getRandomCharacters2() + getRandomCharacters2() + getRandomCharacters2() + getRandomCharacters2() + getRandomCharacters2() + getRandomCharacters2() + getRandomCharacters2() + getRandomCharacters2() + getRandomCharacters2() + getRandomCharacters2() + getRandomCharacters2() + getRandomCharacters2() + getRandomCharacters2() + getRandomCharacters2()
})











