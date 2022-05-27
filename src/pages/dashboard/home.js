import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Barchart from "../../component/barchart";
import Bubble from "../../component/bubble";
import Carddiv from "../../component/card";
import Mixchart from "../../component/mixchart";
import Profilecard from "../../component/profilecard";
import CustomizedTables from "../../component/table";
import AlignItemsList from "./list";


function Home(props){
  
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
    <div className="col-md-6 col-12 mb-4">
    
         <Barchart />
    </div>
    <div className="col-md-6 col-12 mb-4">
      
         <Mixchart />
    </div>
    <div className="clearfix"></div>
        <div className="col-12">
        <h4>Record List</h4>
           <div className="table-responsive">
           <CustomizedTables />
           </div>
        </div>
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