import { useSelector } from 'react-redux';
import { Orientation } from '../../types/constants';
import GameplayStatsCounter from '../gameplay-stats-counter/GameplayStatsCounter';
import MobsKillCounter from '../mobs-kill-counter/MobsKillCounter';
import PlayersKillCounter from '../players-kills-counter/PlayersKillCounter';
import TeamName from '../team-name/TeamName';
import Timer from '../timer/Timer';

export const ScoreboardComponent = () => {
  return (
    <main>
      <header>
        <TeamName
          orientation={Orientation.LEFT}
        ></TeamName>
        <div></div>
        <TeamName
          orientation={Orientation.RIGHT}
        ></TeamName>
        <div className="statbar">
          <div className="statbar-top">
            <GameplayStatsCounter
              orientation={Orientation.LEFT}
            ></GameplayStatsCounter>
            <PlayersKillCounter></PlayersKillCounter>
            <GameplayStatsCounter
              orientation={Orientation.RIGHT}
            ></GameplayStatsCounter>
          </div>
          <div className="statbar-bottom">
            <MobsKillCounter></MobsKillCounter>
            <Timer></Timer>
            <MobsKillCounter></MobsKillCounter>
          </div>
        </div>
      </header>
    </main>
  );
};
