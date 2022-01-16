import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../../constants/device';
import { colors } from '../../constants/colors';

function index(props) {
    return (
        <div className={props.className}>
            <div></div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

index.propTypes = {
    columns: PropTypes.number.isRequired,
    backgroundImage: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

const Column = styled(index)`
    position: relative;
    width: 100%;
    height: 48.75rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    max-width:100%;
    & > div:first-child {
        background-image: url(${props => props.backgroundImage ? props.backgroundImage : ''});
        background-size: cover;
        background-position: center center;
        background-color: ${colors.white};
        opacity: 0.3;
        filter: blur(8px);
        position: absolute;
        height: inherit;
        width: inherit;
        mask-image: linear-gradient(${colors.white}, ${colors.transparent});
    }
    & > div:not(:first-child) {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media ${device.laptop} {
            flex-direction: row;
            justify-content: space-around;
        }

        @media ${device.desktopL} {
            flex-direction: row;
            justify-content: center;
        }
    }
`;

export default memo(Column);

