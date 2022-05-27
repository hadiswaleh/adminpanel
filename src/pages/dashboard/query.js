import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Comment from "../../component/comment";

function Query(){
return <>
<div className="">
    <div className="row">
      <div className="col-12"> <Typography variant="h4" component="div" gutterBottom>
       Query Support
      </Typography></div>
        <div className="col-lg-3 col-12 mb-4">       
         <Comment />
        </div> 
        <div className="col-lg-3 col-12 mb-4">  
        <Comment />
        </div> 
        <div className="col-lg-3 col-12 mb-4">  
        <Comment />
        </div> 
        <div className="col-lg-3 col-12 mb-4">  
        <Comment />
        </div> 
        <div className="col-lg-3 col-12 mb-4">  
        <Comment />
        </div> 
        <div className="col-lg-3 col-12 mb-4">  
        <Comment />
        </div> 
          
    </div>
   
   
</div>
 


</>
}

export default Query;