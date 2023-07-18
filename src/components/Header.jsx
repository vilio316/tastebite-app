import logo from "/src/assets/logo.svg"
import "/src/assets/default_styles.css"
function Header(){
    return (
        <>
    <div className="grid nav">
      <img src={logo} alt="Logo" className="logoimg"/>
<a href="index.html" target="_blank" className="center">Home</a>
<a href="recipes.html" className="center">Recipes</a>
<a href="index.html" className="center">Blogs</a>
<a href="index.html" className="center">Shop</a>
<span className="material-icons center">
            search
            </span>
    </div>
    </>
    )
}
export default Header;