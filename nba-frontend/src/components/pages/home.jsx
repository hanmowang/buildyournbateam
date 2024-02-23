import React, {useContext} from 'react';

import PlayerCard from '../playerCard.jsx'

import { TeamContext } from '../../App.jsx'
import './home.css'
function Home() {
  const {currentTeam, SetCurrentTeam} = useContext(TeamContext)
  console.log(currentTeam)
  return (
    <div className="home">
        <div className='home-top'>
            <h1>Welcome to Build Your NBA Team</h1>
        </div>
        <div className='home-container'>
            {currentTeam.map((player, key) => {
                return (
                    <PlayerCard key={key} player_name={player.row.player_name} player_team={player.row.team}/>
                )
            })}
        </div>

    </div>
  );
}

export default Home;