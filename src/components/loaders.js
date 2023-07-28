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
export async function fetchRecipe(id){
    let baseURL = `https://www.themealdb.com/api/json/v1/1/`
    let id_URL = `lookup.php?i=`
    const recipe_data = await fetch(`${baseURL}${id_URL}${id}`)
    const mealRes = await recipe_data.json();
    return mealRes
}
