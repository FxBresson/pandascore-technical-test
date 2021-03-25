import { Orientation, TeamColor } from '../../types/constants';

export interface MobsKillCounterPropsType {
  drakes: number
  herald: number
  nashors: number
  orientation: Orientation
  color: TeamColor
}

const MobsKillCounter = (props: MobsKillCounterPropsType) => {
  return (
    <div>

    </div>
  );
};

export default MobsKillCounter;
