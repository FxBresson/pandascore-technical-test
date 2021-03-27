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
    <div className="mobs-kills-counter">
      <StatItem
        color={color}
        orientation={orientation}
        value={props.herald}
        Icon={HeraldLogo}
      ></StatItem>
      <StatItem
        color={color}
        orientation={orientation}
        value={props.nashors}
        Icon={BaronLogo}
      ></StatItem>
      <StatItem
        color={color}
        orientation={orientation}
        value={props.drakes}
        Icon={DrakeLogo}
      ></StatItem>
    </div>
  );
};

export default MobsKillCounter;
