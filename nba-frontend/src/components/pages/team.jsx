import React from 'react';

// Define an array of NBA teams with their logos and names
const nbaTeams = [
    { name: 'Atlanta Hawks', logo: 'https://upload.wikimedia.org/wikipedia/en/2/24/Atlanta_Hawks_logo.svg' },
    { name: 'Boston Celtics', logo: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg' },
    { name: 'Brooklyn Nets', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg' },
    { name: 'Charlotte Hornets', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg' },
    { name: 'Chicago Bulls', logo: 'https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg' },
    { name: 'Cleveland Cavaliers', logo: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Cleveland_Cavaliers_logo.svg' },
    { name: 'Dallas Mavericks', logo: 'https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg' },
    { name: 'Denver Nuggets', logo: 'https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg' },
    { name: 'Detroit Pistons', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Pistons_logo17.svg' },
    { name: 'Golden State Warriors', logo: 'https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg' },
    { name: 'Houston Rockets', logo: 'https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg' },
    { name: 'Indiana Pacers', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Indiana_Pacers.svg' },
    { name: 'Los Angeles Clippers', logo: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Los_Angeles_Clippers_logo.svg' },
    { name: 'Los Angeles Lakers', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg' },
    { name: 'Memphis Grizzlies', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Memphis_Grizzlies.svg' },
    { name: 'Miami Heat', logo: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg' },
    { name: 'Milwaukee Bucks', logo: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg' },
    { name: 'Minnesota Timberwolves', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg' },
    { name: 'New Orleans Pelicans', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0d/New_Orleans_Pelicans_logo.svg' },
    { name: 'New York Knicks', logo: 'https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg' },
    { name: 'Oklahoma City Thunder', logo: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg' },
    { name: 'Orlando Magic', logo: 'https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg' },
    { name: 'Philadelphia 76ers', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg' },
    { name: 'Phoenix Suns', logo: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg' },
    { name: 'Portland Trail Blazers', logo: 'https://upload.wikimedia.org/wikipedia/en/2/21/Portland_Trail_Blazers_logo.svg' },
    { name: 'Sacramento Kings', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c7/SacramentoKings.svg' },
    { name: 'San Antonio Spurs', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg' },
    { name: 'Toronto Raptors', logo: 'https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg' },
    { name: 'Utah Jazz', logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/Utah_Jazz_logo_%282016%29.svg' },
    { name: 'Washington Wizards', logo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg' }
];

function Team() {
  return (
    <div className="team">
      <h1>NBA Teams</h1>
      <div className="team-logos">
        {nbaTeams.map((team, index) => (
          <div key={index} className="team-logo">
            <img src={team.logo} alt={team.name} />
            <p>{team.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;