import BaseComponent from './BaseComponent';
import $ from '../../lib/jquery-2.2.3';

export default class LightFrame extends BaseComponent {
    constructor(destination, flags) {
        super(destination);
        this.flags = flags || {};
    }

    get template() {
    	var ret = `
			<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
				<header class="mdl-layout__header">
					<div class="mdl-layout-icon">
						<button id='backButton' class="mdl-button mdl-js-button mdl-button--icon">
							<i class="material-icons">navigate_before</i>
						</button>
					</div>
					<div id="header-tab" class="mdl-layout__header-row">
						<!-- Title -->
						<span class="mdl-layout-title">{{titolo}}</span>
						<!-- Add spacer, to align navigation to the right -->
						<div class="mdl-layout-spacer"></div>
			`;
		if (this.flags.share) {
			ret += `
						<button class="mdl-button mdl-js-button mdl-button--icon">
							<i class="material-icons">share</i>
						</button>
			`;
		}
		if (this.flags.notifications) {
			ret += `
						<button class="mdl-button mdl-js-button mdl-button--icon mdl-badge mdl-badge--overlap">
							<i class="material-icons">notifications_none</i>
						</button>
			`;
		}
		if (this.flags.menu) {
			ret += `
						<!-- Right aligned menu below button -->
						<button id="dot-menu-lower-right" class="mdl-button mdl-js-button mdl-button--icon">
							<i class="material-icons">more_vert</i>
						</button>
						<ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="dot-menu-lower-right">
							<li class="mdl-menu__item">Some Action</li>
							<li class="mdl-menu__item">Another Action</li>
							<li disabled class="mdl-menu__item">Disabled Action</li>
							<li class="mdl-menu__item">Yet Another Action</li>
						</ul>
			`;			
		}
		ret += `
					</div>
				</header>
				<main id="page-content" class="mdl-layout__content">
				</main>
			</div>
		`;
		return ret;
    }

    setListeners(ctx, next) {
        document.getElementById("backButton").addEventListener("click", function(event) {
            event.preventDefault();
            history.go(-1);
        });
	}
}

