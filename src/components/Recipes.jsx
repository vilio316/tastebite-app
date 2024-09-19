import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
let baseURL = `https://www.themealdb.com/api/json/v1/1/`;
let categoryURL = `${baseURL}filter.php?c=`
let searchURL = `${baseURL}search.php?s=`
function RecipeSearch(){
    let leet = useParams();
    const flight = useLoaderData();
    const jaxyy= flight.length;

    function SearchResults(props){
        let array = props.input;
        return(
            <div className="grid five_cols">
            {array.map((photo) => <div key={photo.idMeal} className="meal_card grid centered">
                <img src={photo.strMealThumb} alt={`${photo.strMeal}`} className="results"/>
                <p><a className="link" href={`./${leet.search}/${photo.idMeal}`}>{photo.strMeal}</a></p>
                </div>)}
            
            </div>
        )
        }
return(
        <>
        <div className="grid" style={{gridTemplateColumns: "70% auto", alignItems:"center"}}>
        <h1>Recipes: <span style={{textTransform : "capitalize"}}>{leet.search}</span> </h1>
        <p style={{justifySelf: "end"}}><span className="bold">{`${jaxyy}`}</span>Recipes</p>
        </div>
        <SearchResults input={flight}/>
        </>
    )
}
export default RecipeSearch;

export function CategorySearch(){
    let leet = useParams();
    const flight = useLoaderData();
    const useNav = useNavigate()
    const jaxyy= flight.length;

    function SearchResults(props){
        let array = props.input;
        return(
            <div className="grid five_cols">
            {array.map((photo) => 
            <div key={photo.idMeal} className="meal_card">
                <div className="image_holder" onClick={()=> useNav(`/recipes/${leet.categ}/${photo.idMeal}`)}>
                <img src={photo.strMealThumb} alt={`${photo.strMeal}`} loading="lazy" className={`foodshot`} />
                </div>
                <a className={`link`} href={`/recipes/${leet.categ}/${photo.idMeal}`}>{photo.strMeal}</a>
                </div>)}
            
            </div>
        )
        }
return(
        <>
        <div className="grid" style={{gridTemplateColumns: "70% auto", alignItems:"center"}}>
        <h1>Recipes: <span style={{textTransform : "capitalize"}}>{leet.categ}</span> </h1>
        <p style={{justifySelf: "end"}}><span className="bold">{`${jaxyy}`}</span>Recipes</p>
        </div>
        <SearchResults input={flight}/>
        </>
    )
}

    export function Recipe(){
        let recipe_inf = useLoaderData();
        let recipe_info = recipe_inf.meals[0]
        console.log(recipe_info)
        let ingredients = []; 
        let ing_measure = [];
        for(let ing_max = 1; ing_max < 20; ing_max++){
            if(recipe_info[`strIngredient${ing_max}`] !== null){
            if(recipe_info[`strIngredient${ing_max}`].length > 0){
            ingredients.push(`${recipe_info[`strIngredient${ing_max}`]}`)
            }
        }
        }
        for(let i = 1; i < 20; i++){
            if(recipe_info[`strMeasure${i}`] && parseInt(recipe_info[`strMeasure${i}`])){
                ing_measure.push(recipe_info[`strMeasure${i}`])
            }
        }
        console.log(ing_measure)
        return(
            <>
            <div className="grid two_cols" style={{boxShadow: "0.5rem 0.5rem #e3f1ff", borderRadius: "1rem", backgroundColor: "#ffd7C9"}}>
                <div className="grid centered">
                    <img src={recipe_info.strMealThumb} width={"80%"} className="foodshot_results"/>
                </div>
                <div className="food-text">
                    <p className="mealname_bold">{`${recipe_info.strMeal}`}</p>
                    <p style={{fontSize : "1.75rem", fontWeight: "bold", margin: "0.75rem 0", textDecoration:"underline"}}>Ingredients</p>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns:"auto auto",
                        gap: "0.5rem"
                    }}>
                        
                        <div style={{
                            borderRight:"2px solid black"
                        }}>
                    <span className="table_head">Ingredients</span>
                    {ingredients.map((ingredient)=>( 
                    <li key={ingredient.toLowerCase()} style={{fontSize : "1.5rem"}}>{ingredient}
                    </li>
                    )
                    )}
                    </div>

                    <div>
                    <span className="table_head">Quantity</span>
                    {ing_measure.map((ing) => (
                        <span style={{
                            display: "block",
                            fontSize: '0.75rem',
                        }}>{ing}</span>
                    ))}
                    </div>
                    </div>
                </div>
            </div>
                <div>
                    <p style={{fontSize:"1.5rem"}}><u>Instructions</u></p>
                    <p className="instructions">{recipe_info.strInstructions}</p>
                </div>
            </>
        )
    }
export function RecipesHome(){
    function ByIngredient(props){

        const [recState, setRecState] = useState([])
        let ingr = props.ingie;
        function fetchbyIngr(para){
        fetch(`https://themealdb.com/images/ingredients/${para}.png`).then((res)=> res.blob()).then((data)=>
        {
            let img = URL.createObjectURL(data)
            setRecState([...recState, img])
        }
        )
    }
        useEffect(()=> fetchbyIngr(ingr), [])
    return(
        <>
        <div>
            <div className="grid centered">
        <img src={recState[0]} alt={ingr} className="foodshot" loading="lazy"/>
            </div>
        <a className="link" href={`/recipes/${ingr}`}>{ingr}</a>
        </div>
        </>
    )

}
    function ByCategory(props){
        const [recState, setRecState] = useState([])
        let ingr = props.ingie;
        function fetchbyIngr(para){
        fetch(`${categoryURL}${para}`).then((res)=> res.json()).then((data)=>
        {
            let img = data.meals[1].strMealThumb
            setRecState([...recState, img])
        }
        )
    }
        useEffect(()=> fetchbyIngr(ingr), [])
    return(
        <>
        <div style={{height:"100%"}}>
        <div className="grid image_holder">
        <img src={recState[0]} alt={ingr} className="foodshot" loading="lazy"/>
        </div>
        <p>
        <a className="link" href={`/recipes/categories/${ingr}`}>{ingr}</a>
        </p>
        </div>
        </>
    )

}
    return(
        <>
        
        <div>
        <h1>All Recipes</h1>
        <hr/>
        </div>
        <div>
            <h2>Search by Ingredient</h2>
            <div className="grid six_cols centered">
            <ByIngredient ingie="Beef"/>
            <ByIngredient ingie="Chicken"/>
            <ByIngredient ingie="Rice"/>
            <ByIngredient ingie="Lime"/>
            <ByIngredient ingie="Potatoes"/>
            <ByIngredient ingie="Sugar"/>
        </div>
        </div>
        <div>
            <h2>Search by Category</h2>
            <div className="grid six_cols centered">
            <ByCategory ingie="Breakfast"/>
            <ByCategory ingie="Vegan"/>
            <ByCategory ingie="Dessert"/>
            <ByCategory ingie="Miscellaneous"/>
            <ByCategory ingie="Pork"/>
            <ByCategory ingie="Starter"/>
        </div>
        </div>
        <div>
            <h2>Top Recipes for You</h2>
        </div>
        <div>
            <h2>Desserts</h2>
        </div>
        </>
    )
}