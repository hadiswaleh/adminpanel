import {Typography} from "@mui/material";
import Barchart from "../../component/barchart";

function Query(){
return <>
<div className="">
    <div className="row">
      <div className="col-12"> <Typography variant="h4" component="div" gutterBottom>
       Query Support
      </Typography></div>
        <div className="col-lg-3 col-12 mb-4">       
         <Barchart />
        </div>         
    </div>
</div>
 </>
}

export default Query;