import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import App from "../../component/app";
import Barchart from "../../component/barchart";
import Recipecard from "../../component/recipecard";

function Analytics(){
return <>
<div className="">
    <div className="row">
    <div className="col-12"> <Typography variant="h4" component="div" gutterBottom>
       Analytics
      </Typography></div>
        <div className="col-md-4 col-12 mb-4">
      
         <App />
        </div> 
        <div className="col-md-4 col-12 mb-4">
            
         <Barchart />
        </div>
        <div className="col-md-4 col-12 mb-4">
         <Barchart />
        </div>   

         <div className="col-md-4 col-12 mb-4">
      
         <App />
        </div> 
        <div className="col-md-4 col-12 mb-4">
            
         <Barchart />
        </div>
        <div className="col-md-4 col-12 mb-4">
         <Barchart />
        </div>          
    </div>
   
   
</div>
 


</>
}

export default Analytics;