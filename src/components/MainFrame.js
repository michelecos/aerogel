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
							
							<!--
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
							
							<!-- Right aligned menu below button -->
							<!--
							<button id="menu-lower-right" class="mdl-button mdl-js-button mdl-button&#45;&#45;icon">
							    <i class="material-icons">more_vert</i>
							</button>			
							
							<ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="menu-lower-right">
								<li class="mdl-menu__item">Some Action</li>
								<li class="mdl-menu__item">Another Action</li>
								<li disabled class="mdl-menu__item">Disabled Action</li>
							</ul>
							-->
							
							
						</div>
					</header>
				<div class="mdl-layout__drawer">
					<div class="profilo-panino">
					    <div class="barra-scura-menu-panino"></div>
						<a href="/profilo">
	                        <img class="immagine-profilo" src="{{user.foto}}" />
	                        <div class="user-info">
	                            {{user.nome}} {{user.cognome}}
	                            <br/>
	                            {{user.email}}
	                        </div>
						</a>
                    </div>   
					<nav class="mdl-navigation">
					    <a class="mdl-navigation__link" href="/campagne">{{stringhe.campagne}}</a>
						<a class="mdl-navigation__link" href="/le_mie_campagne">{{stringhe.le_mie_campagne}}</a>
						<!-- XXX commentato temporaneamente
							<a class="mdl-navigation__link" href="/le_mie_campagne">{{stringhe.notifiche_push}}</a>
						 -->
						<a class="mdl-navigation__link" href="/profilo/update">{{stringhe.impostazioni}}</a>						
						<hr/>
						<a id='help' class="mdl-navigation__link">{{stringhe.help}}</a>
						<a id='menu-esci' class="mdl-navigation__link">{{stringhe.esci}}</a>
					</nav>
				</div>
				<main id="page-content" class="mdl-layout__content">
					<!-- Your content goes here -->
				</main>
			</div>`;
    }

    setListeners() {
		let util = new Util();
		
    	$('#menu-esci').click(function(event) {
            event.preventDefault();
            const account = new Account();
            account.logout();
            page('/login');
    	});

        $('#help').click(function(event) {
            event.preventDefault();
            page('/walkthrough/1');
        });
    }
}
