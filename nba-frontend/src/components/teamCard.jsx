import React from 'react';
import { Link } from 'react-router-dom'

function TeamCard({ team_name, team_img, team_full_name }) {
  return (
    <div className="team-card">
        <Link to='/data' state={{ team: team_name, full_name: team_full_name }}>
            <img src={team_img} />
        </Link>
    </div>
  );
}

export default TeamCard;