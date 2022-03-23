import React from "react";
import styled from "styled-components";

import { styles } from "./styles";

const Image = styled.img`
  ${styles.img}
`;

const Wrapper = styled.div`
  ${styles.wrapper}
`;

export const Avatar: React.FC<{ src: string }> = ({ src }) => (
  <Wrapper>
    <Image src={src} />
  </Wrapper>
);
