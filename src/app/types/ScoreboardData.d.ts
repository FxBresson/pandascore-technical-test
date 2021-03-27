export interface ScoreboardTeamData {
  name: string
  id: number
  mobsKill: {
    drakes: number
    herald: number
    nashors: number
  }
  stats: {
    gold: number
    inhibitors: number
    kills: number
    score: number
    towers: number
  }
}

export interface ScoreboardMatchData {
  blueTeam: ScoreboardTeamData
  redTeam: ScoreboardTeamData
  timer: number
  finished: boolean
}
