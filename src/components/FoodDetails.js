import React from 'react';
import {useSelector } from 'react-redux';
import './Food.css';

const FoodDetails = () => {
    const selectedDish=useSelector(state => state.selectedDish )
    if(!selectedDish) {
        return null;      
    }
    else{
        return (
        
            <div className="details-container">
                <div className="items">
                    <div className="image">
                        {selectedDish.picture}  
                    </div>
                    <div className="properties">
                        <h2>{selectedDish.title}</h2>
                        <div><h4>Description:</h4><p>{selectedDish.description}</p></div>
                        <p><strong>Price: </strong>{selectedDish.price}</p>
                        <p>{selectedDish.add}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FoodDetails;