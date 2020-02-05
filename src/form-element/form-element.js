import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../../icon-toggle.js';
import '../home-element/home-element.js';
import '../shared-style/shared-style.js'

class FormElement extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-style">
        :host {      
          font-family: 'Varela Round', sans-serif;
          position : absolute;
          margin : 0;
          height : 100vh;
          width : 100vw;
          top : 0;
          left : 0;
        }
        div {
          height : 100%;
          width : 100%;
          z-index : 99999;
        }
      </style>

      <div class="purple">
        
      </div>
    `;
  }

  static get properties() {
    return {
    }
  }

  constructor() {
    super();
  }
}
customElements.define('form-element', FormElement);