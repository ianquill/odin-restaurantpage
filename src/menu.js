const menu = [];

class MenuItem {
    constructor(title, description, img) {
        this.title = title;
        this.description = description;
        this.img = img;
    }
}

menu[0] = new MenuItem('The Original', 
    "Our world-famous 100% clown meat burger.")
menu[1] = new MenuItem('Double Trouble',
     "Two TIMES the calories of clown goodness. Be sure to check with your doctor before consuming.");


export {menu};
