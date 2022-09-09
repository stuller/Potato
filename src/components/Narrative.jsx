import * as React from 'react'
import PropTypes from 'prop-types';

export default function Narrative(props) {
    const {text} = props;
    return (
        <div className="narrative">
            {text.split('\n').map((str,i) => <p key={i}>{str}</p>)}
        </div>
    )
}

Narrative.propTypes = {
    text: PropTypes.string
  };
  