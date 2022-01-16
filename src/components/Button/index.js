import React, { memo } from 'react';
import PropTypes from 'prop-types';

index.propTypes = {
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    label: PropTypes.string.isRequired
};

function index(props) {
    return (
        <button onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            {props.label}
        </button>
    );
}

export default memo(index);