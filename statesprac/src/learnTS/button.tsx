import React from "react";

type ButtonProps = {
    backgroundColor : string;
    fontSize : number;
    pillShape ?: boolean;  // making this parameter an optional parameter
    textColor : Colors;  
    padding : number [];   //or we can also use tupple as 
    //padding : [number, number, number, number]; //for non changeable arrays properties
}

type Colors = "red" | "green" | "blue" | "yellow"      //making a default color type
export default function Button({  //props is an object
    backgroundColor,
    fontSize,
    pillShape,
    textColor,
    padding,

} :  ButtonProps // destructuring the properties
    
) {

    return(
        <div className="button">
            <button style={{
                backgroundColor : backgroundColor,
                fontSize : fontSize,
                color : textColor,
                //padding : padding
            
            }}>Click Me</button>
        </div>
    );
}