import BaseComponent from './BaseComponent';

export default class TabViewHeader extends BaseComponent {
    constructor(destination, tabs) {
        super(destination, 'after');
        this.tabs = tabs;
    }

    get template() {
        let ret = `<div class="mdl-layout__tab-bar mdl-js-ripple-effect">`;
        for (let i=0; i < this.tabs.length; i++) {
            ret += '<a href="#' + this.tabs[i] + 
                '-panel" class="mdl-layout__tab '+ (i === 0 ? 'is-active' : '') + '">{{stringhe.' + this.tabs[i] + '}}</a>';
        }
        ret += '</div>';
        return ret;
    }
}