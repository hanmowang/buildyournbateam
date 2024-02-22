import React, {useState} from 'react';

// Define an array of basketball positions
import pg_logo from '../../assets/positions_image/point_guard.webp'
import sg_logo from '../../assets/positions_image/shooting_guard.avif'
import sf_logo from '../../assets/positions_image/small_forward.jpg'
import pf_logo from '../../assets/positions_image/power_forward.jpg'
import c_logo from '../../assets/positions_image/center.jpg'

import TextField from '@mui/material/TextField';
import './position.css'
import PositionCard from '../positionCard.jsx';
const positions = [
  { name: 'PG', full_name: 'Point Guard', img: pg_logo, description: "The point guard (PG), also known as the one, is typically the team's shortest player and best ball handler and passer. They usually are very fast and are good at driving and short-range shots. "},
  { name: 'SG', full_name: 'Shooting Guard', img: sg_logo, description: "The shooting guard (SG)— also known as the two or the off guard— is, along with the small forward, often referred to as a wing because of its use in common positioning tactics. As the name suggests, most shooting guards are prolific from three-point range and long mid-range."},
  { name: 'SF', full_name: 'Small Forward', img: sf_logo, description: "The small forward (SF), also known as the three, is considered to be the most versatile of the main five basketball positions. Versatility is key for small forwards due to the nature of their role, which resembles that of a shooting guard more often than that of a power forward."},
  { name: 'PF', full_name: 'Power Forward', img: pf_logo, description: "The power forward (PF), also known as the four, often plays a role similar to that of the center, down in the \"post\" or \"low blocks\". The power forward is often the team's most powerful and dependable scorer, being able to score close to the basket while also being able to shoot mid-range jump shots from 10 to 15 feet from the basket."},
  { name: 'C', full_name: 'Center', img: c_logo, description: "The center (C)—also known as the five, the pivot, or the big man—typically plays near the baseline or close to the basket (the \"low post\"). They are usually the tallest players on the floor. "}
]
function Position() {
  const [searchWord, setSearchWord] = useState('')
  const handleInput = (e) => {
    setSearchWord(e.target.value)
  }
  return (
    <div className="position">
      <div className='position-top'>
        <h1 className='position-title'>Positions</h1>
        <TextField className="position-search" label="Search" variant="filled" onInput={handleInput}/>
      </div>
      <div className="position-container">
        {positions.map((position, key) => {
          if (position.full_name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()) || searchWord === '') {
            return (
              <PositionCard key={key} position_name={position.name} position_img={position.img} position_full_name={position.full_name} description={position.description}/>
            )
          }
        }
        )}
      </div>
    </div>
  );
}

export default Position;