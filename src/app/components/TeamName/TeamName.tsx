import { Orientation } from '../../types/constants';
import './team-name.scss';

export interface TeamNamePropsType {
  name: string;
  teamId: number;
  orientation: Orientation
}

// `./assets/team_logo/${props.teamId}.png`

const getTeamLogo = (teamId: number): string => teamId ? require.context('../../../assets/team_logo', true, /.png$/)(`./${teamId}.png`).default : '';

const TeamName = (props: TeamNamePropsType) => {
  return (
    <div className={`team-name team-name--orientation-${props.orientation}`}>
      <div className="team-name__name">{ props.name }</div>
      <div className="team-name__logo-container">
        <img className="team-name__logo" src={getTeamLogo(props.teamId)}></img>
      </div>
    </div>
  );
};

export default TeamName;
