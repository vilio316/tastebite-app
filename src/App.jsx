import { useEffect, useState } from "react";
import corny from "/src/assets/Color Styles.png"

function App(){
  
  function Card(){
    let [random, changeRandom] = useState([])
    useEffect(()=> async function randomMeal(){
      let baseURL = `https://www.themealdb.com/api/json/v1/1/`;
      let searchURL = `${baseURL}random.php?`
      let res = await fetch(`${searchURL}`)
      const data_meal= await res.json();
      let randMeal = data_meal.meals[0];
      changeRandom([...random, randMeal.strMeal, randMeal.strMealThumb, randMeal.idMeal])
      
  },[])
  console.log(random)
    return(
      <>
      
      <div>
        <img src={`${random[1]}`} alt={`${random[0]}`}></img>
        <p><a href={`/recipes/random/${random[2]}`}>{random[0]}</a></p>
      </div>
      </>
    )
  }

  function Category(props){
    let cat_name = props.name;
    let [first, changeFirst] = useState([]);
    let [second, changeSecond] = useState([]);
    let [third, changeThird] = useState([]);
    function categorySearch(cat){
      let baseURL = `https://www.themealdb.com/api/json/v1/1/`;
      let searchURL = `${baseURL}filter.php?c=`
      fetch(`${searchURL}${cat}`).then((res)=> res.json()).then((data_cats)=>{ 
        console.log(data_cats)
      let first_data = data_cats.meals[0];
      let second_data = data_cats.meals[1];
      let third_data = data_cats.meals[2];
      changeFirst([...first, first_data.strMeal, first_data.strMealThumb, first_data.idMeal])
      changeSecond([...second, second_data.strMeal, second_data.strMealThumb, second_data.idMeal])
      changeThird([...third, third_data.strMeal, third_data.strMealThumb, third_data.idMeal])
      }
      )
  }
  useEffect(()=> categorySearch(cat_name), [])
    return(
      <>
      <h2>{cat_name}</h2>
      <div className='selection grid'>
      <div>
        <div>
        <img src={first[1]} className="foodshot"/>
        </div>
        <h4><a href={`/recipes/${cat_name}/${first[2]}`}>{first[0]}</a></h4>
      </div>

      <div>
        <div>
        <img src={second[1]} className="foodshot"/>
        </div>
        <h4><a href={`/recipes/${cat_name}/${second[2]}`}>{second[0]}</a></h4>
      </div>

      <div>
        <div> <img src={third[1]} className="foodshot"/>
        </div>
        <h4><a href={`/recipes/${cat_name}/${second[2]}`}>{third[0]}</a></h4>
      </div>
      </div>
      </>
    )
  }
  function Popular(){
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`).then((res)=> res.json()).then((data)=> console.log(data));
    return(
      <>
      <h2>Popular Categories</h2>
      <div className='grid' style={{gridTemplateColumns: "auto auto auto auto auto auto"}}>
        <div>
      <img src={corny} width={"100%"} style={{borderRadius: "50%", border: "1px solid black"}}/>
        </div>
        <div>
      <img src={corny} width={"100%"}/>
        </div>
        <div>
      <img src={corny} width={"100%"}/>
        </div>
        <div>
      <img src={corny} width={"100%"}/>
        </div>
        <div>
      <img src={corny} width={"100%"}/>
        </div>
        <div>
      <img src={corny} width={"100%"}/>
        </div>
      </div>
      </>
    )
  }

return (
  <>
  <div>
    <Card/>
  <Category name="Seafood"/>
  <Category name="Dessert"/>
  <Popular/>
  <Signup></Signup>
  <Collections/>
  <LatestRecipes/>
  </div>
  </>
)
}
export default App;

function Signup(){

  return(
    <>
    <div style={{display:"grid", backgroundColor: "#FF642F"}}>
    <div style={{justifySelf:"center", alignSelf:"center", display:"grid", width: "50%"}}>
      <span style={{textAlign: "center", fontSize: "2.5rem"}}>Deliciousness to your inbox</span>
      <p>Enjoy hand picked meals in your emails each week! You're just one click away!</p>
      <div style={{justifySelf:"center", alignSelf:"center"}}>
      <input type='text' placeholder='Email Address' style={{width: "55%"}}></input>
      <button >Sign Up</button>
      </div>
    </div>
    </div>
    </>
  )
}
function Collections(){
  return(
    <>
    <h2>Handpicked Collections</h2>
    <div style={{display:"grid", gridTemplateColumns:"auto auto auto",
  gridTemplateRows: "auto auto"}}>
<div>
        <img src={corny} width= {"30%"}/>
        <h4>Bisht Soup</h4>
      </div>
      <div>
        <img src={corny} width= {"30%"}/>
        <h4>Bisht Soup</h4>
      </div>
      <div>
        <img src={corny} width= {"30%"}/>
        <h4>Bisht Soup</h4>
      </div>
      <div>
        <img src={corny} width= {"30%"}/>
        <h4>Bisht Soup</h4>
      </div><div>
        <img src={corny} width= {"30%"}/>
        <h4>Bisht Soup</h4>
      </div><div>
        <img src={corny} width= {"30%"}/>
        <h4>Bisht Soup</h4>
      </div>
  </div>
    </>
  )
}
function LatestRecipes(){
  return(
    <>
    <h2>Our Latest Recipes</h2>
    <div className='grid' style={{gridTemplateRows: "auto auto auto", gridTemplateColumns: "auto auto auto auto"}}>
      <div>
        <img src={corny} width={"75%"} alt="Experimentation"></img>
      </div>
      <div>
        <img src={corny} width={"75%"} alt="Experimentation"></img>
      </div>
      <div>
        <img src={corny} width={"75%"} alt="Experimentation"></img>
      </div>
      <div>
        <img src={corny} width={"75%"} alt="Experimentation"></img>
      </div>
      <div>
        <img src={corny} width={"75%"} alt="Experimentation"></img>
      </div>
      <div>
        <img src={corny} width={"75%"} alt="Experimentation"></img>
      </div>
      <div>
        <img src={corny} width={"75%"} alt="Experimentation"></img>
      </div>
      <div>
        <img src={corny} width={"75%"} alt="Experimentation"></img>
      </div>
      <div>
        <img src={corny} width={"75%"} alt="Experimentation"></img>
      </div>
      <div>
        <img src={corny} width={"75%"} alt="Experimentation"></img>
      </div>
    </div>
    <div className='grid'>
      <button style={{justifySelf: 'center'}}>See More Recipes...</button>
    </div>
    </>
  )
  }