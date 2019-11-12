import React from 'react';
import Card from '../card/card.component'

import './card-list.styles.css'

const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.characters.map(character => {
        return <Card key={character.id} character={character} />
      })}
    </div>
  );
};

export default CardList;