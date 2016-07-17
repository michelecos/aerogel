import $ from '../../lib/jquery-2.2.3';
import Account from '../models/Account';
import BaseComponent from './BaseComponent';
import Campagne from '../models/Campagne';
import Util from '../util/Util';

export default class MainFrame extends BaseComponent {
    constructor(destination) {
        super(destination);
    }

    get template() {
    	return `
			<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
					<header class="mdl-layout__header">
						<div id="header-tab" class="mdl-layout__header-row">
							<!-- Title -->
							<span class="mdl-layout-title">{{campagne}}</span>
							<!-- Add spacer, to align navigation to the right -->
							<div class="mdl-layout-spacer"></div>
							<!-- Navigation. We hide it in small screens. -->
							
							<!-- Uncomment this for a search field
							<div class="mdl-textfield mdl-js-textfield mdl-textfield&#45;&#45;expandable
								mdl-textfield&#45;&#45;floating-label mdl-textfield&#45;&#45;align-right">
								<label class="mdl-button mdl-js-button mdl-button&#45;&#45;icon" for="fixed-header-drawer-exp">
									<i class="material-icons">search</i>
								</label>
								<div class="mdl-textfield__expandable-holder">
									<input class="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp">
								</div>
							</div>
							-->
							
							<!-- Uncomment this for a dot menu on the right of the banner
							<button id="menu-lower-right" class="mdl-button mdl-js-button mdl-button&#45;&#45;icon">
							    <i class="material-icons">more_vert</i>
							</button>			
							
							<ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="menu-lower-right">
								<li id="action1" class="mdl-menu__item">Some Action</li>
								<li id="action2" class="mdl-menu__item">Another Action</li>
								<li disabled class="mdl-menu__item">Disabled Action</li>
							</ul>
							-->
						</div>
					</header>
				<div class="mdl-layout__drawer">
					<nav class="mdl-navigation">
					    <a class="mdl-navigation__link" href="/area1">link1</a>
						<a class="mdl-navigation__link" href="/area2">link2</a>
						<a class="mdl-navigation__link" href="/area3">link3</a>						
					</nav>
				</div>
				<main id="page-content" class="mdl-layout__content">
					<!-- Your content goes here -->
				</main>
			</div>`;
    }

    setListeners() {
		let util = new Util();

		document.getElementById("action1").addEventListener("click", function(event) {
            event.preventDefault();
            page('/action1');
    	});

        document.getElementById("action2").addEventListener("click", function(event) {
            event.preventDefault();
            page('/action2');
        });
    }
}
