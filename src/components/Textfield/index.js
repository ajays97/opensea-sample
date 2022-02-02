import React from 'react';
import PropTypes from 'prop-types';

function TextField(props) {
  return <input type={props.type} placeholder={props.placeholder} id={props.id} value={props.value} onChange={props.onChange}/>;
}

TextField.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default TextField;
