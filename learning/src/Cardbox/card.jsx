/* eslint-disable react/prop-types */
import Counter from '../component/counter';
import './card.css'

function Card(props) {
    return(
        <div className="content">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p>{props.description}</p>
                
                <Counter />
            </div>
        </div>
        </div>
        
    );
}

export default Card