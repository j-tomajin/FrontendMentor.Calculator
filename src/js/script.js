const mainDisplay = document.querySelectorAll('[data-display-main]')

const numbers = document.querySelectorAll('[data-key-numbers]')

numbers.forEach(function(number) {
    number.addEventListener('click', () => {
        numberInput(number)
    })
})

function numberInput(number) {
    console.log('test')
    mainDisplay.innerText = number.innerText
}