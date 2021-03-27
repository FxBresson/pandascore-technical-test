import { ReactComponent as KillsLogo } from '../../../assets/icons/kills.svg';

import './players-kills-counter.scss';

export interface PlayersKillCounterPropsType {
  teamAKills: number;
  teamBKills: number
}

const PlayersKillCounter = (props: PlayersKillCounterPropsType) => {
  return (
    <div className="players-kills-counter">
      <div className="players-kills-counter__kill-number">{ props.teamAKills }</div>
      <KillsLogo className="players-kills-counter__kill-logo" />
      <div className="players-kills-counter__kill-number">{ props.teamBKills }</div>
    </div>
  );
};

export default PlayersKillCounter;
