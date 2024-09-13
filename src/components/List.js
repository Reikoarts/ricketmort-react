import React, { useState, useEffect } from 'react';
import Character from './Character';

function List() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await response.json();
      console.log('results', results);
      setCharacters(results);
      setLoading(false);
    }

    fetchData();
  }, [characters.length]);

  return (
    <div>
      <h2>Characters</h2>
      <div className='row'>
        {loading ? (
          <div>Loading....</div>
        ) : (
        characters.map((data, index) => (
          <Character
            key={data.id + index}
            name={data.name}
            origin={data.origin}
            image={data.image}
          />
        ))
        )}
      </div>
    </div>
  );
}

export default List;
