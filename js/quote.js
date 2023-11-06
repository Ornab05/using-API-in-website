const listQuote =() =>{
     fetch('https://api.kanye.rest/')
     .then(res=>res.json())
     .then(data=>janina(data))
}

const janina= data =>{
    let blockQuote= document.getElementById('quote');
    blockQuote.classList.add('janina')
    
    blockQuote.innerHTML= `
             <h3><i>${data.quote}</i></h3>
    `
}


listQuote()