import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../icon-toggle.js';

class DemoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          font-family: sans-serif;
        }
      </style>
      
      <h3>Statically-configured icon-toggles</h3>
      <icon-toggle toggle-icon="star"></icon-toggle>
      <icon-toggle toggle-icon="star" pressed></icon-toggle>
        
      <h3>Data-bound icon-toggle</h3>
      <!-- use a computed binding to generate the message -->
      <div><span>[[jo.bite]]</span></div>
      <!-- curly brackets ({{}}} allow two-way binding --> 
      <icon-toggle toggle-icon="favorite" pressed="{{isFav}}"></icon-toggle>


      <dom-repeat items="{{animaux}}" as="animal">
        <template>
          <p on-click="yo">{{animal}}</p>

        </template>
      </dom-repeat>

      <element-prout hidden></element-prout>
    `;
  }

  static get properties() {
    return {
      active: {
        type: Boolean,
        value: true
      },
      jo : {
        type : Object,
        value: function() {
          return {
            name:"aaaaaa",
            bite:"cul"
          };
        }
      },
      animaux : {
        type: Array,
        value() {
          return [
            "poule", "chien", "pamplemousse"
          ]
        }
      }
    }
  }

  constructor() {
    super();
    console.log("go");
  }

  yo(){
    console.log('yo');
  }
}
customElements.define('demo-element', DemoElement);
