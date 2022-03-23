import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ButtonDanger } from "components/Button";
import { IJoke } from "interfaces";
import { removeFavorite } from "store/favoritesSlice";

import { styles } from "./styles";

const Delete = styled(ButtonDanger)`
  ${styles.btn}
`;

const Item = styled.li`
  ${styles.item}
`;

const List = styled.ul`
  ${styles.list}
`;

export const FavoritesList: React.FC<{ data: IJoke[] }> = ({ data }) => {
  const dispatch = useDispatch();
  const onDelete = (id: string) => dispatch(removeFavorite(id));
  return (
    <List>
      {data.map((item, i) => (
        <Item key={i}>
          {`" ${item?.value} "`}
          <Delete onClick={() => onDelete(item.id)}>x</Delete>
        </Item>
      ))}
    </List>
  );
};
