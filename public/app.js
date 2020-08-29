axios.get('/api/beans')
    .then(({ data }) => {
        data.forEach(bean => {
            let beanElem = document.createElement('option')
            beanElem.value = bean.id
            beanElem.textContent = bean.name
            document.getElementById('bean').append(beanElem)
        })
    })
    .catch(err => console.log(err))

    