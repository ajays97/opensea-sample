import Styled from 'styled-components';
import Card from './index';
import { colors } from '../../constants/colors';

const HomePageCard = Styled(Card)`
    display: flex;
    height: 20rem;
    width: 20rem;
    overflow: hidden;
    flex-direction: column;
    border-radius: 20px;
    & > img {
        height: 15rem;
    }
    & > footer {
        padding: 1rem;
        background-color: ${colors.white};
        display: flex;
        flex-direction: row;
        & > div {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            text-decoration: none;
        }
        & > div:first-child, div:last-child {
            flex: 0 0 2.5rem;
        }
    }
`;

export default HomePageCard;