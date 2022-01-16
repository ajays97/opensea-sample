import React from 'react';
import Column from './components/Column';
import { createGlobalStyle } from 'styled-components';
import HomePageCard from './components/Card/HomePageCard';
import { data } from './constants/textdata';

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
        <Column columns={2} backgroundImage={data.image}>
          <HomePageCard 
            image={data.image} 
            alt='image' 
            avatar={data.avatarImage} 
            avatarAlt='avatarAlt'
            tagNumber='#7542'
            handle='Marina_Light'
            link='https://www.google.com/'
            infoText='Get Featured on the Homepage'
            />
        </Column>
      </div>
    </React.Fragment>
  );
}

export default App;
