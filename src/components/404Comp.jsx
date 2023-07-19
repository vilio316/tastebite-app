import { useRouteError } from "react-router-dom";
export default function CompErr(){
    let error = useRouteError();
    console.error(error);
    
    return(
        <>
        <div>
            <p>Oh Shoot!</p>
            <p>There's been an error on our end and we can't seem to get that page. Wanna refresh?</p>
        </div>
        </>
    )
}