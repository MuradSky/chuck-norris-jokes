import React from "react";
import styled from "styled-components";

import { Avatar } from "components/Avatar";
import { Counter } from "components/Counter";
import { JokeDisplay } from "components/JokeDisplay";
import { ButtonPrimary, ButtonGreen } from "components/Button";
import { useTimerJoke } from "helpers/hooks";

import { styles } from "./styles";

const Container = styled.section`
  ${styles.container}
`;

const Row = styled.div`
  ${styles.row}
`;

const Timer = styled.div`
  ${styles.timer}
`;

const Main: React.FC = () => {
  const { time, start, pause, reset, status, randomJoke } = useTimerJoke();

  const onToggleTime = () => (status === "RUNNING" ? pause() : start());

  const onRandomJoke = () => {
    randomJoke();
    reset();
  };

  return (
    <Container>
      <Counter />
      <h2>шутки Чака Нориса</h2>
      <Avatar src="./img/chuck-norris.png" />
      <Timer>{time}</Timer>

      <Row>
        <ButtonPrimary marginRight={true} onClick={onRandomJoke}>
          Следующая Шутка
        </ButtonPrimary>
        <ButtonGreen onClick={onToggleTime}>
          {status === "RUNNING" ? "Пауза" : "Запуск"}
        </ButtonGreen>
      </Row>

      <JokeDisplay />
    </Container>
  );
};

export default Main;
