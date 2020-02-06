import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../../icon-toggle.js'
import '../shared-style/shared-style.js'
import '../map-element/map-element.js'


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

        .main {
          height : 100%;
          width : 100%;
          z-index : 999;
        }

        .company{
          display: none;
        }

      </style>
        
      <div class="main purple flexCenterCenter">
        <form action="" method="get" class="relative flexColumn px20 white">

          <label class="">Prénom</label>
          <input class="input marginBottom30" type="text"></input>

          <label class="">Nom</label>
          <input class="input marginBottom30" type="text"></input>

          <label class="">Mail</label>
          <input class="input marginBottom30" type="mail"></input>

          <label class="">Âge</label>
          <input class="input marginBottom30" type="number"></input>

          <label class="">Êtes-vous venu :</label>
          <div class="flexCenterCenter marginBottom30">
            <input on-change="inputHidden" class="textAlignCenter paddSide10 marginLeft25 marginRight10" id="alone" type="radio" name="company" value="alone">Seul</input>
            <input on-change="inputHidden" class="textAlignCenter paddSide10 marginLeft25 marginRight10" id="company" type="radio" name="company" value="company">En entreprise</input>
          </div>
          
          <div class="company flexColumn marginBottom30">
            <label class="">Nom de l'entreprise</label>
            <input class="input" type="text"></input>
          </div>

          <input type="submit" on-click="openMap" class="blueBtn"></input>
        </form>
      </div>

    `;
  }

  static get properties() {
    return {
      hidden : {
        type : Boolean,
        value : true
      }
    }
  }

  constructor() {
    super();
  }
  inputHidden() {
    if(this.shadowRoot.getElementById("company").checked)
    {
      this.shadowRoot.querySelector(".company").style.display = "flex";
    }
    else
    {
      this.shadowRoot.querySelector(".company").style.display = "none";
    }
  }

  openMap(e) {
    e.preventDefault()
    var map = document.createElement("map-element");
    document.body.appendChild(map);
  }
}
customElements.define('form-element', FormElement);