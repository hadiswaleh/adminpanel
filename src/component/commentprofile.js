import * as React from 'react';
 import ListItemAvatar from '@mui/material/ListItemAvatar';
 import Avatar from '../assets/profile.png';
import { Typography } from '@mui/material';

function CommentProfile(props) {
	return (
		<>
         { props.data.map((commentdata) => (	
		
         <div className="d-flex col-lg-3 col-12 mb-4 ">  
        <div className="card-container">
			<header>
            <img src={Avatar} alt={props.name} />
			</header>
			{commentdata.name &&
			<h1 className="bold-text">				
				{commentdata.name}	 			
			</h1>
             }

           {commentdata.id &&
			<h1 className="bold-text">
				{commentdata.id}
			</h1>
            } 

           {commentdata.title &&
			<h1 className="bold-text">
				{commentdata.title}
			</h1>
            } 

            {commentdata.email &&
			<h2 className="normal-text">{commentdata.email}</h2>
             }

           {commentdata.body &&
			<div className="social-container">
            <Typography variant="body2" color="text.secondary">
          {commentdata.body}
          </Typography>
			</div>
           }
		</div>
        </div>
         ))}
        </>
	);
}

export default CommentProfile;



		