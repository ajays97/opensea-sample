import React from 'react';
import PropTypes from 'prop-types';
import Img from '../Img';
import Avatar from '../Img/Avatar';

Card.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    avatarAlt: PropTypes.string.isRequired,
    tagNumber: PropTypes.string.isRequired,
    handle: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    infoText: PropTypes.string.isRequired
};

function Card(props) {
    return (
        <a className={props.className} href={props.link}>
            <Img alt={props.alt} src={props.image}/>
            <footer>
                <div>
                    <Avatar src={props.avatar} alt={props.avatarAlt} />
                </div>
                <div>
                    <span>
                        {props.tagNumber}
                    </span>
                    <span>
                        {props.handle}
                    </span>
                </div>
                <div>
                    
                </div>
            </footer>
        </a>
    );
}

export default Card;