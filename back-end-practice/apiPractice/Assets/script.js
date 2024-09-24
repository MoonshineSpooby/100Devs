/*
Date: 04/15/24 Author: Thomas Alden
Summary: Basics of JavaScript
*/
const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?"
const dogs = new Array('c', 'g', 'i', 'a')
    .map(x => url + x + `=list`)
console.log(dogs.toString())
dogs.push("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
dogs.push("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=")
/*  */
class Drink {
    //data.drinks[0]
    constructor(drink){
        this.properties = new Array()
        this.values = new Array()
        for(const property in drink){
            this.properties.push(property)
            this.values.push(drink[property])

        }
        this.name = drink.strDrink
        if(drink.strDrinkAlternate) {
            this.name += ` / ${drink.strDrinkAlternate}`
        }
        this.imgSrc = drink.strDrinkThumb
        this.idDrink = drink.idDrink
        this.instructions = drink.strInstructions
        
        
        this.ingredients = new Array()
        this.measurements = new Array()
        for(let i = 17; i < 32; i++){
            if(this.values[i] == null) break;
            this.ingredients.push(this.values[i])
            this.measurements.push(this.values[i+15])
        }
        console.log(`making a Drink:`)
        console.log(this.ingredients, this.measurements)
        console.log(this.properties, this.values)
        this.ingredientTable = ""
        for(let i = 0; i < this.ingredients.length; i++) {
            if(this.measurements[i]){
               this.ingredientTable += `${this.measurements[i]} of ${this.ingredients[i]}<br />`
            }
            else {
                this.ingredientTable += this.ingredients[i]
            }
        }
    }
    
    

}
async function getSearchTopics(urlArr) {
    try{
    for(const url of urlArr){
        let data =  await fetch(url)
        data = await data.json()
        console.log(data)

    }   }
    catch {
        publishResultCard("#", "#", "No Results Found.")
    }     
}


function publishResultCard(imgSrc, drinkId, name){
    const card = document.createElement('div')
    card.className = "searchResultCard"
    card.innerHTML = `<img class="cardImg" src="${imgSrc}"/>
    <p class="cardName">${name}</p>`
    card.addEventListener("click", function (){
        getDetailedResult(drinkId)
    })    
    document.getElementById('searchResults').appendChild(card)    
}
function publishDetailedResult(drink){
    const bigCard = document.createElement('div')
    bigCard.className = "detailedResult"
    if(drink.imgSrc){
        bigCard.innerHTML = `
            <p class="floatingImageText">${drink.name}</p>
            <img src="${drink.imgSrc}"/>
            <p>${drink.instructions}</p>              
            <p id="ingredientTable">${drink.ingredientTable}</p>
            `
    }
    document.querySelector("#searchResults").innerHTML = ""
    document.querySelector("#searchResults").appendChild(bigCard)
}
function getSearchInput(){
    return document.querySelector("#drinkSearch").value
}

async function getDetailedResult(drinkId) {
    try {
        console.log('Retrieving details for: ' + drinkId)
        let data = await fetch(dogs[5] + drinkId)
        data = await data.json()
        console.log(data)
        publishDetailedResult(new Drink(data.drinks[0]))
    } catch (error) {
        console.log(`couldn't retrieve due to: ${error}`)
        publishResultCard("#", "#", "No Results Found.")
    }
}

async function search(str){
    console.log('searched for:' +str )
    let data = await fetch(dogs[4] + str)
    data = await data.json()
    console.log(data)
    for(const drink of data.drinks){
        publishResultCard(
            drink.strDrinkThumb, drink.idDrink, drink.strDrink)
        
    }

}
let userInput =''
document.querySelector("#drinkSearch")
    .addEventListener("keydown", function (event) {
        if(event.keyCode !== 13) return
        document.getElementById('searchResults').innerHTML = ""
        search(document.querySelector("#drinkSearch").value)
    })




