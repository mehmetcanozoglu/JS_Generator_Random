
function generateRandomNumber (){
    let min = 1
    let max = 100

    let randomNumber = Math.floor(Math.random() * (max - min + 1))

    document.getElementById("result").textContent =
     `Random Number: ${randomNumber}`
}
document.getElementById("generateButton").addEventListener("click", generateRandomNumber)
