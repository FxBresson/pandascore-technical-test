import { Orientation, TeamColor } from '../../types/constants';

export interface GameplayStatsCounterPropsType {
  gold: number
  inhibitors: number
  towers: number
  orientation: Orientation
  color: TeamColor
}