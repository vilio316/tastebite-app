import placehold from "/src/assets/search_results.png"
 export default function AboutUs(){
    return(
        <>
        <h1>About</h1>
        <hr/>
        <div>
            <p>We are a bunch of foodies who are in love with the internet.</p>
            <img src={placehold} width={"25%"}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore aliquam facere eos debitis! Odio iusto et natus dolore dolor vel reprehenderit! Numquam libero placeat a natus non, tempore enim.</p>
        </div>
        <div style={{display: "flex", placeItems: "center"}}>
        <div>
            <h2>Simple, Friendly and Easy Recipes for All</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, provident asperiores. Quo laboriosam eius ullam reiciendis optio iusto repudiandae asperiores nisi explicabo porro pariatur error, facere laudantium non provident recusandae?</p>
        </div>
        <div>
            <img src={placehold} alt="Placeholder Image Lol" width={"50%"}/>
        </div>
        </div>

        <div>
            <h2>Our Team of Talented Foodies, Bloggers and Devs</h2>
            <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto auto", gridTemplateRows: "auto auto"}}>
            <img src={placehold} alt="Placeholder Image Lol" width={"50%"}/>
            <img src={placehold} alt="Placeholder Image Lol" width={"50%"}/>
            <img src={placehold} alt="Placeholder Image Lol" width={"50%"}/>
            <img src={placehold} alt="Placeholder Image Lol" width={"50%"}/>
            <img src={placehold} alt="Placeholder Image Lol" width={"50%"}/>
            <img src={placehold} alt="Placeholder Image Lol" width={"50%"}/>
            <img src={placehold} alt="Placeholder Image Lol" width={"50%"}/>
            <img src={placehold} alt="Placeholder Image Lol" width={"50%"}/>
            <img src={placehold} alt="Placeholder Image Lol" width={"50%"}/>
            <img src={placehold} alt="Placeholder Image Lol" width={"50%"}/>
            </div>
        </div>

        <div>
            <h2>Operating from NYC, Dublin and London</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ex, placeat magnam suscipit sequi nemo libero rerum, beatae molestiae est quo ut cum doloribus, adipisci expedita doloremque! Suscipit, vitae maxime!</p>
        </div>
        </>
    )
}