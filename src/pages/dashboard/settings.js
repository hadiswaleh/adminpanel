import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import ControlledAccordions from "../../component/accordian";
import Carddiv from "../../component/card";
import CustomizedTables from "../../component/table";
import AlignItemsList from "./list";


function Settings(props){
  
return <>
<div className="">
    <div className="row">
    <div className="col-12"> <Typography variant="h4" component="div" gutterBottom>
       Settings
      </Typography></div>
    </div>
    <div className="row">        
        <div className="col-md-6 col-12">
            <ControlledAccordions />
            </div>
        <div className="col-md-6 col-12">
            <ControlledAccordions />
        </div>

        <div className="col-12 text-center">
        <Carddiv data={props.data} />
        </div>         
    </div>
    <div className="row mt-4">
        <div className="col-12">
           <div className="table-responsive">
           <CustomizedTables />
           </div>
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

export default Settings;