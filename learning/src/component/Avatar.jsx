import { getImageUrl } from "./utils";

function Avatar(person, size){

    return( 
    
        <img src= {getImageUrl} alt={person.name} 
        
        width={size} height={size}  
        />
    
    

    );
}

export default Avatar;