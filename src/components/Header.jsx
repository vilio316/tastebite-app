import logo from "/src/assets/logo.svg"
import "/src/assets/default_styles.css"
import { useRef, useState } from "react";
function Header(){
    let input = useRef();
    let button = useRef();
    let visible_div = useRef();
    let closer= useRef();
    function showDiv(){
        let jimmy = visible_div.current;
        jimmy.style.display = "grid";
        }
    let [search_input, changeState]= useState("");
    return (
        <>
<div className="grid nav">
      <img src={logo} alt="Logo" className="logoimg"/>
    <a href={"/"} className="center">Home</a>
    <a href={`/recipe_homepage`} className="center">Recipes</a>
    <a href={"/about-us"} className="center">About Us</a>
    <a href={`/blogs`} className="center">Blogs</a>
    <span className="material-icons center" ref={button} onClick={showDiv}>
            search
            </span>
    </div>
    <div ref={visible_div} style={{backgroundColor:"black", opacity: "0.85", height: "100%", width: "100%", position:"absolute", top: 0, display:"none"}}>
        <div className="grid search_div" style={{height: "10%"}}>
        <label>
            <input ref={input} type="text" id={"search-input"} placeholder={`Search Here...`} style={{width: "90%", fontSize: "7.5rem", padding: "0.5rem 0", marginTop: "10%",color:"white", backgroundColor:"black", textIndent:"2.5rem", fontWeight:"bold", outline: "none",borderRadius:"1.5rem", border: "0.25rem solid "}}/>
        </label>
        <div className="grid" style={{gridTemplateColumns: "auto auto", marginTop: "10%"}}>
        <button class=" search_button"style={{borderRadius: "1rem", placeSelf:"center", border: "none", color: "white", backgroundColor:"#ff642f"}}onClick={()=> {
            changeState(input.current.value);
        }}><a href={`/recipes/${search_input}`}>Search</a></button>
        <span ref={closer} style={{fontSize: "3rem", color: "white", fontWeight: "bold", borderRadius: "50%", backgroundColor:"red", height:"6rem", width: "6rem", display:"grid", textAlign:"center", placeContent:"center"}} onClick={()=> {
            let james = visible_div.current;
            james.style.display = "none";
        }}>X</span>
        {console.log(search_input)}
        </div>
    </div>
 </div>
    </>
    )
}
export default Header;