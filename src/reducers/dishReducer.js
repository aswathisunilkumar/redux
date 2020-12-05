import Uthapizza from '../assets/uthapizza.PNG';
import Zucchipakoda from '../assets/zuccipakkoda.PNG';
import Vadonut from '../assets/vadonut.PNG';
import ElaiCheeseCake from '../assets/elaicheesecake.PNG';
import ChholeBhature from '../assets/ChholeBhature.PNG';
import MasalaChai from '../assets/MasalaChai.PNG';
import Dhokla from '../assets/Dhokla.PNG';
import AlooParatha from '../assets/AlooParatha.PNG';
import HyderabadiBiryani from '../assets/HyderabadiBiryani.PNG';
import Gajarkahalwa from '../assets/Gajarkahalwa.PNG';
import KajuKatli from '../assets/KajuKatli.PNG';
import MasalaDosa from '../assets/MasalaDosa.PNG';
import ChocolateMousse from '../assets/ChocolateMousse.PNG';
import Macaroon from '../assets/Macaroon.PNG';
import RedVelvetCake from '../assets/RedVelvetCake.PNG';
import Waffles from '../assets/Waffles.PNG';
import DeathByChocolate from '../assets/DeathByChocolate.PNG';
import Pasta from '../assets/Pasta.PNG';

import PostComment from '../components/PostComment';

export const dishesReducer = () => {
    return [
    {
        title: 'Uthappizza',
        picture:<img src={Uthapizza} alt="Uthapizza" className="avatar"/>,
        description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.', 
        price: '$3.99',
        comment:<PostComment/>
    },
    {
        title: 'Chhole Bhature',
        picture:<img src={ChholeBhature} alt="Chhole Bhature" className="avatar"/>,
        description: 'Chhole Bhature is one of the most popular Punjabi dish liked almost all over India. Chole stands for a spiced tangy chickpea curry and Bhatura is a soft and fluffy fried leavened bread.', 
        price: '$6.99',
        comment:<PostComment/>
    },
    {
        title: 'Masala Chai',
        picture:<img src={MasalaChai} alt=" Masala Chai" className="avatar"/>,
        description: 'Beverage made by simmering spices with milk and tea.', 
        price: '$1.99',
        comment:<PostComment/>
    },
    {
        title: 'Dhokla',
        picture:<img src={Dhokla} alt="Dhokla" className="avatar"/>,
        description: 'Made with a fermented batter derived from rice, split chickpeas and love!', 
        price: '$3.99',
        comment:<PostComment/>
    },
    {
        title: 'Aloo Paratha',
        picture:<img src={AlooParatha} alt="Aloo Paratha" className="avatar"/>,
        description: 'Aloo parathas consist of unleavened dough rolled with a mixture of mashed potato and spices, which is cooked on a hot tawa with butter or ghee. Aloo paratha is usually served with butter, chutney, or Indian pickles.', 
        price: '$4.99',
        comment:<PostComment/>
    },
    {
        title: 'Hyderabadi Biryani',
        picture:<img src={HyderabadiBiryani} alt="Hyderabadi Biryani" className="avatar"/>,
        description: 'made with Indian spices, rice, and meat (chicken, goat, lamb, prawn, or fish), and sometimes, in addition, eggs and/or potatoes.', 
        price: '$7.99',
        comment:<PostComment/>
    },
    {
        title: 'Gajar ka Halwa',
        picture:<img src={Gajarkahalwa} alt="Gajar ka halwa" className="avatar"/>,
        description: 'Made by placing grated carrots in a pot containing a specific amount of water, milk and sugar and then cooking while stirring regularly.', 
        price: '$7.99',
        comment:<PostComment/>
    },
    {
        title: 'Kaju Katli',
        picture:<img src={KajuKatli} alt="Kaju Katli" className="avatar"/>,
        description: 'Made by thickening milk with sugar and other ingredients. Kesar kaju katli is a kaju katli recipe that includes saffron.', 
        price: '$9.99',
        comment:<PostComment/>
    },
    {
        title: 'Masala Dosa',
        picture:<img src={MasalaDosa} alt="Masala Dosa" className="avatar"/>,
        description: 'Made from rice, lentils, potato, fenugreek, and curry leaves, and served with chutneys and sambar.', 
        price: '$5.99',
        comment:<PostComment/>
    },
    {
        title: 'Chocolate Mousse',
        picture:<img src={ChocolateMousse} alt="Chocolate Mousse" className="avatar"/>,
        description: 'Made with whipped egg whites, whipped cream, or both, and flavored with one or more of chocolate, coffee, caramel, puréed fruits, or various herbs and spices, such as mint or vanilla.', 
        price: '$3.99',
        comment:<PostComment/>
    },
    {
        title: 'Macaroon',
        picture:<img src={Macaroon} alt="Macaroon" className="avatar"/>,
        description: 'A sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond meal, and food colouring.', 
        price: '$4.99',
        comment:<PostComment/>
    },
    {
        title: 'Red Velvet Cake',
        picture:<img src={RedVelvetCake} alt="Red Velvet Cake" className="avatar"/>,
        description: 'Red velvet cake is a traditionally crimson-colored chocolate layer cake with cream cheese icing. Usually made with a combination of buttermilk, butter, cocoa, vinegar, and flour.', 
        price: '$6.99',
        comment:<PostComment/>
    },
    {
        title: 'Waffles',
        picture:<img src={Waffles} alt="Waffles" className="avatar"/>,
        description: 'A waffle is a dish made from leavened batter or dough that is cooked between two plates that are patterned to give a characteristic size, shape, and surface impression.', 
        price: '$5.99',
        comment:<PostComment/>
    },
    {
        title: 'Death By Chocolate',
        picture:<img src={DeathByChocolate} alt="Death By Chocolate" className="avatar"/>,
        description: 'Milk, cream, sugar, chocolate variegate (high fructose corn syrup, corn syrup, water, cocoa processed with alkali, sugar, modified corn starch, salt, mono & diglycerides, natural & artificial flavor), fudge pieces (sugar, coconut oil, cocoa processed with alkali, refined peanut oil, cocoa, natural flavor, soy lecithin).', 
        price: '$5.99',
        comment:<PostComment/>
    },
    {
        title: 'Zucchipakoda',
        picture:<img src={Zucchipakoda} alt="Zucchipakoda"  className="avatar"/>, 
        description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce.', 
        price: '$1.99',
        comment:<PostComment/>
    },
    {
        title: 'Vadonut', 
        picture:<img src={Vadonut} alt="Vadonut" className="avatar"/>, 
        description: 'A quintessential ConFusion experience, is it a vada or is it a donut?', 
        price: '$4.99',
        comment:<PostComment/>
    },
    {
        title: 'Red Sauce Chicken Pasta', 
        picture:<img src={Pasta} alt="Red Sauce Chicken Pasta" className="avatar"/>,
        description: 'Pasta densely cooked using olive oil, tomatoes, garlic and red chilli peppers.', 
        price: '$4.99',
        comment:<PostComment/>
    },
    {
        title: 'ElaiCheese Cake', 
        picture:<img src={ElaiCheeseCake} alt="Elai Cheese Cake" className="avatar"/>,
        description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms.', 
        price: '$4.99',
        comment:<PostComment/>
    }
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