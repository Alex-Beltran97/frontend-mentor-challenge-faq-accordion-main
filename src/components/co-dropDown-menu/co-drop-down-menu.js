import { LitElement, html } from 'lit';

import globalStyles from '../../styles/global-styles'
import styles from './co-drop-down-menu-styles'

export class CoDropDOwnMenu extends LitElement {
  static styles = [ globalStyles, styles ];

  static get properties() {
    return {
      question: { 
        type: String,
        attribute: "dropdown-question"
      },
      answer: { 
        type: String,
        attribute: "dropdown-answer"
      },
      iconPlus: {
        type: String
      },
      wasClicked: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();

    this.question = "";
    this.answer = "";
    this.iconPlus = "https://res.cloudinary.com/duzyd4ju7/image/upload/v1702039469/icon-plus_s9pgwu.svg";
    this.iconMinus = "https://res.cloudinary.com/duzyd4ju7/image/upload/v1702039476/icon-minus_nu8fdn.svg";
    this.wasClicked = false;
  };

  static get is() {
    return 'co-drop-down-menu';
  }

  render() {
    return html `
      <div
        class="question-container"
        @click=${this._openInfo}
      >
        <p>${ this.question }</p>
        <img src="${ this.wasClicked ? this.iconMinus : this.iconPlus }" alt="Icon Plus" />
      </div>
  
      <p class="answer">${ this.answer }</p>
      <hr />
    `;
  }

  _openInfo() {
    this.wasClicked = !this.wasClicked;

    const answerComponent = this.shadowRoot.querySelector(".answer");
    
    if (this.wasClicked) {
      answerComponent.style.display = "block";
    } else {
      answerComponent.style.display = "none";
    };
  }
}
customElements.define(CoDropDOwnMenu.is, CoDropDOwnMenu);
