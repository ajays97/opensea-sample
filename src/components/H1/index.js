import React, { memo } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import font from '../../constants/font';

const H1 = function(props) {
    return <h1>
        {props.children}
    </h1>
}

H1.propTypes = {
    children: PropTypes.string.isRequired
}

const StyledHeading = Styled(H1)`
    font-size: ${font.fontSize},
    font-family: ${font.fontFamily},
    line-height: ${font.lineHeight},
    text-transform: Capitalize
`;

export default memo(StyledHeading);

