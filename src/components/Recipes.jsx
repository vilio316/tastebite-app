import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
let baseURL = `https://www.themealdb.com/api/json/v1/1/`;
let categoryURL = `${baseURL}filter.php?c=`
let searchURL = `${baseURL}search.php?s=`
function RecipeSearch(){
    let leet = useParams();
    console.table(leet);
    const flight = useLoaderData();
    console.log(flight);
    const jaxyy= flight.length;

    function SearchResults(props){
        let array = props.input;
        return(
            <div className="grid five_cols">
            {array.map((photo) => <div key={photo.idMeal} className="meal_card grid centered">
                <img src={photo.strMealThumb} alt={`${photo.strMeal}`} className="foodshot results"/>
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
    console.table(leet);
    const flight = useLoaderData();
    console.log(flight);
    const jaxyy= flight.length;

    function SearchResults(props){
        let array = props.input;
        return(
            <div className="grid five_cols">
            {array.map((photo) => <div key={photo.idMeal} className="meal_card">
                <div className="image_holder">
                <a href={`/recipes/${leet.categ}/${photo.idMeal}`} className="block"><img src={photo.strMealThumb} alt={`${photo.strMeal}`} loading="lazy" className={`foodshot`}   width={"80%"}/></a>
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
        for(let ing_max = 1; ing_max < 20; ing_max++){
            if(recipe_info[`strIngredient${ing_max}`] !== null){
            if(recipe_info[`strIngredient${ing_max}`].length > 0   && recipe_info[`strMeasure${ing_max}`].length > 0 ){
            ingredients.push(`${recipe_info[`strIngredient${ing_max}`]} , 
            (${recipe_info[`strMeasure${ing_max}`]})`)
            }
        }
        }
        return(
            <>
            <div className="grid two_cols" style={{boxShadow: "0.5rem 0.5rem #e3f1ff", borderRadius: "1rem", backgroundColor: "#ffd7C9"}}>
                <div className="grid centered">
                    <img src={recipe_info.strMealThumb} width={"80%"} className="foodshot"/>
                </div>
                <div className="food-text">
                    <p className="mealname_bold">{`${recipe_info.strMeal}`}</p>
                    <p style={{fontSize : "1.75rem", fontWeight: "bold", margin: "0.75rem 0"}}>Ingredients</p>
                    <ul>
                    {ingredients.map((ingredient)=> 
                    <li key={ingredient.toLowerCase()} style={{fontSize : "1.5rem"}}>{ingredient}</li>
                    )}
                    </ul>
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
        <a className="link" href={`/recipes/categories/${ingr}`}>{ingr}</a>
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