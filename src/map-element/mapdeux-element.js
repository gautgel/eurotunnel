import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import '../../icon-toggle.js';
import '../shared-style/shared-style.js'
import '../form-element/form-element.js'
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/polymer/lib/elements/dom-if.js';




class MapdeuxElement extends PolymerElement {
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
          z-index : 99999999999999999999999999;
				}

				.main {
					height : 100%;
					width : 100%;
        }	
        svg {
          position : absolute;
          transform : rotate(-30deg);
          top : 20%;
          right : -440px;
        }
        .barContainer {
          position : absolute;
          left : 0;
          width : 50%;
          height : 90%;
          top : 48%;
          transform : translateY(-50%);
        }
        .bar {
          position : absolute;
          left : 23px;
          width : 4px;
          height : 95%;
          background-color : #BABABA;
          top : 50%;
          transform : translateY(-50%);
        }
        .barb {
          position : absolute;
          left : 23px;
          width : 4px;
          height : 16.5%;
          background-color : #3B99C4;
          bottom : 0%;
          transition : .5s;
        }
        .rond {
          height : 26px;
          width : 26px;
          left : -11px;
          background-color : #BABABA;
          border-radius : 50%;
          position : absolute;
          overflow : hidden;
        }
        .rb {
          height : 40px;
          width : 40px;
          left : -11px;
          background-color : #3B99C4;
          position : absolute;
          transition : .7s;
        }

        .info {
          position : absolute;
          top : 14px;
          right : 20px;
          height : 60px;
          width : 230px;
          box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.48);
          display : flex;
          justify-content : space-around;
          align-items : center;
          border-radius : 5px;
        }
        .info iron-icon {
          color : #3B99C4;
          margin-left : 5px;
          --iron-icon-width: 50px;
          --iron-icon-height: 50px;
        }
        .info p {
          color : black;
          margin : 0;
          font-size : 12px;
          text-align : center;
          padding : 10px;
        }

        .rUn {
          top : 0;
        }
        .rDeux {
          top : 20%;
        }
        .rTrois {
          top : 40%;
        }
        .rQuatre {
          top : 60%;
        }
        .rCinq {
          top : 80%;
        }
        .rSix {
          top : 99%;
        }


        .rbUn {
          top : 26px;
        }
        .rbDeux {
          top : 26px;
        }
        .rbTrois {
          top : 26px;
        }
        .rbQuatre {
          top : 26px;
        }
        .rbCinq {
          top : 0px;
        }
        .rbSix {
          top : 0px;
        }



        #eol {
          animation : eole 1.6s infinite linear;
          transform-origin: 50% 70%;
          transform-box : fill-box;
        }
        #un {
          animation : one .6s infinite linear;
          transform-origin: bottom;
          animation-direction: alternate;
          transform-box : fill-box;
        }
        #deux {
          animation : one .4s infinite linear;
          transform-origin: bottom;
          animation-direction: alternate;
          transform-box : fill-box;
        }
        #trois {
          animation : one .7s infinite linear;
          transform-origin: bottom;
          animation-direction: alternate;
          transform-box : fill-box;
        }
        #quatre {
          animation : one .65s infinite linear;
          transform-origin: bottom;
          animation-direction: alternate;
          transform-box : fill-box;
        }
        #cinq {
          animation : one .5s infinite linear;
          transform-origin: bottom;
          animation-direction: alternate;
          transform-box : fill-box;
        }
        #cloud {
          animation : cloud 1.5s infinite linear;
          transform-origin: bottom;
          animation-direction: alternate;
          transform-box : fill-box;
        }
        .mots {
          height : 98%;
          top : 18px;
          position : absolute;
          left : 60px;
          display : flex;
          flex-direction : column;
          justify-content: space-between;
        }
        .mots p {
          margin: 0;
        }
        @keyframes eole {
          from {
            transform : rotateZ(0deg);
          }
          to {
            transform : rotateZ(360deg);
          }
        }
        @keyframes one {
          from {
            transform : rotateZ(-3.2deg);
          }
          to {
            transform : rotateZ(2.5deg);
          }
        }
        @keyframes two {
          from {
            transform : rotateZ(-3deg);
          }
          to {
            transform : rotateZ(2.5deg);
          }
        }
        @keyframes three {
          from {
            transform : rotateZ(-3.2deg);
          }
          to {
            transform : rotateZ(2.5deg);
          }
        }
        @keyframes four {
          from {
            transform : rotateZ(-3.7deg);
          }
          to {
            transform : rotateZ(2.3deg);
          }
        }
        @keyframes five {
          from {
            transform : rotateZ(-2.9deg);
          }
          to {
            transform : rotateZ(2.5deg);
          }
        }
        @keyframes cloud {
          from {
            transform : translateX(0px) translateY(0px);
          }
          50% {

            transform : translateX(-15px) translateY(-3px);
          }
          to {
            transform : translateX(-30px) translateY(0px);
          }
        }
			</style>

      <div class="whiteBg main">
        <div class="height85 fullWidth hidden relative">
          <svg width="750" height="320" viewBox="0 0 887 492" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="route 1">
              <g id="deux">
                <path id="Vector" d="M150.6 222.2C159.05 222.2 165.9 215.35 165.9 206.9C165.9 198.45 159.05 191.6 150.6 191.6C142.15 191.6 135.3 198.45 135.3 206.9C135.3 215.35 142.15 222.2 150.6 222.2Z" fill="#6C63FF"/>
                <path id="Vector_2" d="M152 252.9H148.9L150.3 204.6L152 252.9Z" fill="#3F3D56"/>
                <path id="Vector_3" d="M150.6 213.7L154 209.1L150.6 214.9L150.2 214.2L150.6 213.7Z" fill="#3F3D56"/>
                <path id="Vector_4" d="M150.2 218.4L146.9 213.8L150.3 219.6L150.7 218.9L150.2 218.4Z" fill="#3F3D56"/>
              </g>
              <g id="cinq">
                <path id="Vector_5" d="M290.9 222.2C299.35 222.2 306.2 215.35 306.2 206.9C306.2 198.45 299.35 191.6 290.9 191.6C282.45 191.6 275.6 198.45 275.6 206.9C275.6 215.35 282.45 222.2 290.9 222.2Z" fill="#6C63FF"/>
                <path id="Vector_6" d="M292.4 252.9H289.2L290.7 204.6L292.4 252.9Z" fill="#3F3D56"/>
                <path id="Vector_7" d="M290.9 213.7L294.3 209.1L290.9 214.9L290.5 214.2L290.9 213.7Z" fill="#3F3D56"/>
                <path id="Vector_8" d="M290.6 218.4L287.2 213.8L290.6 219.6L291 218.9L290.6 218.4Z" fill="#3F3D56"/>
              </g>
              <g id="trois">
                <path id="Vector_9" d="M194.9 207.5C207.382 207.5 217.5 197.382 217.5 184.9C217.5 172.418 207.382 162.3 194.9 162.3C182.418 162.3 172.3 172.418 172.3 184.9C172.3 197.382 182.418 207.5 194.9 207.5Z" fill="#6C63FF"/>
                <path id="Vector_10" d="M197.1 252.9H192.4L194.5 181.5L197.1 252.9Z" fill="#3F3D56"/>
                <path id="Vector_11" d="M195 195L199.9 188.2L194.9 196.7L194.3 195.8L195 195Z" fill="#3F3D56"/>
                <path id="Vector_12" d="M194.4 202L189.4 195.1L194.5 203.7L195 202.7L194.4 202Z" fill="#3F3D56"/>
              </g>
              <g id="quatre">
                <path id="Vector_13" d="M248.2 207.5C259.688 207.5 269 197.382 269 184.9C269 172.418 259.688 162.3 248.2 162.3C236.712 162.3 227.4 172.418 227.4 184.9C227.4 197.382 236.712 207.5 248.2 207.5Z" fill="#6C63FF"/>
                <path id="Vector_14" d="M250.225 252.9H245.899L247.832 181.5L250.225 252.9Z" fill="#3F3D56"/>
                <path id="Vector_15" d="M248.2 195L252.802 188.2L248.2 196.7L247.648 195.8L248.2 195Z" fill="#3F3D56"/>
                <path id="Vector_16" d="M247.74 202L243.138 195.1L247.832 203.7L248.292 202.7L247.74 202Z" fill="#3F3D56"/>
              </g>
              <g id="un">
                <path id="Vector_17" d="M106.78 212.733C119.058 212.594 128.89 202.079 128.738 189.246C128.587 176.414 118.511 166.124 106.232 166.263C93.9538 166.403 84.1225 176.918 84.2736 189.75C84.4247 202.583 94.501 212.873 106.78 212.733Z" fill="#6C63FF"/>
                <path id="Vector_18" d="M108.9 252.873L104.368 252.926L105.597 183.848L108.9 252.873Z" fill="#3F3D56"/>
                <path id="Vector_19" d="M106.133 196.9L110.878 190.268L106.152 198.544L105.564 197.68L106.133 196.9Z" fill="#3F3D56"/>
                <path id="Vector_20" d="M105.729 203.676L100.832 197.058L105.845 205.319L106.316 204.346L105.729 203.676Z" fill="#3F3D56"/>
              </g>
              <path id="Vector_21" d="M817.2 491.6H80C40.9 491.6 9.29999 459.9 9.29999 420.9C9.29999 381.9 41 350.2 80 350.2H815.6C830.6 350.2 842.8 338 842.8 323C842.8 308 830.6 295.8 815.6 295.8H55.5V252.3H815.6C854.7 252.3 886.3 283.9 886.4 323C886.4 362.1 854.8 393.7 815.7 393.8C815.7 393.8 815.7 393.8 815.6 393.8H80C65 393.8 52.8 406 52.8 421C52.8 436 65 448.1 80 448.1H817.3V491.6H817.2Z" fill="#E6E6E6"/>
              <path id="Vector_22" d="M116.4 272.9H82.7V275.1H116.4V272.9Z" fill="white"/>
              <path id="Vector_23" d="M212.2 272.9H178.5V275.1H212.2V272.9Z" fill="white"/>
              <path id="Vector_24" d="M307.9 272.9H274.2V275.1H307.9V272.9Z" fill="white"/>
              <path id="Vector_25" d="M403.7 272.9H370V275.1H403.7V272.9Z" fill="white"/>
              <path id="Vector_26" d="M499.5 272.9H465.8V275.1H499.5V272.9Z" fill="white"/>
              <path id="Vector_27" d="M595.2 272.9H561.5V275.1H595.2V272.9Z" fill="white"/>
              <path id="Vector_28" d="M691 272.9H657.3V275.1H691V272.9Z" fill="white"/>
              <path id="Vector_29" d="M786.7 272.9H753V275.1H786.7V272.9Z" fill="white"/>
              <path id="Vector_30" d="M116.4 370.8H82.7V373H116.4V370.8Z" fill="white"/>
              <path id="Vector_31" d="M212.2 370.8H178.5V373H212.2V370.8Z" fill="white"/>
              <path id="Vector_32" d="M307.9 370.8H274.2V373H307.9V370.8Z" fill="white"/>
              <path id="Vector_33" d="M403.7 370.8H370V373H403.7V370.8Z" fill="white"/>
              <path id="Vector_34" d="M499.5 370.8H465.8V373H499.5V370.8Z" fill="white"/>
              <path id="Vector_35" d="M595.2 370.8H561.5V373H595.2V370.8Z" fill="white"/>
              <path id="Vector_36" d="M691 370.8H657.3V373H691V370.8Z" fill="white"/>
              <path id="Vector_37" d="M786.7 370.8H753V373H786.7V370.8Z" fill="white"/>
              <path id="Vector_38" d="M116.4 468.8H82.7V471H116.4V468.8Z" fill="white"/>
              <path id="Vector_39" d="M212.2 468.8H178.5V471H212.2V468.8Z" fill="white"/>
              <path id="Vector_40" d="M307.9 468.8H274.2V471H307.9V468.8Z" fill="white"/>
              <path id="Vector_41" d="M403.7 468.8H370V471H403.7V468.8Z" fill="white"/>
              <path id="Vector_42" d="M499.5 468.8H465.8V471H499.5V468.8Z" fill="white"/>
              <path id="Vector_43" d="M595.2 468.8H561.5V471H595.2V468.8Z" fill="white"/>
              <path id="Vector_44" d="M691 468.8H657.3V471H691V468.8Z" fill="white"/>
              <path id="Vector_45" d="M786.7 468.8H753V471H786.7V468.8Z" fill="white"/>
              <path id="Vector_46" d="M265.1 121.6C268.6 121.6 272.1 122.5 275.2 124.2H255C258.1 122.5 261.6 121.6 265.1 121.6Z" fill="#E6E6E6"/>
              <path id="Vector_47" d="M221.6 86.4C227.5 86.4 233.3 88.2 238.1 91.6H205.1C209.9 88.2 215.7 86.4 221.6 86.4Z" fill="#E6E6E6"/>
              <g id="cloud">
                <path id="Vector_48" d="M34.2 79.2C35.9 49.6 61.2 27 90.8 28.7C113.8 30 133.3 45.8 139.5 67.9C140.2 67.9 140.8 67.9 141.5 67.9C165.3 67.9 186.3 83.6 193 106.4C208.8 99.5 227.3 104.1 238 117.6H70.6C50.6 117.7 34.3 101.5 34.2 81.4C34.2 80.9 34.2 80.5 34.2 80C34.2 79.7 34.2 79.5 34.2 79.2Z" fill="#E3E3E3"/>
              </g>
              <path id="Vector_49" d="M284.1 142.8C280.6 142.8 277.1 143.7 274 145.4H294.2C291.1 143.7 287.6 142.7 284.1 142.8Z" fill="#E6E6E6"/>
              <path id="Vector_50" d="M323.3 140.1C317.4 140.1 311.6 141.9 306.8 145.3H339.8C335 142 329.2 140.1 323.3 140.1Z" fill="#E6E6E6"/>
              <path id="Vector_51" d="M549.6 105.8C547.9 76.2 522.6 53.6 493 55.3C470 56.6 450.5 72.4 444.3 94.5C443.6 94.5 443 94.5 442.3 94.5C418.5 94.5 397.5 110.2 390.8 133C375 126.1 356.5 130.7 345.8 144.2H513.2C533.2 144.3 549.5 128.1 549.6 108C549.6 107.5 549.6 107.1 549.6 106.6C549.7 106.3 549.7 106.1 549.6 105.8Z" fill="#E6E6E6"/>
              <path id="Vector_52" d="M705.6 388.3L717.4 405.9V397.6L711.2 388.3H705.6Z" fill="#F2F2F2"/>
              <path id="Vector_53" d="M739.9 388.3L748.9 401.8V393.6L745.4 388.3H739.9Z" fill="#F2F2F2"/>
              <path id="Vector_54" d="M690.2 388.3L702.5 406.5H708L695.8 388.3H690.2Z" fill="#F2F2F2"/>
              <path id="Vector_55" d="M171.1 448.3H159.7L163.3 333.9H167.5L171.1 448.3Z" fill="white" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
              <g id="eol">
                <path id="Vector_56" d="M170.644 313.509C170.244 315.209 169.044 318.809 165.144 318.709C162.144 318.609 159.844 316.409 159.944 313.809L161.044 278.709L161.444 267.309C161.444 267.309 163.344 264.109 165.344 278.309V278.409L170.744 312.009C170.744 312.509 170.744 313.009 170.644 313.509Z" fill="white" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_57" d="M168.044 316.909H162.244V327.509H168.044V316.909Z" fill="white" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_58" d="M167.344 325.009H162.944V329.709H167.344V325.009Z" fill="white" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_59" d="M165.244 278.409C163.244 277.909 161.844 278.309 160.944 278.809L161.344 267.409C161.344 267.409 163.344 264.209 165.244 278.409Z" fill="#6C63FF" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_60" d="M168.044 320.109V327.509H162.244V320.209C164.044 319.609 166.144 319.509 168.044 320.109Z" fill="#6C63FF" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_61" d="M181.644 343.709C180.044 342.709 176.844 340.209 178.644 337.209C180.044 334.909 183.444 334.109 186.044 335.309L222.244 351.509L234.044 356.809C234.044 356.809 236.544 359.709 220.744 355.009H220.644L183.044 344.409C182.644 344.309 182.044 344.009 181.644 343.709Z" fill="white" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_62" d="M168.044 335.609L170.644 331.109L181.744 335.809L179.144 340.209L168.044 335.609Z" fill="white" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_63" d="M172.944 332.809L170.944 336.209L166.144 334.209L168.044 330.709L172.944 332.809Z" fill="white" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_64" d="M220.744 355.009C222.144 353.709 222.344 352.409 222.244 351.609L234.044 356.909C234.044 356.809 236.544 359.709 220.744 355.009Z" fill="#6C63FF" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_65" d="M175.844 338.809L168.044 335.509L170.544 331.009L178.144 334.209C178.144 336.009 177.344 337.609 175.844 338.809Z" fill="#6C63FF" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_66" d="M148.644 343.709C150.244 342.709 153.444 340.209 151.644 337.209C150.244 334.909 146.844 334.109 144.244 335.309L108.044 351.509L96.2444 356.809C96.2444 356.809 93.7444 359.709 109.444 355.009H109.544L147.144 344.409C147.644 344.309 148.144 344.009 148.644 343.709Z" fill="white" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_67" d="M148.544 335.809L159.644 331.109L162.144 335.609L151.044 340.209L148.544 335.809Z" fill="white" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_68" d="M162.144 330.709L164.144 334.209L159.244 336.209L157.244 332.809L162.144 330.709Z" fill="white" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_69" d="M109.444 355.009C108.044 353.709 107.844 352.409 107.944 351.609L96.1445 356.909C96.1445 356.809 93.6445 359.709 109.444 355.009Z" fill="#6C63FF" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_70" d="M154.344 338.809L162.144 335.509L159.644 331.009L152.044 334.209C152.044 336.009 152.944 337.609 154.344 338.809Z" fill="#6C63FF" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
                <path id="Vector_71" d="M165.144 334.809C167.243 334.809 168.944 333.376 168.944 331.609C168.944 329.842 167.243 328.409 165.144 328.409C163.045 328.409 161.344 329.842 161.344 331.609C161.344 333.376 163.045 334.809 165.144 334.809Z" fill="#6C63FF" stroke="#1D1D1B" stroke-width="0.25" stroke-miterlimit="10"/>
              </g>
            </g>
          </svg>

          <div class="barContainer">
            <div class="bar">
              <div class="rUn rond" on-click="progressBar">
                <div class="rbUn rb" ></div>
              </div>
              <div class="rDeux rond">
                <div class="rbDeux rb"></div>
              </div>
              <div class="rTrois rond">
                <div class="rbTrois rb"></div>
              </div>
              <div class="rQuatre rond">
                <div class="rbQuatre rb"></div>
              </div>
              <div class="rCinq rond">
                <div class="rbCinq rb" transition-end="quizz"></div>
              </div>
              <div class="rSix rond">
                <div class="rbSix rb"></div>
              </div>    
            </div>
            <div class="mots">
              <p>Arrivée</p>
              <p>Formation</p>
              <p>Chargement & Maintenances</p>
              <p>Tour de contrôle</p>
              <p>Siège d'exploitation</p>
              <p>Départ</p>
            </div>
            <div class="barb"></div>
          </div>
        </div>
        <div class="info">
          <iron-icon icon="info-outline"></iron-icon>    
          <p>Cliquez sur une étape pour avoir plus d'informations à son sujet</p>
        </div>
        <div class="height15 fullWidth purple flexCenterCenter">
          <button disabled id="myButton" class="btnn blueBtn" on-click="openQuizz">Démarrez le quizz</button>
        </div>
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

  ready() {
    super.ready();
    this.progressBar();

    var boule = this.shadowRoot.querySelector(".rbCinq"); 
    boule.addEventListener("transitionend", this.quizz.bind(this));
  }

  progressBar() {
    var bar = this.shadowRoot.querySelector(".barb");    
    var ball = this.shadowRoot.querySelector(".rbQuatre"); 
    var height = 16.5;
    var id = setInterval(frame, 500);

    function frame() {
      if (height >= 35.5) {
        clearInterval(id);
        ball.style.top = "0";
      } else {
        height++; 
        bar.style.height = height + '%'; 
      }
    }
  }
  quizz() {
    this.shadowRoot.querySelector("#myButton").disabled=false;
  }

  openQuizz (e) {
    e.preventDefault()
    var quizz = document.createElement("quizz-element");
    document.body.appendChild(quizz);
  }
}
customElements.define('mapdeux-element', MapdeuxElement);
