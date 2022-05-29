import {Typography} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CommentProfile from "../../component/commentprofile";
const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Post(){

  const [commentsdata,setComments] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL,{
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
       Post
      </Typography></div>           
        <CommentProfile data={commentsdata}  /> 
  </div>      
</div>
</>
}
export default Post;