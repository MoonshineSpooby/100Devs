fetch(dogs[0])
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i < data.drinks.length; i++){
            const menuItem = document.createElement('li')
            menuItem.innerText = data.drinks[i].strCategory
            document.querySelector('#categoryDropDown')
                .appendChild(menuItem)
        }
    })
    .catch(err => {
        console.log(err)
    })
fetch(dogs[1])
    .then(result => result.json())
    .then(data => {        
        for(let i = 0; i < data.drinks.length; i++){
            const menuItem = document.createElement('li')
            menuItem.innerText = data.drinks[i].strGlass
            document.querySelector('#glassesDropDown').appendChild(menuItem)
        }
    })
    .catch(err => {
        console.log(`err: ${dogs[1]}`)
    })
fetch(dogs[2])
    .then(result => result.json())
    .then(data => {        
        for(let i = 0; i < data.drinks.length; i++){
            const menuItem = document.createElement('li')
            menuItem.innerText = data.drinks[i].strIngredient1
            document.querySelector('#ingredientsDropDown').appendChild(menuItem)
        }
    })
    .catch(err => {
        console.log(`err: ${dogs[1]}`)
    })
fetch(dogs[3])
    .then(result => result.json())
    .then(data => {
        for(let i = 0; i < data.drinks.length; i++){
            const menuItem = document.createElement('li')
            menuItem.innerText = data.drinks[i].strAlcoholic
            document.querySelector('#alcoholDropDown').appendChild(menuItem)
        }
    })
    .catch(err => {
        console.log(`err: ${dogs[1]}`)
    })