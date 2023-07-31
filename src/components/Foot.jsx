import logo from "/src/assets/logo.svg"
function Footer() {
    return(
        <>
        <div className="grid grid-col">
        <div className="grid" style={{justifyContent: "center", placeItems:"center"}}>
            <div style={{width: "50%",}}><img src={logo} alt="TasteBite" className="logoimg"/></div>
            <p className="footp">"On the other hand, we denounce with righteous indignation the ways and pursuits of men who allow themselves to be ruled by the pursuits of the moment"</p>
        </div>
        <div style={{gridTemplateColumns: "auto auto auto", display: "grid"}}>
        <div className="grid-col">
         <h4>TasteBite</h4>
         <p>Recipes</p>
         <p>Shop</p>
         <p>Home</p>
         <p>Buy</p>
        </div>
        <div className="grid-col">
            <h4>Legal</h4>
            <p>Copyright</p>
            <p>Cookies</p>
            <p>Terms And Conditions</p>
            <p>Privacy Policy</p>
        </div>
        <div className="grid-col">
        <h4>Shop</h4>
            <p>Merchandise</p>
            <p>CookBooks</p>
            <p>Cooking Utensils</p>
            <p>Misc.</p>
        </div>
        </div>
        <div className="grid" style={{gridTemplateColumns: "auto auto"}}>
            <p>&copy; 2023 TasteBite Inc. All rights reserved</p>
            <div style={{justifySelf:"end"}}>
                <a>FB</a>
                <a>TW</a>
                <a>IG</a>
                <a>SC</a>
            </div>
        </div>
        </div>
        </>
    )
}

export default Footer;