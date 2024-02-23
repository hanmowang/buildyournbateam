import React, {useState, useEffect, useContext} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom'
import { TeamContext } from '../../App.jsx'

import './data.css'

const columns = [
  { field: 'player_id', headerName: 'ID', width: 20},
  { field: 'player_name', headerName: 'Name', width: 130 },
  { field: 'age', headerName: 'Age', width: 60 },
  { field: 'team', headerName: 'Team', width: 60 },
  { field: 'position', headerName: 'POS', width: 60},
  { field: 'games_played', headerName: 'GP', width: 60},
  { field: 'minutes_played', headerName: 'MIN', width: 60},
  { field: 'points', headerName: 'PTS', width: 60},
  { field: 'total_rebounds', headerName: 'REB', width: 60},
  { field: 'assists', headerName: 'AST', width: 60},
  { field: 'field_goal_percentage', headerName: 'FG%', width: 60},
  { field: 'three_point_percentage', headerName: '3P%', width: 60},
  { field: 'free_throw', headerName: 'FT%', width: 60},
  { field: 'blocks', headerName: 'BLK', width: 60},
  { field: 'steals', headerName: 'STL', width: 60},
  { field: 'personal_fouls', headerName: 'PF', width: 60},
  { field: 'turnovers', headerName: 'TO', width: 60}
];



function Data() {
  const [data, setData] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const {currentTeam, setCurrentTeam} = useContext(TeamContext)
  const location = useLocation()
  const { team, full_name, player_name, position } = location.state
  function checkforDup(items) {
    const set = new Set();
    return items.filter((item) => {
      const isDuplicate = set.has(item.id);
      set.add(item.id);
      return !isDuplicate;
    });
  }
  const handleEvent = (e) => {
    setSelectedPlayer(e)
  };

  const handleClick = (e) => {
    if (selectedPlayer !== null) {
      setCurrentTeam((currentTeam) => {
        return checkforDup([...currentTeam, selectedPlayer])
      })
    }
    
  }
  useEffect( () => {
    console
    async function fetchData() {
      const api_link  = 'http://localhost:8080/api/players/get?'.concat(team ? 'team='.concat(team) : '')
                                                              .concat(player_name ? 'player_name='.concat(player_name) : '')
                                                              .concat(position ? 'position='.concat(position) : '')
      await fetch(api_link)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data)
        });
    }
    fetchData()
  }, [])

  const columnVisibilityModel = {
    // Hide columns status and traderName, the other columns will remain visible
    player_id: false,
  }

  
  return (
    <div className='data'>
      <div className='data-top'>
        <h1 className='data-title'>Player Statistics for {full_name}</h1>
      </div>

      <div className='datagrid'>
        <DataGrid
          rows={data}
          columns={columns}
          columnVisibilityModel={columnVisibilityModel}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 20 },
            },
          }}
          onRowClick={handleEvent}
        />
        <Button variant="contained" onClick={handleClick}>Add Player to Team</Button>
      </div>
      
    </div>
  );
}

export default Data;