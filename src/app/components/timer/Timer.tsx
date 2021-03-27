import './timer.scss';

export interface TimerPropsType {
  timeInSeconds: number;
}

const formatTime = (time: number): string => {
  const min = Math.floor(time / 60).toLocaleString('fr-FR', { minimumIntegerDigits: 2 });
  const seconds = (time % 60).toLocaleString('fr-FR', { minimumIntegerDigits: 2 });
  return `${min}:${seconds}`;
};

const Timer = (props: TimerPropsType) => {
  return (
    <div className="timer">
      { formatTime(props.timeInSeconds) }
    </div>
  );
};

export default Timer;
