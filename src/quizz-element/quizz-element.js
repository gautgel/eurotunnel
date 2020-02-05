import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-style/shared-style.js'

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
        }
        div {
        }
        p{
          margin:0;
          padding:0;
        }
      </style>
      <div class="fullHeight" >
        <div class="absolute topLeft">
        <p class="rem2">Histoire...</p>
        </div>
        <div class="height50 fullWidth purple flexCenterCenter white">
        <p class="rem2 white"on-click="jeanmich">{{question.question}}</p>

        </div>
        <div class="height50 fullWidth">
          <div on-click="awnser" class$="{{btnClass1}}">
            <p>{{question.repOne}}</p>
          </div>
          <div on-click="awnser" class$="{{btnClass2}}">
            <p>{{question.repTwo}}</p>
          </div>
          <div on-click="awnser" class$="{{btnClass3}}">
            <p>{{question.repThree}}</p>
          </div>
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
            question : "combien ?",
            repOne : "un",
            repTwo : "two",
            repThree : "trois"
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

    }
  }

  constructor() {
    super();
  }

  awnser() {
    console.log(this.question.repOne)
    switch(this.question.repOne) {
      case "un":
        this.set('btnClass1', "greenBtn");
        this.set('btnClass2', "redBtn");
        this.set('btnClass3', "redBtn");
        break;
      case"a":
        this.set('btnClass1', "redBtn");
        this.set('btnClass2', "redBtn");
        this.set('btnClass3', "greenBtn");
        break;
    }
    
    setTimeout(this.nextQuestion.bind(this), 1500);
  }

  nextQuestion(){
    this.set('btnClass1', "blueBtn");
    this.set('btnClass2', "blueBtn");
    this.set('btnClass3', "blueBtn");

    switch(this.question.repOne) {
      case "un":
        this.set('question.repOne', "a");
        this.set('question.repTwo', "b");
        this.set('question.repThree', "c");
        break;
      case "a":
        this.set('question.repOne', "cheval");
        this.set('question.repTwo', "licorne");
        this.set('question.repThree', "faisan");
        break;
      case"cheval":
      this.set('question.repOne', "tomate");
      this.set('question.repTwo', "salade");
      this.set('question.repThree', "oignon");
        break;
    }
  }

}
customElements.define('quizz-element', QuizzElement);