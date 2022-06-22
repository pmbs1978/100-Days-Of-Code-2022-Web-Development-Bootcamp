console.log('for loop')

for (let i = 0; i < 10; i++){
    console.log(i)
}

console.log('for in loop - array')

const USERS = ['Pedro', 'Mário', 'Ana', 'Maria', 'Alfredo']

console.log(USERS)

console.dir(USERS)

for (const USER in USERS) {
    console.log(USER)
}

console.log('for of loop - array')

for (const USER of USERS) {
    console.log(USER)
}

console.log('for in loop - objects')

const PERSONS = {
    name: 'Pedro',
    age: 44,
    sex: 'Male',
    active: true
}

for (const PROPERTY in PERSONS) {
    console.log(PROPERTY)
    console.log(PERSONS[PROPERTY])
}

console.log('for of loop - objects retorna erro')

// RETURNS ERROR
// for (const PERSON of PERSONS) {
//     console.log(PERSON)
// }

console.log('while loop')

let y = 0

while (y < 10 ) {
    console.log(y)
    y++
}

const CALCULATEDSUMBTN = document.querySelector('#calculator button')

CALCULATEDSUMBTN.addEventListener('click', function() {
    const USERNUMBER = document.getElementById('user-number')
    const LIMITNUMBER = USERNUMBER.value
    const CALCULATEDSUM = document.getElementById('calculated-sum')

    let result = 0

    for (let i = 0; i <= LIMITNUMBER; i++) {
        result = result + i
    }
    CALCULATEDSUM.style.display = 'block'
    CALCULATEDSUM.textContent = result
})

const LINKSBTN = document.querySelector('#highlight-links button')

LINKSBTN.addEventListener('click', function() {
    const LINKS = document.querySelectorAll('#highlight-links a')
    for (let link of LINKS) {
        link.classList.add('highlight')
    }
})
