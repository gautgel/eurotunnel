import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../../icon-toggle.js';
import '../home-element/home-element.js';
import '../quizz-element/quizz-element.js';

class AppElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {      
          font-family: 'Varela Round', sans-serif;
          position : relative;
          margin : 0;
          height : 100%;
          width : 100%;
        }
      </style>
      <home-element></home-element>
    `;
  }

  static get properties() {
    return {
      active: {
        type: Boolean,
        value: true
      }
    }
  }

  constructor() {
    super();
  }
}
customElements.define('app-element', AppElement);
