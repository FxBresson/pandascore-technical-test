import { Orientation, TeamColor } from '../../types/constants';
import StatItem from '../StatItem/StatItem';
import { ReactComponent as HeraldLogo } from '../../../assets/icons/herald.svg';
import { ReactComponent as BaronLogo } from '../../../assets/icons/baron.svg';
import { ReactComponent as DrakeLogo } from '../../../assets/icons/drake.svg';
import './mobs-kills-counter.scss';

export interface MobsKillCounterPropsType {
  drakes: number
  herald: number
  nashors: number
  orientation: Orientation
  color: TeamColor
}

const MobsKillCounter = (props: MobsKillCounterPropsType) => {
  const { orientation, color } = props;
  return (
    <ul className={`mobs-kills-counter mobs-kills-counter--orientation-${orientation}`}>
      <li>
        <StatItem
          color={color}
          orientation={orientation}
          value={props.herald}
          Icon={HeraldLogo}
        ></StatItem>
      </li>
      <li>
        <StatItem
          color={color}
          orientation={orientation}
          value={props.nashors}
          Icon={BaronLogo}
        ></StatItem>
      </li>
      <li>
        <StatItem
          color={color}
          orientation={orientation}
          value={props.drakes}
          Icon={DrakeLogo}
        ></StatItem>
      </li>
    </ul>
  );
};

export default MobsKillCounter;
