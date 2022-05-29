import {Typography} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CommentProfile from "../../component/commentprofile";

function Comments(){

  const [commentsdata,setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`,{
        params: {
          _limit: 12
         }       
      })
      .then(res => setComments(res.data))
      .catch(err => console.error(err));    
  })
return <>
<div className="">
    <div className="row">
      <div className="col-12"> <Typography variant="h4" component="div" gutterBottom>
       Comments
      </Typography></div>           
        <CommentProfile data={commentsdata}  /> 
  </div>      
</div>
</>
}

export default Comments;