import React  from "react";
import { TrackingHeadScript } from "@phntms/next-gtm";


export  const GoogleAnalytics =() =>{

    const setGoogleTagManager = (id:string) =>{
            if (!id){
                console.log("inside the if...");
                 return false; 
                }else{
                    console.log("inside the else ...121212");
                    <TrackingHeadScript id={id}/>
                }

            
    }

    return (
        <>
        {setGoogleTagManager('GTM-P3FNWFG')}
            <button></button>
        </>
        
    )
}
