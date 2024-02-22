import React, {useState} from 'react';
import sixer_logo from '../../assets/teams_image/76ers.png'
import bucks_logo from '../../assets/teams_image/bucks.png'
import bulls_logo from '../../assets/teams_image/bulls.png'
import cavs_logo from '../../assets/teams_image/cavs.png'
import celtics_logo from '../../assets/teams_image/celtics.png'
import clippers_logo from '../../assets/teams_image/clippers.png'
import grizzlies_logo from '../../assets/teams_image/grizzlies.png'
import hawks_logo from '../../assets/teams_image/hawks.png'
import heat_logo from '../../assets/teams_image/heat.png'
import hornets_logo from '../../assets/teams_image/hornets.png'
import jazz_logo from '../../assets/teams_image/jazz.png'
import kings_logo from '../../assets/teams_image/kings.png'
import knicks_logo from '../../assets/teams_image/knicks.png'
import lakers_logo from '../../assets/teams_image/lakers.png'
import magic_logo from '../../assets/teams_image/magic.png'
import mavericks_logo from '../../assets/teams_image/mavs.png'
import nets_logo from '../../assets/teams_image/nets.png'
import nuggets_logo from '../../assets/teams_image/nuggets.png'
import pacers_logo from '../../assets/teams_image/pacers.png'
import pelicans_logo from '../../assets/teams_image/pelicans.png'
import pistons_logo from '../../assets/teams_image/pistons.png'
import raptors_logo from '../../assets/teams_image/raptors.png'
import rockets_logo from '../../assets/teams_image/rockets.png'
import spurs_logo from '../../assets/teams_image/spurs.png'
import suns_logo from '../../assets/teams_image/suns.png'
import thunder_logo from '../../assets/teams_image/thunder.png'
import timberwolves_logo from '../../assets/teams_image/wolves.png'
import warriors_logo from '../../assets/teams_image/warriors.png'
import wizards_logo from '../../assets/teams_image/wizards.png'
import TextField from '@mui/material/TextField';
import './team.css'
import TeamCard from '../teamCard';
const teams = [
  { name: 'DEN', full_name: 'Denver Nuggets', img: nuggets_logo },
  { name: 'IND', full_name: 'Indiana Pacers', img: pacers_logo },
  { name: 'HOU', full_name: 'Houston Rockets', img: rockets_logo },
  { name: 'CHI', full_name: 'Chicago Bulls', img: bulls_logo },
  { name: 'PHI', full_name: 'Philadelphia 76ers', img: sixer_logo },
  { name: 'MIL', full_name: 'Milwaukee Bucks', img: bucks_logo },
  { name: 'CLE', full_name: 'Cleveland Cavaliers', img: cavs_logo },
  { name: 'BOS', full_name: 'Boston Celtics', img: celtics_logo },
  { name: 'LAC', full_name: 'LA Clippers', img: clippers_logo },
  { name: 'MEM', full_name: 'Memphis Grizzlies', img: grizzlies_logo },
  { name: 'ATL', full_name: 'Atlanta Hawks', img: hawks_logo },
  { name: 'MIA', full_name: 'Miami Heat', img: heat_logo },
  { name: 'CHA', full_name: 'Charlotte Hornets', img: hornets_logo },
  { name: 'UTA', full_name: 'Utah Jazz', img: jazz_logo },
  { name: 'SAC', full_name: 'Sacramento Kings', img: kings_logo },
  { name: 'NYK', full_name: 'New York Knicks', img: knicks_logo },
  { name: 'LAL', full_name: 'Los Angeles Lakers', img: lakers_logo },
  { name: 'ORL', full_name: 'Orlando Magic', img: magic_logo },
  { name: 'DAL', full_name: 'Dallas Mavericks', img: mavericks_logo },
  { name: 'BKN', full_name: 'Brooklyn Nets', img: nets_logo },
  { name: 'NOP', full_name: 'New Orleans Pelicans', img: pelicans_logo },
  { name: 'DET', full_name: 'Detroit Pistons', img: pistons_logo },
  { name: 'TOR', full_name: 'Toronto Raptors', img: raptors_logo },
  { name: 'SAS', full_name: 'San Antonio Spurs', img: spurs_logo },
  { name: 'PHX', full_name: 'Phoenix Suns', img: suns_logo },
  { name: 'OKC', full_name: 'Oklahoma City Thunder', img: thunder_logo },
  { name: 'MIN', full_name: 'Minnesota Timberwolves', img: timberwolves_logo },
  { name: 'GSW', full_name: 'Golden State Warriors', img: warriors_logo },
  { name: 'WAS', full_name: 'Washington Wizards', img: wizards_logo }
];
function Team() {
  const [searchWord, setSearchWord] = useState('')
  const handleInput = (e) => {
    setSearchWord(e.target.value)
  }
  return (
    <div className="team">
      <div className='team-top'>
        <h1 className='team-title'>NBA Teams</h1>
        <TextField className="team-search" label="Search" variant="filled" onInput={handleInput}/>
      </div>
      <div className="team-container">
        {teams.map((team, key) => {
          if (team.full_name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()) || searchWord === '') {
            return (
              <TeamCard key={key} team_name={team.name} team_img={team.img} team_full_name={team.full_name}/>
            )
          }
        }
        )}
      </div>
    </div>
  );
}

export default Team;