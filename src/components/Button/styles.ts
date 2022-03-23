export const styles = {
  parent: `
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
    padding: 5px 20px;
    color: #fff;
    border: 0;
    &:active {
      position: relative;
      top: 1px;
    }

    &.margin_rg {
      margin-right: 20px;
    }

    a {
      color: currentColor;
      text-decoration: none;
    }
  `,

  primary: `
    background-color: #7986cb;
    &:hover {
      background-color: #476e9e;
    }
  `,

  green: `
    background-color: #4caf50;
    &:hover {
      background-color: #5cbf2a;
    }
  `,

  danger: `
    background-color: #f44336;
    
    &:hover {
      background-color: #f44336;
    }
  `,

  orange: `
    background-color: #c76524;
    &:hover {
      background-color: #964a17;
    }
  `
};
