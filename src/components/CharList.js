import React from 'react';
import { CardContainer, CharCard } from '../styled.js';

function CharList(props) {
  const { charList, search } = props;

  return (
    <>
    <h1 className='text-center'>Results for {search}</h1>
    <CardContainer>
      {charList.map((e, i) => {
        if(e.name.toLowerCase().includes(search.toLowerCase())) return (
          <CharCard key={i}>
            <p>{e.name}</p>
            <p>{e.status}</p>
            <img src={e.image}
            style={ { height: '200px', margin: '0 auto' } }
            alt="character potrait" />
          </CharCard>
        );
      })}
    </CardContainer>
    </>
  );
}

export default CharList;
