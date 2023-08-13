import { useRouteError } from "react-router-dom";
import joestar_gif from "/src/assets/screaming_joestar.gif"
export default function CompErr(){
    let error = useRouteError();
    console.error(error);
    
    return(
        <>
        <div style={{display: "grid"}}>
            <p style={{fontSize: "3.5rem", textAlign:"center"}}>Error 404: Not Found</p>
            <img src={joestar_gif} style={{width: "30%", placeSelf:"center", borderRadius:"2rem"}}/>
            <p style={{fontSize: "1.5rem", textIndent:"2.5rem"}}>Oops, it looks like you've taken a wrong turn somewhere. We apologize for the inconvenience you've encountered. But don't worry, we're here to help! Please check the URL or try using our site navigation to find what you're looking for. If you believe there's an issue with our website, we'd truly appreciate it if you could let us know, so we can fix it promptly.</p>
        </div>
        </>
    )
}