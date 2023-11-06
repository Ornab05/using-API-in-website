const bideshBondhu=()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res=>res.json())
    .then(JSON=> load(JSON))
}

const load=JSON=>{
   const div= document.getElementById('bideshini');


//    photo

const photo =document.getElementById('photo');

photo.innerHTML=`
<img src="${JSON.results[0].picture.large}" > 


`

  
//    name
  document.getElementById('name').innerHTML=`
     Name: ${JSON.results[0].name.title+ ' ' + JSON.results[0].name.first + ' ' + JSON.results[0].name.last}
  `

  // country
  document.getElementById('country').innerHTML=`
     Country: ${JSON.results[0].location.country}
  ` 



// gender
  div.innerHTML=`
  <h2><i>gender: ${JSON.results[0].gender}</i></h2>
  `
 console.log(JSON.results[0].name.first)
 
}


bideshBondhu()