import * as React from 'react';
 import Avatar from '../assets/profile.png';
import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
function PhotoProfile(props) {
	return (
		<>         

{ props.data.map((photodata) => (
    <div className='d-flex col-lg-3 col-6 mb-3'>
    <div className='card'>
    <div className='card-body text-center'>
    <img src={photodata.url} alt={photodata.title} className="img-fluid rounded shadow-lg mb-3" />
    <p>{photodata.title}</p>
    </div>
    </div>
    </div> 
    ))}       
        </>
	);
}

export default PhotoProfile;
