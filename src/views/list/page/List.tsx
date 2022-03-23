import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FavoritesList } from "components/FavoritesList";
import { ButtonPrimary, ButtonDanger } from "components/Button";

import { clearFavoriteList } from "store/favoritesSlice";
import { RootState } from "store";

import { styles } from "./styles";

const Container = styled.section`
  ${styles.container}
`;

const Row = styled.div`
  ${styles.row}
`;

const InfoText = styled.p`
  ${styles.info}
`;

const List: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.favorites.favorites);
  const navigate = useNavigate();
  const onReplaceUrl = () => navigate("/", { replace: true });
  const onClearList = () => dispatch(clearFavoriteList());
  return (
    <Container>
      <h2>Мои любимые шутки Чака Нориса</h2>
      <Row>
        <ButtonPrimary onClick={onReplaceUrl} marginRight={!!data}>
          {data ? "Добавить новую" : "Добавить Шутку"}
        </ButtonPrimary>
        {data ? (
          <ButtonDanger onClick={onClearList}>Очистить</ButtonDanger>
        ) : null}
      </Row>
      {data ? (
        <FavoritesList data={data} />
      ) : (
        <InfoText>Ваш список сейчас пуст</InfoText>
      )}
    </Container>
  );
};

export default List;
