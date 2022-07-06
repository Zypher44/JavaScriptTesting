// Select all elements 
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')


// When Submit form add new element 
form.addEventListener('submit', e => {
    e.preventDefault()

// Create new item 
const items = document.createElement('div')
items.innerText = input.value
items.classList.add('list-items')


// Add new item to list
list.appendChild(items)
// Clear input

input.value = ''
// setup event lisnter to delete item when clicked
items.addEventListener('click', () =>
list.removeChild(items))


})