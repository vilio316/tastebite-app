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
    return(
      <>
      
      <div className="grid card">
        <div className="grid" style={{placeItems:"center"}}>
        <img src={`${random[1]}`} alt={`${random[0]}`} className="foodshot"></img>
        </div>
        <p className="mega"><a href={`/recipes/random/${random[2]}`}>{random[0]}</a></p>
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
  function Popular(props){
    const [categories, addCategory] = useState([]);
    const name = props.name
    function fetchCats(search){
      let baseURL = `https://www.themealdb.com/api/json/v1/1/`;
      let searchURLCats = `${baseURL}filter.php?c=${search}`;
      fetch(searchURLCats).then((res)=> res.json()).then((data)=>{
        addCategory([...categories, data.meals[1].strMealThumb])
        }
      )
       }

    useEffect(()=> fetchCats(name), [])
    return(
    <div>
      <div style={{height: '80%', display:"flex", placeItems:"center", padding:"0.5rem 0.25rem"}}>
        <img src={categories} alt={name} className="foodshot"/>
        </div>
        <a href={`/recipes/categories/${name}`}>{name}</a>
    </div>
    )
}
return (
  <>
    <Card/>
  <Category name="Seafood"/>
  <Category name="Dessert"/>
  <h2>Popular Categories</h2>
  <div className="grid" style={{gridTemplateColumns:'auto auto auto auto auto auto'}}>
  <Popular name="Beef"/>
  <Popular name="Breakfast"/>
  <Popular name="Vegan"/>
  <Popular name="Pasta"/>
  <Popular name="Side"/>
  <Popular name="Starter"/>
  </div>
  <Signup></Signup>
  <Collections/>
  <LatestRecipes/>
  </>
)
}
export default App;

function Signup(){

  return(
    <>
    <div style={{display:"grid", backgroundColor: "#FF642F", height:"15rem"}}>
    <div style={{justifySelf:"center", alignSelf:"center", display:"grid", width: "50%"}}>
      <span style={{textAlign: "center", fontSize: "2.5rem"}}>Deliciousness to your inbox</span>
      <p style={{textAlign: "center"}}>Enjoy hand picked meals in your emails each week! You're just one click away!</p>
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