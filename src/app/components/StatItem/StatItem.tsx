import { FunctionComponent, SVGProps } from 'react';
import { Orientation, TeamColor } from '../../types/constants';
import './stat-item.scss';

export interface StatItemPropsType {
  value: number
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
  orientation: Orientation
  color: TeamColor
}

const formatNumberToDisplay = (number: number): string => {
  if (number / 1000 > 1) {
    // Allow to have 1 digit after decimal point. Prevent rounding caused by toFixed(1).
    return (number / 1000).toString().slice(0, -2) + 'K';
  }
  return number.toString();
};

const StatItem = (props: StatItemPropsType) => {
  return (
    <div className={`stat-item stat-item--color-${props.color}`}>
      { props.orientation === Orientation.LEFT && <div>{ formatNumberToDisplay(props.value)}</div> }
      <props.Icon className="stat-item__icon" />
      { props.orientation === Orientation.RIGHT && <div>{ formatNumberToDisplay(props.value)}</div> }
    </div>
  );
};

export default StatItem;
