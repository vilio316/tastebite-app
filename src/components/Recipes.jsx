import Footer from "./Foot";
import Header from "./Header";
import React, {useState, useEffect} from "react";

function Recipes(){
    const[image, changeURl] = useState("");
    const[blurbs, setBlurb] = useState("")
    const[photographs, photoUpdate] = useState([]);
    let baseURL = `https://www.themealdb.com/api/json/v1/1/`;
    let searchURL = `${baseURL}search.php?s=`
    let srcs;
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

const imageHunter =(param)=> {
    fetch(`${searchURL}${param}`).then((response)=> response.json()).then((data)=>
     { console.log(data); 
        for(let i = 0; i < data.meals.length; i++){
            let link = String(data.meals[i].strMealThumb);
            photoUpdate((array)=> [...array, link])
        }
    }).catch((err)=> {console.log(err); console.log(`No dice, blud. Here's the error: ${err}`)})
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
useEffect(()=> {imageHunter('cake')}, []);
useEffect(()=> {fetcher("beef", 1)}, [])
   
return(
        <>
        <Header/>
        <img src={image}/>
        <p>{blurbs}</p>12
        <ManyShots/>
        <Footer/>
        </>
    )
}
export default Recipes