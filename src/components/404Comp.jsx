import { useRouteError } from "react-router-dom";
export default function CompErr(){
    let error = useRouteError();
    console.error(error);
    
    return(
        <>
        <div style={{display: "grid"}}>
            <div style={{placeSelf: "center", margin: "2rem 0"}}>
            <p style={{fontSize: "5rem", textAlign: "center"}}>Oh Shoot!</p>
            <p style={{fontSize: "1.5rem"}}>There's been an error on our end and we can't seem to get that page. Wanna refresh?</p>
        </div>
        </div>
        </>
    )
}