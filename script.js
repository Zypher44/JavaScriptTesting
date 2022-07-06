
person = {
    make: 'Nissian',
    Model: 'Infinity',
    isUsed: false,
    makeNoise: function(){
        console.log('Vroom')
    }


     
}

console.log(person) 


const items = [
    {price: 10},
    {price: 15},
    {price: 25},
    {price: 13},
    {price: 35},
    {price: 15},
]


const s = items.reduce((sum, price) => {
    return sum + price
}, 0)

console.log(s)




const sumOfItems = items.reduce((sum, items) => {
    return sum + items.price

}, 0)

console.log(sumOfItems)


function createUser(name, age){
    return {name: name, age:age}
}

const user = createUser('Rady', 24)
console.log(user)
const date = new Date()
console.log(date)



 
function User(name, age){
    this.name = name
    this.age = age
    this.human = true
} // Capitalize letter with constructor function 

const user1 = new User('Sally', 23)
console.log(user1)

//const window = window






if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }

  const divWithId = document.getElementById('div-id')
  divWithId.style.color = 'red'

  const divWithClass = document.getElementsByClassName('div-class') // this is an array
  
 const divWithClassArrays =  Array.from(divWithClass) //changes to Array if close 

  divWithClassArrays.forEach(div => (div.style.color = 'Green'))


  console.log(divWithClass)

  const dataAttribute = document.querySelector('[data-test]')
  console.log(dataAttribute)

  const divsWithclass1 = document.querySelectorAll('.div-class1')
  console.log(divsWithclass1)

  divsWithclass1.forEach(div => (div.style.color = 'blue'))

  const input = document.querySelector('input')
  console.log(input)

const button = document.querySelector('button')
button.addEventListener('click', (e) => {
    console.log("Arrow")
})