import React from "react";
const App = () => {
    return(
        <div style={{display:"flex"}}>
            <card>
                <div>hii there</div>
            </card> 
            <card>
                <div style={{color : "green"}}>
                    what do you want to post
                    <input type={"text"}/>
                </div>
            </card>
        </div>
    )
}

function card({children}){
    return(
        <div style={{background:"black" , borderRadius : 10 , color : "white"}}>
            {children}
        </div>
    )
}