import { LitElement, html } from 'lit';

import globalStyles from "../../styles/global-styles";
import styles from "./co-card-faq-styles";

// Components
import '../../components/co-header-card/co-header-card';
import '../../components/co-dropDown-menu/co-drop-down-menu';

// Data
import data from '../../data/data.json';

export class CoCardFaq extends LitElement {
  static styles = [ styles, globalStyles ];

  static get is () {
    return "co-card-faq";
  };

  static get properties() {
    return {
      questions: { type: Array }
    };
  }

  constructor() {
    super();

    this.questions = data.data;
  };

  render() {
    return html `
    <co-header-card></co-header-card>
    ${ this.questions.map(({question, answer}) => this._getDropDownMenuComponent(question, answer)) }
    `;
  }

  _getDropDownMenuComponent(question, answer) {
    return html `
      <co-drop-down-menu
        dropdown-question="${ question }"
        dropdown-answer="${ answer }"
      >
      </co-drop-down-menu>
    `;
  }
}
customElements.define(CoCardFaq.is, CoCardFaq);