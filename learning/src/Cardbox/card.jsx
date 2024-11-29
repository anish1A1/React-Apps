/* eslint-disable react/prop-types */
import Counter from '../component/counter';
import './card.css'

function Card(props) {
    return(
        <div classNameName="content">
            <div classNameName="card">
            <div classNameName="card-body">
                <h5 classNameName="card-title">{props.title}</h5>
                <p>{props.description}</p>
                
                <Counter />
            </div>
        </div>
        </div>
        
    );
}

export default Card