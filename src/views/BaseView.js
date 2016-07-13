import $ from '../../lib/jquery-2.2.3';

export default class BaseView {
	constructor() {
		this.componenti = [];
	}

	render(ctx, data) {
        this.componenti.forEach(function (c) {
            console.log('render ' + c.templateName + ' in ' + c.destination);
			c.render(ctx, data);
		});
        this.componenti.forEach(function (c) {
            console.log('setListeners ' + c.templateName);
			c.setListeners(ctx, data);
		});
	    componentHandler.upgradeAllRegistered();
	}
} 