import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { selectDish } from '../actions/actionCreators'
import './Food.css';

const Menu = () => {
    const dishes=useSelector(state=>state.dishes);
    const dispatch=useDispatch();
        const listItems = dishes.map((dish) => {
            return (
                <div key={dish.title}>
                    <span>{dish.title}</span>
                    <button className="button" 
                    onClick={() => dispatch(selectDish(dish))}
                    >More!</button>
                </div>
            )            
        }) 
        return (
            <div className="container">
                <h2>Menu List</h2>
                <ul>
                { listItems } 
                </ul>
            </div>
        )
}

export default Menu;