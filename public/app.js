axios.get('/api/beans')
  .then(({data}) => {
    data.forEach(bean => {
      let beanElem = document.createElement('option')
      beanElem.textContent = bean.name
      document.getElementById('bean').append(beanElem)
    })
  })

axios.get('/api/syrups')
  .then(({ data }) => {
    data.forEach(syrup => {
      let syrupElem = document.createElement('option')
      syrupElem.textContent = syrup.name
      document.getElementById('syrup').append(syrupElem)
    })
  })

axios.get('/api/toppings')
  .then(({ data }) => {
    data.forEach(topping => {
      let toppingElem = document.createElement('option')
      toppingElem.textContent = topping.name
      document.getElementById('topping').append(toppingElem)
    })
  })

axios.get('/api/drinks')
.then(({data}) => {
  
  data.forEach(drink => {
    let drinkElem = document.createElement('li')
    drinkElem.innerHTML = `
    <p>Drink: ${drink.name}</p>
    <p>Bean: ${drink.bean.name}</p>
    <p>Caffeine: ${drink.bean.caffiene}</p>
    <p>Syrup: ${drink.syrup.name}</p>
    <p>Carbs: ${drink.syrup.carbs}</p>
    <p>Topping: ${drink.topping.name}</p>
    <p>Topping Type: ${drink.topping.type}</p>
    `
    document.getElementById('drinks').append(drinkElem)
  })
})
.catch(err => console.log(err))

let name = document.getElementById('name').value
document.getElementById('makeDrink').addEventListener('click', event => {
  event.preventDefault()
  let beanId = parseInt(document.getElementById('bean').options[document.getElementById('bean').selectedIndex].value)
  let syrupId = parseInt(document.getElementById('syrup').options[document.getElementById('syrup').selectedIndex].value)
  let toppingId = parseInt(document.getElementById('topping').options[document.getElementById('topping').selectedIndex].value)

  
  axios.post('/api/drinks')
  .then(({ data }) => {
    console.log(data)
  })
  .catch(err => console.log(err))
})

