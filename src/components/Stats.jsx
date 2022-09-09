import ProgressBar from "../components/ProgressBar";
import PropTypes from 'prop-types';

export default function Stats(props) {
    const {destiny, potatoes, orcs} = props;
    return (
      <div>
        <ProgressBar className="destinyProgress" progress={destiny * 10} label="Destiny"/>
        <ProgressBar className="potatoProgress" progress={potatoes * 10} label="Potatoes"/>
        <ProgressBar className="orcProgress" progress={orcs * 10} label="Orcs"/>
      </div>
    );
  }

  Stats.propTypes = {
    destiny: PropTypes.number,
    potatoes: PropTypes.number,
    orcs: PropTypes.number
  }