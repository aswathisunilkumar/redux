import React ,{ useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { selectDish } from '../actions/actionCreators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Food.css';

const Menu = () => {
    const[search,setSearch]=useState("");
    const handleChange =event => setSearch(event.target.value); 
 
    const dishes=useSelector(state=>state.dishes);
    const dispatch=useDispatch();

    const filteredDish = dishes.filter((dish) => {
        return dish.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });

    const listItems= filteredDish.map((dish) => {
        return (
            <div key={dish.title} className="item-card">
                 <span>{dish.picture}</span>
                <span className="content-title">{dish.title}</span>
                <Link to={`/dish/${dish.id}`}>
                    <button className="button" 
                    onClick={() => dispatch(selectDish(dish))}
                    >More!</button>
                </Link>
             </div>
            )
        })
    return (
        <div className="container">
            <h2>Menu List</h2>
            <div className="col">
                <FontAwesomeIcon icon="search"/>
                <input className="input-container" placeholder="Search your favorite dish here.." value={search} onChange={handleChange}/>
            </div>
            <div className="item">
                {listItems}
            </div>
        </div>
    )
}

export default Menu;