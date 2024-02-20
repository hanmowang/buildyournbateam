import React from 'react';

// Define an array of basketball positions
const basketballPositions = [
  { name: 'Point Guard', description: 'Also known as the playmaker or "1" position. Responsible for leading the team in offense, setting up plays, and often the primary ball-handler.' },
  { name: 'Shooting Guard', description: 'Also known as the off-guard or "2" position. Often the team\'s best shooter and scorer, capable of both perimeter and driving shots.' },
  { name: 'Small Forward', description: 'Also known as the wing or "3" position. Versatile players who can score both inside and outside, often contributing in rebounding and defense as well.' },
  { name: 'Power Forward', description: 'Also known as the "4" position. Typically strong and athletic players who excel in scoring and rebounding near the basket, but can also shoot from mid-range.' },
  { name: 'Center', description: 'Also known as the "5" position. Usually the tallest player on the team, responsible for defending the rim, rebounding, and scoring close to the basket.' },
];

function Position() {
  return (
    <div className="position">
      <h1>Basketball Positions</h1>
      <div className="positions">
        {basketballPositions.map((position, index) => (
          <div key={index} className="position">
            <h2>{position.name}</h2>
            <p>{position.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Position;