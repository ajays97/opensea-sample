import Styled from 'styled-components';
import Img from './index';

const Avatar = Styled(Img)`
    border-radius: 50%;
    object-fit: cover;
    height: ${props => props.height? props.height : '40px' };
    width: ${props => props.weight? props.weight : '40px' };
    text-align:center;
    display:block;
    overflow: hidden;
    margin-right: 15px;
`;

export default Avatar;