export default class BaseModel {
    constructor() {
    	this.name = this.constructor.name.toLowerCase();
    }

    // Saves in localStorage a variable with the state of the object.
    // The variable name will be the same of the class name forced to lowercase.
    save(data) {
        // this[this.nome] is more convenient syntax for this.<class_name>
        if (typeof(data) !== 'undefined') {
            this[this.name] = data;
        }
        localStorage.setItem(this.nome, JSON.stringify(this[this.nome]));
    }

    // Recreate object state from localStorage.
    load() {
    	return(JSON.parse(localStorage.getItem(this.name)));
    }
}