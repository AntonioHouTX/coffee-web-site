const panels = document.querySelectorAll('.panel')
const description = document.querySelector('.desc')
const espresso = document.querySelector('.espresso')
const cappuccino = document.querySelector('.cappuccino')
const macchiato = document.querySelector('.macchiato')
const caffeLatte = document.querySelector('.caffe-latte')
const americano = document.querySelector('.americano')
const italics = document.createElement('em')


espresso.addEventListener('click', () => {
  description.textContent = 'A concentrated shot of coffee brewed under steam pressure.  Bold and delicious.'
})

cappuccino.addEventListener('click', () => {
  description.textContent = 'Espresso with steamed milk and foam on top.'
})

macchiato.addEventListener('click', () => {
  description.innerHTML = 'Macchiato, from the Italian for <i>stained</i>, is an Espresso with a touch of foam on top.'
})

caffeLatte.addEventListener('click', () => {
  description.textContent = 'Equal parts Espresso and test steamed milk.'
})

americano.addEventListener('click', () => {
  description.textContent = 'Originating from American GIs in Italy who wanted Espresso with more water in it.'
})

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}

/*
const panels = document.querySelectorAll('.panel, .desc')
const descriptions = document.querySelectorAll('.desc')

descriptions.forEach((description) => {

})

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
*/