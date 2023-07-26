import logo from "/src/assets/logo.svg"
import "/src/assets/default_styles.css"
function Header(){
    return (
        <>
    <div className="grid nav">
      <img src={logo} alt="Logo" className="logoimg"/>
<a href={"/"} className="center">Home</a>
<a href={`recipes`} className="center">Recipes</a>
<a href={"/about-us"} className="center">About Us</a>
<a href={`/blogs`} className="center">Blogs</a>
<span className="material-icons center">
            search
            </span>
    </div>
    </>
    )
}
export default Header;