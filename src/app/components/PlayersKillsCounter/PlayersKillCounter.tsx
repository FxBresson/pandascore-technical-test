import { ReactComponent as KillsLogo } from '../../../assets/icons/kills.svg';

import './players-kills-counter.scss';

export interface PlayersKillCounterPropsType {
  blueTeamKills: number;
  redTeamKills: number
}

const PlayersKillCounter = (props: PlayersKillCounterPropsType) => {
  return (
    <div className="players-kills-counter">
      <div className="players-kills-counter__kill-number">{ props.blueTeamKills }</div>
      <KillsLogo className="players-kills-counter__kill-logo" />
      <div className="players-kills-counter__kill-number">{ props.redTeamKills }</div>
    </div>
  );
};

export default PlayersKillCounter;
