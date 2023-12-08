import { LitElement, html } from 'lit';
import styles from "./co-footer-styles";

export class CoFooter extends LitElement {
  static styles = [ styles ];

  static get is() {
    return "co-footer";
  };

  render() {
    return html `
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/Alex-Beltran97">Pedro Alexander Beltran Hernandez</a>.
    </div>
    `;
  }
}
customElements.define(CoFooter.is, CoFooter);
