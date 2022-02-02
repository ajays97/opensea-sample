import React from 'react';
import Column from './components/Column';
import { createGlobalStyle } from 'styled-components';
import HomePageCard from './components/Card/HomePageCard';
import { data } from './constants/textdata';
import H1 from './components/H1';
import Header from './components/Header';
import { LogoIcon, LogoTextIcon, SearchIcon } from './components/Icons';
import SearchBox from './components/SearchField';

const GlobalStyle = createGlobalStyle`
  body, a, button {
    all: unset;
  },
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <div className="App">
        <Header>
          <div>
            <LogoIcon/>
            <LogoTextIcon/>
          </div>
          <SearchBox placeHolder='Search items, Collections, and accounts'>
            <SearchIcon/>
          </SearchBox>
        </Header>
      </div>
    </React.Fragment>
  );
}

export default App;