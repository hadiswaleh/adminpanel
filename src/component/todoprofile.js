import * as React from 'react';
 import ListItemAvatar from '@mui/material/ListItemAvatar';
 import Avatar from '../assets/profile.png';
import { Typography } from '@mui/material';

function TodoProfile(props) {
	return (
		<>
         { props.data.map((tododata) => (
         <div className="d-flex col-lg-3 col-12 mb-4 ">  
        <div className="card-container">
			<header>
            <img src={Avatar} alt={props.name} />
			</header>
			<h1 className="bold-text">
				{tododata.id}
			</h1>
			<h2 className="normal-text">{tododata.title}</h2>
			<div className="social-container">
            <Typography variant="body2" color="text.secondary">
          {tododata.completed}
          </Typography>
			</div>
		</div>
        </div>
         ))}
        </>
	);
}

export default TodoProfile;