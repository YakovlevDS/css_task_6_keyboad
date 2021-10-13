// ? Task:

// Solution 1

// caps lock key
const capsLock= document.getElementById("caps-lock")

document.addEventListener('DOMContentLoaded',()=> 
    capsLock.addEventListener('click',
        () => capsLock.childNodes[0].classList.toggle("on")
  ))

// ! Explanation:
