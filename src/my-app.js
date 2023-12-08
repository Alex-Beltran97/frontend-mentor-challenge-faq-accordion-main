import { LitElement, html } from 'lit';

import './page/co-footer/co-footer';
import './page/co-card-faq/co-card-faq';

import globalStyles from '../src/styles/global-styles';

export class MyApp extends LitElement {

  static styles = [globalStyles];

  static get is() {
    return "my-app";
  };

  render() {
    return html `
      <co-card-faq></co-card-faq>
      <co-footer></co-footer>
    `;
  }
}
customElements.define(MyApp.is, MyApp);
