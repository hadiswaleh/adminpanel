import {Typography} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import PhotoProfile from "../../component/photoprofile";

function Photo(){

  const [photodata,setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`,{
        params: {
          _limit: 12
         }       
      })
      .then(res => setPhoto(res.data))
      .catch(err => console.error(err));    
  })
return <>
<div className="">
    <div className="row">
      <div className="col-12"> <Typography variant="h4" component="div" gutterBottom>
       Photo Album
      </Typography></div>           
        <PhotoProfile data={photodata} />
  </div>      
</div>
</>
}

export default Photo;