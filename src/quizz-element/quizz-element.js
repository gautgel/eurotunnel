import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-style/shared-style.js'
import '../map-element/mapdeux-element.js'
/* Création d'un élément Quizz qui sera dynamique  */

class QuizzElement extends PolymerElement {
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
          overflow : hidden;
          z-index : 99999999999999999;
        }
        .w20{
          width : 200px;
          height :200px;
          border-radius :50%;
          top : 45%;
          right : 201px; 

        }
        
        .w30{
          width : 270px;
          height :270px;
          border-radius :50%;
          left : 130px;
          top : 35%;

        }
        p{
          margin:0;
          padding:0;
          text-align:center;
        }
        .divQuestion {
          position : relative;
          z-index : 99;
          background-color : white;
        }
        .containCircle{
          width : 120px;
          height :20px;
          top:39%;
          left:5%;
          display:flex;
        }
        .circle{
          width :100%;
          height :100%;
          margin:7%;
          border-radius:50%;
          border:2px solid white;
        }
        .circleGreen{
          width :100%;
          height :100%;
          margin:7%;
          border-radius:50%;
          border:2px solid white;
          background-color:green;
        }

        .circleRed{
          width :100%;
          height :100%;
          margin:7%;
          border-radius:50%;
          border:2px solid white;
          background-color:red;
        }

        #endQuizzBtn{
          display : none;
          position : absolute;
          top : 20%;
          left : 50%;
          transform : translateY(-50%) translateX(-50%);
        }
      </style>
      <div class="fullHeight mainQuizz" >
        <div class="absolute topLeft">
          <p class="rem15 white">Histoire...</p>
        </div>
        <div class="height50 fullWidth purple flexCenterCenter white">
          <p class="rem15 white"on-click="jeanmich">{{question.question}}</p>
        </div>
  
        <div class="absolute containCircle">
          <div on-click="awnser" class$="{{cercle1}}"></div>
          <div on-click="awnser" class$="{{cercle2}}"></div>
          <div on-click="awnser" class$="{{cercle3}}"></div>
        </div>
        <div class="popup" onclick="myFunction()">Click me!
          <span class="popuptext" id="myPopup">Popup text...</span>
        </div>
  
        <div class="absolute w20 bgWhite">
        </div>
        <div class="absolute w30 bgWhite">
        </div>

        <div class="height50 fullWidth divQuestion margTop">
          <div on-click="awnser" class$="rep {{btnClass1}} position">
            <p>{{question.repOne}}</p>
          </div>
          <div on-click="awnser" class$="rep {{btnClass2}} position">
            <p>{{question.repTwo}}</p>
          </div>
          <div on-click="awnser" class$="rep {{btnClass3}} position">
            <p>{{question.repThree}}</p>
          </div>

          <button id="endQuizzBtn" class="blueBtn" on-click="returnMap">Terminer le quizz</button>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      question : {
        type : Object,
        value : function() {
          return {
            question : "Quelle est l'année de la première tentative de création du Tunnel?",
            repOne : "1802",
            repTwo : "1990",
            repThree : "1920"
          }
        }
      },
      btnClass1 :{
        type:String,
        value : "blueBtn"
      },
      btnClass2 :{
        type:String,
        value : "blueBtn"
      },
      btnClass3 :{
        type:String,
        value : "blueBtn"
      },
      cercle1 :{
        type:String,
        value : "circle"
      },
      cercle2 :{
        type:String,
        value : "circle"
      }, 
      cercle3 :{
        type:String,
        value : "circle"
      },

    }
  }

  constructor() {
    super();
  }

  awnser(e) {
    let reponse = e.target.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();

    switch(this.question.repOne) {
      case "1802":
        this.reponseOne(reponse);
        this.set('btnClass1', "greenBtn");
        this.set('btnClass2', "redBtn");
        this.set('btnClass3', "redBtn");

        break;
      case"1993":
        this.reponseTwo(reponse);
        this.set('btnClass1', "redBtn");
        this.set('btnClass2', "redBtn");
        this.set('btnClass3', "greenBtn");
        break;

      case"12 ans":
        this.reponseThree(reponse);
        this.set('btnClass1', "redBtn");
        this.set('btnClass2', "redBtn");
        this.set('btnClass3', "greenBtn");
        break;
      
    }
    
    setTimeout(this.nextQuestion.bind(this), 1500);
  }

  reponseOne(reponse){
    if(reponse == "1802"){
      this.set('cercle1',"circleGreen");
      
    }else{
      this.set('cercle1',"circleRed");
    
    }
  }
  reponseTwo(reponse){
    if(reponse == "1990"){
      this.set('cercle2',"circleGreen");
      
    }else{
      this.set('cercle2',"circleRed");
      
    }
  }
  reponseThree(reponse){
    if(reponse == "6 ans"){
      this.set('cercle3',"circleGreen");
     

    }else{
      this.set('cercle3',"circleRed");
      
    }
  }
  nextQuestion(){
    this.set('btnClass1', "blueBtn");
    this.set('btnClass2', "blueBtn");
    this.set('btnClass3', "blueBtn");

    switch(this.question.repOne) {
      case "1802":
        this.set('question.repOne', "1993");
        this.set('question.repTwo', "1999");
        this.set('question.repThree', "1990");
        this.set('question.question', "En quelle année à eu lieu la première jonction sous-marine France Angleterre?")
        break;
      case "1993":
        this.set('question.repOne', "12 ans");
        this.set('question.repTwo', "8 ans");
        this.set('question.repThree', "6 ans");
        this.set('question.question', "Combien de temps a duré la construction du tunnel?")
        break;
      case "12 ans":
        this.endQuizz();
        break;
    }
  }
  endQuizz() {
    console.log('end')
    var reps = this.shadowRoot.querySelectorAll(".rep");

    reps.forEach(elem => {
      elem.parentNode.removeChild(elem);
    });

    this.shadowRoot.querySelector("#endQuizzBtn").style.display = "flex";
  }
  returnMap (e) {
    e.preventDefault();
    var mapDeux = document.createElement("mapdeux-element");
    document.body.appendChild(mapDeux);
  }
}
customElements.define('quizz-element', QuizzElement);