import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip
} from 'recharts';
import { useEffect, useState } from 'react';
import { formatTime } from '../../helpers/time.helper';
import './gold-graph.scss';

export interface GoldGraphPropsType {
  redTeamGold: number
  redTeamName: string
  blueTeamGold: number
  blueTeamName: string
  timestamp: number
}

interface GoldGraphData {
  redTeamGold: number
  blueTeamGold: number
  timestamp: number
}

const GoldGraph = (props: GoldGraphPropsType) => {
  const translations: Record<string, string> = {
    redTeamGold: props.redTeamName,
    blueTeamGold: props.blueTeamName
  };

  const [graphData, setGraphData] = useState<GoldGraphData[]>([]);

  useEffect(() => {
    if (props.timestamp > 0) {
      const dataToAdd: GoldGraphData = {
        blueTeamGold: props.blueTeamGold,
        redTeamGold: props.redTeamGold,
        timestamp: props.timestamp
      };
      setGraphData([...graphData, dataToAdd]);
    }
  }, [props]);

  return (
    <div className="gold-graph">
      <h3 className="gold-graph__title">Gold</h3>
      <LineChart
        width={540}
        height={320}
        data={graphData}
      >
        <XAxis type={'number'} tickCount={5} tick={{ fontSize: 12, fontWeight: 'bold' }} minTickGap={10} domain={['dataMin', 'dataMax']} tickFormatter={(tick: number) => formatTime(tick)} dataKey="timestamp" />
        <YAxis type={'number'} tickCount={5} tick={{ fontSize: 12, fontWeight: 'bold' }} minTickGap={10} domain={['dataMin - 500', (dataMax: number) => Math.max(5000, (dataMax + 1000))]} />
        <Tooltip
          formatter={(value: string, label: string) => [value, translations[label]]}
        />
        <Line type="linear" dataKey="redTeamGold" stroke="#ed5565" strokeWidth={2} dot={false} />
        <Line type="linear" dataKey="blueTeamGold" stroke="#5580ed" strokeWidth={2} dot={false} />
      </LineChart>
    </div>
  );
};

export default GoldGraph;
