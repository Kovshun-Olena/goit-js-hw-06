class Storage {
    #item;
    constructor(item) {
        this.#item = item;
    }

    getItems() {
        return this.#item;
    }

    addItem(newItem) {
        this.#item.push(newItem);
    }
    
    removeItem(itemToRemove) {

        return this.#item.splice(indexOf(this.#item === itemToRemove) ? );
        // includes(itemToRemove);
        // this.#item.indexOf(itemToRemove);
        // console.log(removeItem());
        
    }
}



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());
// ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems());
// ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems());
// ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems());
// ["Nanitoids", "Antigravitator", "Droid"]
