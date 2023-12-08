import { css } from 'lit';

export default css `
  :host {
    display: block;
  }

  .question-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    color: var(--dark);
    font-weight: 700; 
  }
  
  .answer {
    display: none;
    color: var(--grayish);
    font-weight: 500; 
  }

`;