import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "store";
import { ButtonOrange } from "components/Button";
import { styles } from "./styles";

const Wrapper = styled.div`
  ${styles.wrapper}
`;

export const Counter = () => {
  const counter = useSelector((state: RootState) => state.favorites.counter);
  const navigate = useNavigate();
  const onReplacePage = () => navigate("/list", { replace: true });
  return (
    <Wrapper>
      <ButtonOrange onClick={onReplacePage}>Любимые {counter}</ButtonOrange>
    </Wrapper>
  );
};
