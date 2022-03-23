import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTimer } from "use-timer";
import { fetchJoke, fetchJokeBYID } from "api";
import { getFavorieID } from "helpers/utils";
const favoriteID = getFavorieID();

export const useTimerJoke = () => {
  const dispatch = useDispatch();

  const { time, start, pause, reset, status } = useTimer({
    initialTime: 3,
    endTime: 0,
    timerType: "DECREMENTAL",
    onTimeOver: () => {
      start();
      dispatch(fetchJoke());
    }
  });

  const randomJoke = () => dispatch(fetchJoke());

  useEffect(() => {
    if (favoriteID) dispatch(fetchJokeBYID(favoriteID));
    else dispatch(fetchJoke());
  }, [dispatch]);

  return {
    time,
    start,
    pause,
    reset,
    status,
    randomJoke
  };
};
