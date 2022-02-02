import React, { memo } from 'react'
import Styled from 'styled-components';
import PropTypes from 'prop-types'
import { colors } from '../../constants/colors';

function Handle(props) {
    return (
        <p className={props.className}>
            {props.children}
        </p>
    )
}

Handle.propTypes = {
    children: PropTypes.string.isRequired
}

const StyledHandle = Styled(Handle)`
    margin-top: 0;
    color: ${colors.primaryBlue};
    cursor: pointer;
    &:hover {
        color: ${colors.primaryDarkBlue};
    }
`;

export default memo(StyledHandle);

