import { formatTime } from '../../helpers/time.helper';
import './timer.scss';

export interface TimerPropsType {
  timeInSeconds: number;
}

const Timer = (props: TimerPropsType) => {
  return (
    <div className="timer">
      { formatTime(props.timeInSeconds) }
    </div>
  );
};

export default Timer;
