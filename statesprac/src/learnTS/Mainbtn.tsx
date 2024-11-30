import React from "react";
import Button from "./button";


export default function Mainbtn() {
    
    return(
        <div className="mainbtn">
            <Button  backgroundColor="yellow" fontSize={20} textColor="blue" padding={[10,20,30,40]}/>
            {/* If we dont add pillShape that is okay since it was an optional property */}
        </div>
    );
}