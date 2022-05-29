import {Typography} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import TodoProfile from "../../component/todoprofile";
const baseURL = "https://jsonplaceholder.typicode.com/albums";

function Album(){
    const[albumdata,setAlbum] = useState([]);  
    useEffect(() => {
    axios.get(baseURL).then((res) => setAlbum(res.data)).catch((err) => console.error(err) )     
    })

return <>
<div className="">
    <div className="row">
      <div className="col-12"> <Typography variant="h4" component="div" gutterBottom>
       Album
      </Typography></div>             
         <TodoProfile data={albumdata}/>
                
    </div>
</div>
 </>
}

export default Album;