import Hogan from '../../lib/hogan-3.0.2';
import $ from '../../lib/jquery-2.2.3';
import Params from '../util/Params';

export default class BaseComponent {
	constructor(destination, insertion) {
		this.templateName = this.constructor.name;
		this.destination = destination;
		this.insertion = insertion || 'inside';
	}

	render(ctx, data) {
		this.data = data;
		this.data.templateName = this.templateName;
		const that = this;
		if (this.data !== null) {
			this.data.inspect = function() {
				return function() {
					console.log('ctx ' + JSON.stringify(ctx));
					console.log('destination: ' + that.destination);
					console.log('template ' + that.template);
					console.log('data: ' + JSON.stringify(that.data));
				};
			};
		}
		var tmpl = '<!-- ' + this.templateName + ' -->' + 
			this.template + 
			'<!-- ' + this.templateName + ' -->';
		var rendered = Hogan.compile(tmpl).render($.extend({}, this.data));
		let node = document.getElementById(this.destination);
		if (this.insertion === 'inside') {
			node.innerHtml = rendered;
		} else {
			let div = document.createElement('div');
    		div.innerHTML = rendered;

			if (this.insertion === 'before') {
    			node.parent.insertBefore(div, node);
			} else if(this.insertion === 'after') {
    			node.parent.insertBefore(div, node.nextSibling);
    		}
		}
	}

	setListeners() {}
} 