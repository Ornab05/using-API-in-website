const mealPrep = async(searchName)=>{
  // async await
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`
   
  try{
    const res= await fetch(url)
  const json= await res.json() 
  mealdata(json.meals )
  }
  catch{error=>
    console.log(error)
  }



    // fetch(url)
    // .then(res=>res.json())
    // .then(json=> mealdata(json.meals))
}

const mealdata=meals=>{
    const div= document.getElementById('div');
    div.innerHTML='';

    meals.forEach( meal =>{
        meal.innerHTML='';
        
        console.log(meal.idMeal)
        const div2= document.createElement('div')
        div2.classList.add('col')
        div2.innerHTML=`
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          
          <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal">
             Details
          </button>

        </div>
      </div>
        `
        div.appendChild(div2)


    })
}

const searchMeals= ()=>{
  const searchName= document.getElementById('searchText').value;
   mealPrep(searchName)
   
}

const loadMealDetail=(idmeal)=>{
  url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`;
  fetch(url)
  .then(res=>res.json())
  .then(data => loadMeals(data.meals[0]))
  

}

const loadMeals=(meal1)=>{
  const header= document.getElementById('ModalHeader');
   header.innerHTML= meal1.strMeal;
  
}

mealPrep('a')