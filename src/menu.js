import Original from "./Original.jpg";
import DoubleTrouble from "./DoubleTrouble.jpg"
import BlackBurger from "./BlackBurger.jpg";
import ChickenBurger from "./ChickenBurger.jpg";

const menu = [];

class MenuItem {
    constructor(title, description, img) {
        this.title = title;
        this.description = description;
        this.img = new Image();
        this.img.src = img;
    }
}

menu[0] = new MenuItem('The Original', 
    "Our world-famous 100% clown meat burger.", Original);
menu[1] = new MenuItem('Double Trouble',
     "Two TIMES the calories of clown goodness. Be sure to check with your doctor before consuming.", DoubleTrouble);
menu[2] = new MenuItem('Coal Burger', "This one is just made of coal. Not great to be honest.", BlackBurger);
menu[3] = new MenuItem('Chicken Clownburger', "100% pure crispy chicken clowns. Farm-raised for your enjoyment.", ChickenBurger);

export { menu };
