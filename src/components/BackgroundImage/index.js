import React, {memo} from 'react';
import PropTypes from 'prop-types';

index.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

function index(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default memo(index);