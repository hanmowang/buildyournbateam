import React from 'react';
import { Link } from 'react-router-dom'

function PlayerCard({ player_name, player_team }) {
  return (
    <div className="player-card">
        <Link to='/data' state={{ player_name: player_name, full_name: player_name }}>
            <p className='player-info'>{player_name} <br></br>({player_team})</p>
        </Link>
    </div>
  );
}

export default PlayerCard;