import logo from "/src/assets/logo.svg"
import "/src/assets/default_styles.css"
import { useRef, useState } from "react";

function Header(){
    let [search_input, changeState] = useState("")
    let [isModalShown, changeModalViewState]= useState(false)
    return (
        <>
<div className="grid nav">
      <img src={logo} alt="Logo" className="logoimg"/>
    <a href={"/"} className="center">Home</a>
    <a href={`/recipe_homepage`} className="center">Recipes</a>
    <a href={"/about-us"} className="center">About Us</a>
    <a href={`/blogs`} className="center">Blogs</a>
    <span className="material-icons center" onClick={()=> {
        changeModalViewState(true)
    }}>
            search
            </span>
    </div>

    {isModalShown ? <>
    <div style={{backgroundColor:"black", opacity: "0.85", height: "100%", width: "100%", position:"absolute", top: 0}}>
    <span className="header_search_shut"
            onClick={()=> {changeModalViewState(false)}}>X</span>
        <div className="grid search_div">
            <input className="header_search_field" type="text" id="search-input" placeholder={`Search Here...`} style={{width: "90%", padding: "0.5rem 0", marginTop: "1rem",color:"white", backgroundColor:"black", textIndent:"1rem", fontWeight:"bold", outline: "none",borderRadius:"1.5rem", border: "0.25rem solid "}}  
            onChange={(e)=> {
                changeState(e.target.value); console.log(search_input)
            }}
            />
        <div className="grid" style={{gridTemplateColumns: "auto auto"}}>
        <button className=" search_button"
        style={{borderRadius: "1rem", placeSelf:"center", border: "none", color: "white", backgroundColor:"#ff642f", width:"75%"}}><a href={`/recipes/${search_input}`}>Search</a></button>
        </div>
    </div>
 </div>
 </> : <></>}
    </>
    )
}
export default Header;