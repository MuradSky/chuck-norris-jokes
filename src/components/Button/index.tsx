import styled from "styled-components";

import { styles } from "./styles";

export const Button = styled.button`
  ${styles.parent}
`;

export const ButtonPrimary = styled(Button)<{ marginRight: boolean }>`
  ${styles.primary};
  margin-right: ${(props) => (props.marginRight ? "20px" : "0px")};
`;

export const ButtonGreen = styled(Button)`
  ${styles.green}
`;

export const ButtonDanger = styled(Button)`
  ${styles.danger}
`;

export const ButtonOrange = styled(Button)`
  ${styles.orange}
`;
