import { useAppDispatch, useAppSelector } from '../../hooks';
import { startMatchDataListening } from './redux/actions';
import Timer from '../Timer/Timer';
import GameplayStatsCounter from '../GameplayStatsCounter/GameplayStatsCounter';
import { Orientation, TeamColor } from '../../types/constants';
import PlayersKillCounter from '../PlayersKillsCounter/PlayersKillCounter';
import MobsKillCounter from '../MobsKillCounter/MobsKillCounter';
import TeamName from '../TeamName/TeamName';
import './scoreboard.scss';

const Scoreboard = () => {
  const data = useAppSelector(state => state.scoreboard);
  const dispatch = useAppDispatch();

  const x = true;
  if (x) {
    dispatch(startMatchDataListening());
  }

  console.log(data);

  return (
    <div className="scoreboard">
      <header>
        <TeamName
          orientation={Orientation.LEFT}
          name={data.blueTeam.name}
        ></TeamName>
        <div></div>
        <TeamName
          orientation={Orientation.RIGHT}
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
            teamAKills={data.blueTeam.stats.kills}
            teamBKills={data.redTeam.stats.kills}
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
    </div>
  );
};

export default Scoreboard;
