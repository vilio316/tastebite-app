import React, {useState, useEffect} from "react";
import { useLoaderData } from "react-router-dom";

 const fetcher =(param, index)=> {
let blurb, leilana;
fetch(`${searchURL}${param}`).then((response)=> response.json()).then((data)=>{
    blurb = data.meals[index].strMeal;
    setBlurb(blurb);
    leilana = String(data.meals[index].strMealThumb);
    changeURl(leilana);
    console.log(data)
}).catch((err)=> {console.log(err); console.log("Whoopsie, not found")})
}



function ManyShots(props){
let selected = [];
for(let j = 0; j < 12; j++){
    selected.push(photographs[j])
}
console.log(selected)
return(
    <div className="grid" style={{gridTemplateColumns: "auto auto auto auto auto"}}>
    {selected.map((photo) => <img src={photo}/>)}
    </div>
)
}
function Recipes(props){
    let food_item = String(props.get);
    const[photographs, photoUpdate] = useState([]);
    const imageHunter =(param)=> {
    let baseURL = `https://www.themealdb.com/api/json/v1/1/`;
    let searchURL = `${baseURL}search.php?s=`
    fetch(`${searchURL}${param}`).then((response)=> response.json()).then((data)=>
     { console.log(data); 
        for(let i = 0; i < data.meals.length; i++){
            let link = String(data.meals[i].strMealThumb);
            photoUpdate((array)=> [...array, link])
        }
    }).catch((err)=> {console.log(err); console.log(`No dice, blud. Here's the error: ${err}`)})
    }
useEffect(()=> {imageHunter({food_item})}, []);
   
return(
        <>
        <img src={image}/>
        <p>{blurbs}</p>
        <ManyShots/>
        </>
    )
}
export default Recipes