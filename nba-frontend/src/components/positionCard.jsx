import React from 'react';
import { Link } from 'react-router-dom'

function PositionCard({ position_name, position_img, position_full_name, description }) {
  return (
    <div className="position-card">
        <p>{position_full_name}</p>
        <Link to='/data' state={{ position: position_name, full_name: position_full_name }}>
            <img src={position_img} />
            <p className='position-description'>{description}</p>
        </Link>
    </div>
  );
}

export default PositionCard;