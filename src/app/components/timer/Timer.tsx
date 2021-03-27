export interface TimerPropsType {
  timeInSeconds: number;
}

const Timer = (props: TimerPropsType) => {
  return (
    <div>
      { props.timeInSeconds }
    </div>
  );
};

export default Timer;
