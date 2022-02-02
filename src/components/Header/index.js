import React, { memo } from 'react';
import Styled from 'styled-components';
import AppConstants from '../../constants/AppConstants';
import ShadowConstants from '../../constants/ShadowConstants';
import PropTypes from 'prop-types';

function Header(props) {
  return <div className={props.className}>
      {props.children}
  </div>;
}

Header.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

const StyledHeader = Styled(Header)`
    width: 100%;
    height: ${AppConstants.headerHeight};
    box-shadow: ${ShadowConstants.boxShadow};
    padding: ${AppConstants.headerPadding};
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default memo(StyledHeader);
