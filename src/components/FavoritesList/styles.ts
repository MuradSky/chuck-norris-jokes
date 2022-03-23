export const styles = {
  list: `
    display: flex;
    flex-wrap: wrap;
    margin: -20px 0 0 -20px;
    padding: 0;

    @media (max-width: 1024px) {
      justify-content: space-between;
      padding: 0 20px;
      margin: -20px 0 0;
    }

    @media (max-width: 720px) {
      width: 100%;
      margin: -20px 0 0;
    }
  `,

  item: `
    list-style-type: none;
    width: 31.3%;
    margin: 20px 0 0 20px;
    text-align: left;
    font-size: 14px;
    padding: 35px 20px 20px;
    border: 3px solid #f15b23;
    position: relative;

    @media (max-width: 1024px) {
      width: 49%;
      margin: 20px 0 0;
    }

    @media (max-width: 720px) {
      width: 100%;
      padding: 35px 10px 20px;
    }
  `,

  btn: `
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 4px 10px;

    &:active {
      position: absolute;
      top: 6px;
    }
  `
};
