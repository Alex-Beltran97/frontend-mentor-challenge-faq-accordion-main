import { css } from 'lit';

export default css `
  :host {
    display: block;
    font-size: .9rem;
    margin: 7.59rem 1.15rem;
    padding: 1.4rem;
    background-color: var(--white);
    border-radius: .5rem;
  }

  @media screen and (min-width: 768px) {
    :host {
      width: 28rem;
    }
  }
`;