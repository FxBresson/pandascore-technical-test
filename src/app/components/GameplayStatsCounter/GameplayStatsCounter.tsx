import { Orientation, TeamColor } from '../../types/constants';
import StatItem from '../StatItem/StatItem';
import { ReactComponent as InhibitorsLogo } from '../../../assets/icons/inib.svg';
import { ReactComponent as TowerLogo } from '../../../assets/icons/tower.svg';
import { ReactComponent as GoldLogo } from '../../../assets/icons/gold.svg';
import './gameplay-stats-counter.scss';

export interface GameplayStatsCounterPropsType {
  gold: number
  inhibitors: number
  towers: number
  orientation: Orientation
  color: TeamColor
}

const GameplayStatsCounter = (props: GameplayStatsCounterPropsType) => {
  const { orientation, color } = props;
  return (
    <ul className={`gameplay-stats-counter gameplay-stats-counter--orientation-${orientation}`}>
      <li>
        <StatItem
          color={color}
          orientation={orientation}
          value={props.inhibitors}
          Icon={InhibitorsLogo}
        ></StatItem>
      </li>
      <li>
        <StatItem
          color={color}
          orientation={orientation}
          value={props.towers}
          Icon={TowerLogo}
        ></StatItem>
      </li>
      <li>
        <StatItem
          color={color}
          orientation={orientation}
          value={props.gold}
          Icon={GoldLogo}
        ></StatItem>
      </li>
    </ul>
  );
};

export default GameplayStatsCounter;
