import { useAppDispatch, useAppSelector } from '../../hooks';
import Timer from '../Timer/Timer';
import GameplayStatsCounter from '../GameplayStatsCounter/GameplayStatsCounter';
import { Orientation, TeamColor } from '../../types/constants';
import PlayersKillCounter from '../PlayersKillsCounter/PlayersKillCounter';
import MobsKillCounter from '../MobsKillCounter/MobsKillCounter';
import TeamName from '../TeamName/TeamName';
import './scoreboard.scss';
import GoldGraph from '../GoldGraph/GoldGraph';
import { startMatchDataListening } from './redux/actions';

const Scoreboard = () => {
  const data = useAppSelector(state => state.scoreboard);
  const dispatch = useAppDispatch();

  // Dispatch listenng of match data when component is loaded
  dispatch(startMatchDataListening());

  return (
    <div className="scoreboard">
      <header className="team-names">
        <TeamName
          orientation={Orientation.LEFT}
          teamId={data.blueTeam.id}
          name={data.blueTeam.name}
        ></TeamName>
        <div className="team-names__vs">vs</div>
        <TeamName
          orientation={Orientation.RIGHT}
          teamId={data.redTeam.id}
          name={data.redTeam.name}
        ></TeamName>
      </header>
      <div className="statbar">
        <div className="statbar__top">
          <GameplayStatsCounter
            color={TeamColor.BLUE}
            orientation={Orientation.LEFT}
            {...data.blueTeam.stats}
          ></GameplayStatsCounter>
          <PlayersKillCounter
            blueTeamKills={data.blueTeam.stats.kills}
            redTeamKills={data.redTeam.stats.kills}
          ></PlayersKillCounter>
          <GameplayStatsCounter
            color={TeamColor.RED}
            orientation={Orientation.RIGHT}
            {...data.redTeam.stats}
          ></GameplayStatsCounter>
        </div>
        <div className="statbar__bottom">
          <MobsKillCounter
            color={TeamColor.BLUE}
            orientation={Orientation.LEFT}
            {...data.blueTeam.mobsKill}
          ></MobsKillCounter>
          <Timer
            timeInSeconds={data.timer}
          ></Timer>
          <MobsKillCounter
            color={TeamColor.RED}
            orientation={Orientation.RIGHT}
            {...data.redTeam.mobsKill}
          ></MobsKillCounter>
        </div>
      </div>
      <div>
        <GoldGraph
          blueTeamName={data.blueTeam.name}
          redTeamName={data.redTeam.name}
          blueTeamGold={data.blueTeam.stats.gold}
          redTeamGold={data.redTeam.stats.gold}
          timestamp={data.timer}
        />
      </div>
    </div>
  );
};

export default Scoreboard;
