
document.getElementById('makeDrink').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/drinks', {
    name: document.getElementById('drinkName').value,
    beanId: 1,
    syrupId: 1,
    toppingId:1
  })
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
})

