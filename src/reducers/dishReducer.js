export const dishesReducer = () => {
    return [
        {title: 'Uthappizza', description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.', price: '$3.99',},
        {title: 'Zucchipakoda', description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce.', price: '$1.99',},
        {title: 'Vadonut', description: 'A quintessential ConFusion experience, is it a vada or is it a donut?', price: '$4.99',},
        {title: 'ElaiCheese Cake', description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms.', price: '$4.99',},
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