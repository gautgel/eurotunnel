import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../../icon-toggle.js';
import '../shared-style/shared-style.js'
import '../form-element/form-element.js'
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/polymer/lib/elements/dom-if.js';




class HomeElement extends PolymerElement {
	static get template() {
		return html`
			<style include="shared-style">
				:host {
					width: 100%;
					height: 100%;
				}

				.top {
					width: 100%;
					height: 70%;
        }

        .bottom {
          width: 100%;
          height: 30%;
        }
        
        .divArrow {
          bottom: 15px;
          right: 25%;
        }

        .divArrowB {
          bottom: 15px;
          left: 25%;
        }

        .numberBottom{
          margin-bottom: 10px;
        }
        
        img {
          width: 50px;
          height: auto;
        }
			</style>

      <div class="relative top purple px95 white flexCenterCenter">

        <template is="dom-if" if="{{stepOne}}">
          <p class="textAlignCenter paddSide10 fontWeight">Bienvenue aux portes ouvertes d'Eurotunnel.</p>
        </template>

        <template is="dom-if" if="{{stepTwo}}">
          <p class="textAlignCenter paddSide10 fontWeight">Cette application vous accompagnera tout au long de votre visite.</p>
        </template> 

        <template is="dom-if" if="{{stepThree}}">
          <p class="textAlignCenter paddSide10 fontWeight"> Veuillez attendre le signal de votre guide avant de démarrer.</p>
        </template>

        <div class="absolute bottomLeft flexCenterCenter fullWidth">
          <p class="noMargin numberBottom">{{number}}/3</p>
        </div>

        <template is="dom-if" if="{{backArrow}}">
          <div class="iron30px absolute divArrowB pointer" on-click="prevStep">
            <iron-icon class="arrow" icon="arrow-back"></iron-icon>
          </div>
        </template>
        
        <template is="dom-if" if="{{forwArrow}}">
          <div class="iron30px absolute divArrow pointer" on-click="nextStep">
            <iron-icon class="arrow" icon="arrow-forward"></iron-icon>
          </div>
        </template>

      </div>

      <div class="relative bottom flexCenterCenter">
        <button disabled id="myButton" class="blueBtn" on-click="openForm">Démarrez la visite</button>
        <img class="absolute bottomLeft" src="../img/logo.png" alt="logo eurotunnel"></img>
      </div>

      <form-element hidden$="{{hidden}}"></form-element>
		`;
	}

	static get properties() {
		return {
			stepOne: {
				type: Boolean,
				value: true
      },
      stepTwo: {
        type: Boolean,
        value: false
      },
      stepThree: {
        type: Boolean,
        value: false
      },
      forwArrow: {
        type: Boolean,
        value: true
      },
      backArrow: {
        type: Boolean,
        value: false
      },
      number : {
        type : Number,
        value : 1
      },
      hidden : {
        type : Boolean,
        value : true
      }
		}
	}

	constructor() {
		super();
  }
  
  nextStep() {
    if(this.number<3)
    {
      this.number ++;
    }
    this.checkStep();
  }

  prevStep() {
    if(this.number>1)
    {
      this.number --;
    }
    this.checkStep();
  }

  checkStep() {
    switch(this.number)
    {
      case 1:
        this.stepOne = true;
        this.stepTwo = false;
        this.stepThree = false;
        break;

      case 2:
        this.stepOne = false;
        this.stepTwo = true;
        this.stepThree = false;
        break;
      
      case 3:
        this.stepOne = false;
        this.stepTwo = false;
        this.stepThree = true;
        break;
      default:
        this.stepOne = true;
        this.stepTwo = false;
        this.stepThree = false;
    }


    if(this.number>1)
    {
      this.backArrow = true;
      this.shadowRoot.querySelector("#myButton").disabled=true;

    }
    else
    {
      this.backArrow = false;
    }



    if(this.number==3)
    {
      this.forwArrow = false;
      this.shadowRoot.querySelector("#myButton").disabled=false;
    }
    else
    {
      this.forwArrow = true;
    }
  }

  openForm() {
    this.hidden = false;
  }

}
customElements.define('home-element', HomeElement);



	