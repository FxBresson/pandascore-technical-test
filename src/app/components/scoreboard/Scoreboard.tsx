import { useAppDispatch, useAppSelector } from '../../hooks';
import { startMatchDataListening } from './redux/actions';
// import { Orientation } from '../../types/constants';
// import GameplayStatsCounter from '../gameplay-stats-counter/GameplayStatsCounter';
// import MobsKillCounter from '../mobs-kill-counter/MobsKillCounter';
// import PlayersKillCounter from '../players-kills-counter/PlayersKillCounter';
// import TeamName from '../team-name/TeamName';
import Timer from '../timer/Timer';

const Scoreboard = () => {
  const data = useAppSelector(state => state.scoreboard);
  const dispatch = useAppDispatch();

  const x = true;
  if (x) {
    dispatch(startMatchDataListening());
  }

  console.log(data);

  return (
    <main>
      Scoreboard !
      {/* <header>
        <TeamName
          orientation={Orientation.LEFT}
        ></TeamName>
        <div></div>
        <TeamName
          orientation={Orientation.RIGHT}
        ></TeamName>
      </header> */}

      { !data.finished ? 'ongoing' : 'FINISHED' }

      <div className="statbar">
        {/* <div className="statbar-top">
          <GameplayStatsCounter
            orientation={Orientation.LEFT}
          ></GameplayStatsCounter>
          <PlayersKillCounter></PlayersKillCounter>
          <GameplayStatsCounter
            orientation={Orientation.RIGHT}
          ></GameplayStatsCounter>
        </div> */}
        <div className="statbar-bottom">
          {/* <MobsKillCounter></MobsKillCounter> */}
          <Timer
            timeInSeconds={data.timer}
          ></Timer>
          {/* <MobsKillCounter></MobsKillCounter> */}
        </div>
      </div>
    </main>
  );
};

export default Scoreboard;
