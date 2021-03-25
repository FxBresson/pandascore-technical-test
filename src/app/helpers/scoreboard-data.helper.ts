import { ScoreboardMatchData, ScoreboardTeamData } from '../types/ScoreboardData';
import { LolFrame, LolTeamStats } from '../types/WebsocketLolFrame';

export const toScoreboardData = (frameData: LolFrame): ScoreboardMatchData => {
  const {
    blue,
    red,
    current_timestamp
  } = frameData;

  return {
    blueTeam: toScoreboardTeamData(blue),
    redTeam: toScoreboardTeamData(red),
    timer: current_timestamp
  };
};

export const toScoreboardTeamData = (frameTeamData: LolTeamStats): ScoreboardTeamData => {
  const {
    id,
    name,
    drakes,
    herald,
    nashors,
    gold,
    inhibitors,
    kills,
    score,
    towers
  } = frameTeamData;

  return {
    id,
    name,
    mobsKill: {
      drakes,
      herald,
      nashors
    },
    stats: {
      gold,
      inhibitors,
      kills,
      score,
      towers
    }
  };
};
