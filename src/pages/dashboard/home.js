import {Typography} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Barchart from "../../component/barchart";
import Bubble from "../../component/bubble";
import Carddiv from "../../component/card";
import Mixchart from "../../component/mixchart";
import Profilecard from "../../component/profilecard";
import CustomizedTables from "../../component/table";
import AlignItemsList from "./list";


function Home(props){
  
    const [comments,setComments] = useState([]);

    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments`,{
         
        })
        .then(res => setComments(res.data))
        .catch(err => console.error(err));
      
    })

return <>
<div className="">
    <div className="row">
    <div className="col-12"> <Typography variant="h4" component="div" gutterBottom>
       Home
      </Typography></div>
    </div>
    <div className="row">
        <div className="col-12 text-center">
        <Carddiv data={props.data} />
        </div>         
    </div>
    <div className="row mt-4">
    <div className=" col-lg-6 col-12 mb-4">
    
         <Barchart />
    </div>
    <div className="col-lg-6 col-12 mb-4">
      
         <Mixchart />
    </div>
    </div>
        <div className="row">
        
        <h4>Record List</h4>           
           {/* <Comment data={comments}  />            */}
               
    </div>
    <div className="row mt-4">
    <div className="col-12">
    <Bubble />
    </div>          
    </div>

    <div className="row mt-4">
    <div className="col-lg-6 col-12">
    <AlignItemsList  />
    </div> 
    <div className="col-lg-6 col-12">
    <AlignItemsList  />
    </div>          
    </div>
   
</div>
 


</>
}

export default Home;