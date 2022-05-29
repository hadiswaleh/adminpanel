import {Typography} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import UserData from "../../component/userdata";

function Users(){

  const [userdata,setUserdata] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`,{
        params: {
          _limit: 8
         }       
      })
      .then(res => setUserdata(res.data))
      .catch(err => console.error(err));    
  })
return <>
<div className="">
    <div className="row">
      <div className="col-12"> <Typography variant="h4" component="div" gutterBottom>
       User Data
      </Typography></div>           
        <UserData data={userdata} />
  </div>      
</div>
</>
}

export default Users;