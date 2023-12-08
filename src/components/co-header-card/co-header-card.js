import { LitElement, html } from 'lit';

import styles from './co-header-card-styles';
import globalStyles from '../../styles/global-styles';

export class CoHeaderCard extends LitElement {
  static styles = [ styles, globalStyles ];

  static get is() {
    return 'co-header-card';
  };

  static get properties() {
    return {
      startIcon: { type: String },
    };
  };

  constructor() {
    super();

    this.startIcon = "./src/assets/images/icon-star.svg";
  };

  render() {
    return html `
      <div class="title">
        <img src="${this.startIcon}" alt="Start icon" />
        <h1>FAQs</h1>
      </div>
    `;
  }
}
customElements.define(CoHeaderCard.is, CoHeaderCard);
