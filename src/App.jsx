import { useState, useRef, useEffect } from 'react'
import Header from './components/Header';
import Footer from "./components/Foot"
import corny from "/src/assets/Color Styles.png"
function App(){

  function Card(props){
   let value = props.name;
   let the_poor= props.breeve;
   return(
    <>
    <div className='special'>
    <img src={corny} style={{width: "20rem"}}/>
    <div><h2>{value}</h2>
    <h4>{the_poor}</h4>
    </div>
    </div>
    </>
   )
  }

  function Category(props){
    let cat_name = props.name;

    return(
      <>
      <h2>{cat_name}</h2>
      <div className='selection grid'>
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
      </div>
      </>
    )
  }
  function Popular(){
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
  <Header/>
 
  <Card name="Shujinko Wins" breeve="A corny cheesecake with love and joy x"/>
  <Category name="Sweet Tooth"/>
  <Category name="Slinko"/>
  <Popular/>
  <Signup></Signup>
  <Collections/>
  <LatestRecipes/>
  <Footer/>
  </>
)
}
export default App;

function Signup(){

  return(
    <>
    <div style={{display:"grid", backgroundColor: "#FF642F"}}>
    <div style={{justifySelf:"center", alignSelf:"center"}}>
      <p>Deliciousness to your inbox</p>
      <p>Enjoy hand picked meals in your emails each week! You're just one click away!</p>
      <input type='text' placeholder='Email Address'></input>
      <button>Sign Up</button>
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