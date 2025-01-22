import React, { useState, useEffect } from 'react';

const FruitSearch = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Strawberry', 'Blueberry', 'Grapes', 'Peach', 'Plum'];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFruits, setFilteredFruits] = useState(fruits);

  useEffect(() => {
    const result = fruits.filter(fruit =>
      fruit.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFruits(result);
  }, [searchQuery]); 

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h2>Fruit Search</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for a fruit"
      />
      <ul>
        {filteredFruits.length === 0 ? (
          <p>No fruits found</p>
        ) : (
          filteredFruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FruitSearch;
