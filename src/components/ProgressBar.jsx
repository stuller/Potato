import * as React from 'react'
import PropTypes from 'prop-types';

export default function ProgressBar(props) {
    const {className, progress, label} = props;
    return (
        <div className="progressBar">
            <h3>{label}</h3>
            <div className="barContainer">
                <div className={className} style={{width: progress + '%'}}></div>
            </div>
        </div>
    )
}

ProgressBar.propTypes = {
    className: PropTypes.string,
    progress: PropTypes.number,
    label: PropTypes.string
  };
  