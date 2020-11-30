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
                <h2>Item Details</h2>
                <div className="properties">
                    <p><strong>Name: </strong>{selectedDish.title}</p>
                    <p><strong>Description: </strong>{selectedDish.description}</p>
                    <p><strong>Price: </strong>{selectedDish.price}</p>
                </div>
            </div>
        )
    }
}

export default FoodDetails;