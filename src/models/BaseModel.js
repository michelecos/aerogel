export default class BaseModel {
    constructor() {
    	this.nome = this.constructor.name.toLowerCase();
    }

    // Salva nel localStorage la variabile privata con lo stesso nome dell'oggetto
    // Ad esempio, nel caso di account, salva this.account
    save(data) {
        // this[this.nome] è uguale a this.Account, se la classe si chiama Account
        if (typeof(data) !== 'undefined') {
            this[this.nome] = data;
        }
        localStorage.setItem(this.nome, JSON.stringify(this[this.nome]));
    }

    // Restituisce lo stato dell'oggetto prelevato dal localStorage.
    load() {
    	return(JSON.parse(localStorage.getItem(this.nome)));
    }
}