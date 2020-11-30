import Uthapizza from '../assets/uthapizza.PNG';
import Zucchipakoda from '../assets/zuccipakkoda.PNG';
import Vadonut from '../assets/vadonut.PNG';
import ElaiCheeseCake from '../assets/elaicheesecake.PNG';

export const dishesReducer = () => {
    return [
        {title: 'Uthappizza', picture:<img src={Uthapizza} alt="Uthapizza" className="avatar"/>,description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.', price: '$3.99',},
        {title: 'Zucchipakoda',picture:<img src={Zucchipakoda} alt="Zucchipakoda" className="avatar"/>, description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce.', price: '$1.99',},
        {title: 'Vadonut', picture:<img src={Vadonut} alt="Vadonut" className="avatar"/>,description: 'A quintessential ConFusion experience, is it a vada or is it a donut?', price: '$4.99',},
        {title: 'ElaiCheese Cake', picture:<img src={ElaiCheeseCake} alt="ElaiCheeseCake" className="avatar"/>, description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms.', price: '$4.99',},
    ]
}

export const selectedDishReducer = (state = null, action) => {
    switch(action.type) {
        case 'SELECT_DISH':
            return action.payload
        default:
            return state;
    }
}