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
    return Math.trunc(number / 100) / 10 + 'K';
  }
  return number.toString();
};

const StatItem = (props: StatItemPropsType) => {
  return (
    <div className={`stat-item stat-item--color-${props.color} stat-item--orientation-${props.orientation}`}>
      <div>{ formatNumberToDisplay(props.value)}</div>
      <props.Icon className="stat-item__icon" />
    </div>
  );
};

export default StatItem;
