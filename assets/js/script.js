let signUpButton = document.getElementById("signUp")
let signInButton = document.getElementById("signIn")
let container = document.getElementById("container")

signUpButton.addEventListener('click', (e)=>{
    e.preventDefault()
    container.classList.add("right-panel-active")
})

signInButton.addEventListener('click', (e)=>{
    e.preventDefault()
    container.classList.remove("right-panel-active")
})