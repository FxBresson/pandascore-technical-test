import { Orientation } from '../../types/constants';

export interface TeamNamePropsType {
  name: string;
  logo?: string;
  orientation: Orientation
}

const TeamName = (props: TeamNamePropsType) => {
  return (
    <div>
      { props.name }
    </div>
  );
};

export default TeamName;
