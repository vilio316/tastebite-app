import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

    export async function imageHunter(params){   
    let baseURL = `https://www.themealdb.com/api/json/v1/1/`;
    let searchURL = `${baseURL}search.php?s=`
    let res = await fetch(`${searchURL}${params}`)
    const data = await res.json();
    return data.meals
}
export async function categoryHunt(params){   
    let baseURL = `https://www.themealdb.com/api/json/v1/1/`;
    let searchURL = `${baseURL}filter.php?c=`
    let res = await fetch(`${searchURL}${params}`)
    const data = await res.json();
    return data.meals
}
function RecipeSearch(){
    let leet = useParams();
    console.table(leet);
    const flight = useLoaderData();
    console.log(flight);
    const jaxyy= flight.length;

    function SearchResults(props){
        let array = props.input;
        return(
            <div className="grid" style={{gridTemplateColumns: "auto auto auto auto auto"}}>
            {array.map((photo) => <div key={photo.idMeal} className="meal_card">
                <img src={photo.strMealThumb} alt={`${photo.strMeal}`}  width={"80%"}/>
                <p><a href={`./${leet.search}/${photo.idMeal}`}>{photo.strMeal}</a></p>
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
            <div className="grid" style={{gridTemplateColumns: "auto auto auto auto auto"}}>
            {array.map((photo) => <div key={photo.idMeal} className="meal_card">
                <img src={photo.strMealThumb} alt={`${photo.strMeal}`}  width={"80%"}/>
                <p className={`indented`}><a href={`/recipes/${leet.categ}/${photo.idMeal}`}>{photo.strMeal}</a></p>
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
export async function fetchRecipe(id){
        let baseURL = `https://www.themealdb.com/api/json/v1/1/`
        let id_URL = `lookup.php?i=`
        const recipe_data = await fetch(`${baseURL}${id_URL}${id}`)
        const mealRes = await recipe_data.json();
        return mealRes
    }

    export function Recipe(){
        let recipe_inf = useLoaderData();
        let recipe_info = recipe_inf.meals[0]
        console.log(recipe_info)
        let ingredients = []; 
        for(let ing_max = 1; ing_max < 20; ing_max++){
            if(recipe_info[`strIngredient${ing_max}`].length > 0  && 
            recipe_info[`strMeasure${ing_max}`].length > 0){
            ingredients.push(`${recipe_info[`strIngredient${ing_max}`]} , 
            (${recipe_info[`strMeasure${ing_max}`]})`)
            }
        }
        return(
            <>
            <div style={{display: "grid", gridTemplateColumns: "50% auto"}}>
                <div>
                    <img src={recipe_info.strMealThumb} width={"90%"}/>
                </div>
                <div>
                    <p className="mealname_bold">{`${recipe_info.strMeal}`}</p>
                    <p><u>Ingredients</u></p>
                    <ul>
                    {ingredients.map((ingredient)=> 
                    <li key={ingredient.toLowerCase()}>{ingredient}</li>
                    )}
                    </ul>
                </div>
            </div>
                <div>
                    <p><u>Instructions</u></p>
                    <p>{recipe_info.strInstructions}</p>
                </div>
            </>
        )
    }
export function RecipesHome(){
    return(
        <>
        <div>
        <h1>All Recipes</h1>
        <hr/>
        </div>
        <div>
            <h2>Search by Ingredient</h2>
        </div>
        <div>
            <h2>Search by Category</h2>
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