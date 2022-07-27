import FruitSalad from "../assets/images/fruit_salad.jpg";
import Latte from "../assets/images/latte.jpg";
import OrangeSmoothie from "../assets/images/orange_smoothie.jpg";
import Ramen from "../assets/images/ramen.jpg";
import Spaghetti from "../assets/images/spaghetti.jpg";

// Seperate arrays for food and drink items
let foodItemarr = [];
let drinkItemArr = [];
class MenuItem {
    constructor(name, description, price, img, isFood) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.img = img;
        this.isFood = isFood;
    }
    addToArr() {
        this.isFood ? foodItemarr.push(this) : drinkItemArr.push(this);
    }
}

const createMenuItems = () => {

    // Clear arrays on function init
    foodItemarr = [];
    drinkItemArr = [];

    // Create menu item objects and add them to an array
    new MenuItem("Spaghetti And MeatBalls", 
                "Meatballs with homemade spaghetti topped with a bolognese sauce and basil",
                "$5.98",
                Spaghetti,
                true)
                .addToArr();
    new MenuItem("Ramen", 
                "Japanese noodle dish served with boiled eggs and shrimp",
                "$3.78",
                Ramen,
                true)
                .addToArr();
    new MenuItem("Fruit salad", 
                "Peach and fig salad with a slight drizzle of vinegar, topped with cherry tomatoes",
                "$4.56",
                FruitSalad,
                true)
                .addToArr();
    new MenuItem("Caffè latte", 
                "Milk coffee made from shots of espresso and steamed milk",
                "$1.29",
                Latte,
                false)
                .addToArr();
    new MenuItem("Orange smoothie", 
                "Orange smoothie with carrot, lemon and pineapple juice",
                "$1.78",
                OrangeSmoothie,
                false)
                .addToArr();
    
}

const displayMenu = (content) => {

    // Clear class name
    content.className = "";

    createMenuItems();

    const foodTitle = document.createElement("h1");
    foodTitle.innerText = "Main Courses";

    const foodItemContainer = document.createElement("div");
    foodItemContainer.className = "food-item-container";

    foodItemContainer.append(foodTitle);


    content.append(foodItemContainer);

    // Display food items
    displayItems(foodItemContainer, foodItemarr);
    // Display drinks
    const drinkTitle = document.createElement("h1");
    drinkTitle.innerText = "Drinks";
    foodItemContainer.appendChild(drinkTitle);
    displayItems(foodItemContainer, drinkItemArr);
}

const displayItems = (foodItemContainer, arr) => {
        // Display all elements in food array
        arr.forEach(element => {
            const item = document.createElement("div");
            item.className = "food-item";
    
            // Name and description
            const nameDescWrapper = document.createElement("div");
    
            const itemName = document.createElement("p");
            itemName.innerText = element.name;
    
            const itemDesc = document.createElement("p");
            itemDesc.innerText = element.description;
    
            nameDescWrapper.append(itemName, itemDesc);
    
            // Price
            const price = document.createElement("div");
            price.className = "item-price";
            const priceVal = document.createTextNode(element.price);
            price.appendChild(priceVal);
    
            // Image
            const foodIcon = new Image();
            foodIcon.src = element.img;
            foodIcon.classList.add("food-icon");
    
            // Append all
            item.append(nameDescWrapper, price, foodIcon);
            foodItemContainer.appendChild(item);
    
        })
}

export default displayMenu;