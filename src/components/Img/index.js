import React, { memo } from 'react';
import PropTypes from 'prop-types';

Img.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

function Img(props) {
    return (
        <img className={props.className} src={props.src} alt={props.alt}/>
    );
}

export default memo(Img);