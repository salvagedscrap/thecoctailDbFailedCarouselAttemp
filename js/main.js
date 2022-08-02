// // //The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', checkDrink)
document.querySelector('.reset').addEventListener('click', resetAll)



function checkDrink(){
let inputVal=document.querySelector('input').value
const ul=document.querySelector('ul');
let li

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputVal}`)

.then(res=>res.json())
.then(data=>{
    console.log(data.drinks);
    let drinks = data.drinks;
    for(let i=0;i<drinks.length;i++){
            let li = document.createElement("li");
            let img=document.createElement('img');
            let createp=document.createElement('p')

            
    li.innerText = drinks[i].strDrink;
    
       ul.appendChild(li);

       
       img.src=drinks[i].strDrinkThumb
       li.appendChild(img) 
       createp.innerText=drinks[i].strInstructions;
       li.appendChild(createp)
       let createIngt = document.createElement('span')
       
       let ingredientArr = [
        drinks[i].strIngredient1,
        drinks[i].strIngredient2,
        drinks[i].strIngredient3,
        drinks[i].strIngredient4,
        drinks[i].strIngredient5,
        drinks[i].strIngredient6,
        drinks[i].strIngredient7,
        drinks[i].strIngredient8,
        drinks[i].strIngredient9,
        drinks[i].strIngredient10,
        drinks[i].strIngredient11,
        drinks[i].strIngredient12,
        drinks[i].strIngredient13,
        drinks[i].strIngredient14,

    ].join(' ')
 

    createIngt.innerHTML=ingredientArr
    li.appendChild(createIngt)


    
   

        


     
    }
    


     
     
     
     

})
.catch(err=>{
    console.log(`error ${err}`);
})



}

function resetAll(){
let elLi = document.querySelectorAll('li')
    elLi.forEach(item=>
        item.remove())
let elP =document.querySelectorAll('p')
elP.forEach(item=>
    item.remove())
let elImg= document.querySelectorAll('img')
elImg.forEach(item=> item.remove())

   
}


// const ul = document.querySelector('ul');
        
// const li = 
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`)
// .then(res => res.json()) // parse response as JSON
// .then(data => {
    
//     console.log(data.drinks);
//     let drinks= data.drinks
//     for(let i = 0;i<drinks.length;i++){
    
//     let li = document.createElement("li");
//     let img=document.createElement('img')
  
//         li.innerText = drinks[i].strDrink;
//        ul.appendChild(li);
       
//        img.src=drinks[i].strDrinkThumb
//        li.appendChild(img)     

//     }


// })










 
//     //  fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//     //   .then(res => res.json()) // parse response as JSON
//     //   .then(data => {
//     //     console.log(data)
//     //   })
//     //   .catch(err => {
//     //       console.log(`error ${err}`)
//     //   });
  











//     // function bringInstruction(){
//     //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${li.innerText}`)
//     //     .then(res => res.json())
//     //     .then(data=>{
//     //         console.log(data);
//     //     })
//     // }




// })




//online solution that doesnt work
// document.querySelector('button').addEventListener('click', findDrink)

// let counter = 0

// function findDrink() {

//   let drinkName = document.querySelector('input').value;

//   fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
//     .then(data => data.json())
//     .then(item => {
//         console.log(data.message);
//       document.querySelector('h2').innerText = item.drinks[counter].strDrink;
//       document.querySelector('img').src = item.drinks[counter].strDrinkThumb;
//       document.querySelector('h3').innerText = item.drinks[counter].strInstructions;

//       let length = item.drinks.length
//       if (counter > length - 2) {
//         counter = 0;
//       } else {
//         counter += 1
//       }
//     })
// }
// setInterval(findDrink, 5000)
