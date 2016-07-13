import BaseComponent from './BaseComponent';

export default class TabViewTabs extends BaseComponent {
    constructor(destination, tabs) {
        super(destination);
        this.tabs = tabs;
    }

    get template() {
        let ret = '';
        for (let i=0; i < this.tabs.length; i++) {
            ret += `
            <section class="mdl-layout__tab-panel `+ (i === 0 ? 'is-active' : '') + `" id="` + this.tabs[i] + `-panel">
              <div class="page-content" id="` + this.tabs[i] + `-content"></div>
            </section>`;
        }
        return ret;
    }
}