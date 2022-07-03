function items(eggs, sugar, milk, chocolate){
    this.eggs = eggs;
    this.sugar = sugar;
    this.milk = milk;
    this.chocolate = chocolate;
}

// Slogan
items.prototype.slogan = function (){
        return "This item is made by Gaurav";
}

let quantity = new items(2, "1 cup", "1 cup", "1 dark choclate");
console.log(quantity);

// Cake inherit with items
function CakeItems(eggs, sugar, milk, chocolate, water, flour){
    items.call(this, sugar, milk, chocolate);
    this.water = water;
    this.flour = flour;
};

CakeItems.prototype = Object(items.prototype);

// Inherit the prototype
CakeItems.prototype.constructor = CakeItems;

// Manually set the contructor
let CakeReady = new CakeItems(2, "1 Cup", "1 Cup", "1 dark chocolate", "2 cups","300g");
console.log(CakeReady);
// console.log(CakeReady.slogan());
