import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { ButtonGreen, ButtonDanger } from "components/Button";
import { RootState } from "store";
import { Loader } from "components/Loader";
import { addFavorite, removeFavorite } from "store/favoritesSlice";
import { getFavorites } from "helpers/utils";

import { styles } from "./styles";

export const Display = styled.section`
  ${styles.display}
`;

export const JokeDisplay: React.FC = () => {
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const data = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const { joke } = data.joke;
    const favorites = getFavorites();
    const existing = favorites?.find((item: any) => item.id === joke.id);
    if (existing) setIsAdded(true);
    else setIsAdded(false);
  }, [data.joke]);

  const { loading, joke } = data.joke;

  const onAddFavorite = () => {
    dispatch(addFavorite(joke));
    setIsAdded(true);
  };

  const onRemoveFavorite = () => {
    setIsAdded(false);
    dispatch(removeFavorite(joke.id));
  };

  return (
    <>
      <Display>
        {loading === "loading" ? (
          <Loader />
        ) : loading === "idle" ? (
          `" ${joke?.value} "`
        ) : null}
      </Display>

      {!isAdded ? (
        <ButtonGreen onClick={onAddFavorite}>Добавить</ButtonGreen>
      ) : (
        <ButtonDanger onClick={onRemoveFavorite}>Отмена</ButtonDanger>
      )}
    </>
  );
};
