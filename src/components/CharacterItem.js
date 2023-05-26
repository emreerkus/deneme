import React from 'react'

function CharacterItem({image, name, power}) {
  return (
    <div className='character-item'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{power}</p>
    </div>
  );
}

export default CharacterItem