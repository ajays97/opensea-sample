import React, { useState } from 'react';
import AppConstants from '../../constants/AppConstants';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import Textfield from '../Textfield';
import font from '../../constants/font';

function SearchBox(props) {

  const [ value, setValue ] = useState('');

  const onChangeHandle = (e) => {
    setValue(e.target.value);
  }

  return <div className={props.className}>
    {props.children}
    <Textfield type='text' placeholder={props.placeHolder} id='search box' value={value} onChange={onChangeHandle}/>
  </div>;
}

SearchBox.propTypes = {
    placeHolder: PropTypes.string.isRequired,
    children: PropTypes.node,
    iconAligment: PropTypes.string,
    searchFunction: PropTypes.func.isRequired
};

const StyledSearchBox = Styled(SearchBox)`
    width: 50%;
    border-color: ${AppConstants.borderColor};
    border-style: solid;
    border-radius: 10px;
    border-width: 1px;
    box-sizing: border-box;
    padding: 0.75rem;
    display: flex;
    flex-direction: row;
    & input, input:active, input:hover, input:focus-visible {
      border: none;
      width: 100%;
      height: 100%;
      outline: none;
      font-size: ${font.searchFontSize};
      font-family: ${font.fontFamily};
      font-weight: ${font.fontWeight};
      line-height: ${font.lineHeight};
      color: ${AppConstants.primaryFontColor}
    }
`;

export default StyledSearchBox;
