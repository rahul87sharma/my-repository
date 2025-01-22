import React, { useState } from 'react';

const travelData = [
  { place: "Amritsar", duration: "2 days", expenses: "INR 5000" },
  { place: "Chandigarh", duration: "1 day", expenses: "INR 3000" },
  { place: "Jalandhar", duration: "1 day", expenses: "INR 2500" },
  { place: "Ludhiana", duration: "1 day", expenses: "INR 2000" },
  { place: "Patiala", duration: "1 day", expenses: "INR 1500" },
];

function TravelSuggestions() {
  const [visitedPlaces, setVisitedPlaces] = useState([]);

  const addVisitedPlace = (place) => {
    if (!visitedPlaces.includes(place)) {
      setVisitedPlaces([...visitedPlaces, place]);
    }
  };

  return (
    <div>
      <h1>Travel Suggestions in Punjab</h1>
      <ul>
        {travelData.map((data, index) => (
          <li key={index}>
            {data.place} - {data.duration} - {data.expenses}
            <button onClick={() => addVisitedPlace(data.place)}>Mark as Visited</button>
          </li>
        ))}
      </ul>
      <h2>Previously Visited Places</h2>
      <ul>
        {visitedPlaces.length > 0 ? (
          visitedPlaces.map((place, index) => <li key={index}>{place}</li>)
        ) : (
          <li>No places visited yet</li>
        )}
      </ul>
    </div>
  );
}

export default TravelSuggestions;
