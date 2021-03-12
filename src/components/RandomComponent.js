import React from 'react';
import { CardContainer, CharCard } from '../styled.js';
import HeaderComponent from './Header.js';

function RandomComponent(props) {
  const {charList} = props;
  console.log(charList);
  return (
    <CardContainer>
      {charList.map(e => {
        return (
          <CharCard>
            <p>{e.name}</p>
            <p>{e.status}</p>
            <img src={e.image} style={{height: '200px', margin: '0 auto'}} />
          </CharCard>
        )
      })}
    </CardContainer>
  );
}

export default RandomComponent;
