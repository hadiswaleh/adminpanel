import {Typography} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Barchart from "../../component/barchart";
import Carddiv from "../../component/card";
import TodoProfile from "../../component/todoprofile";
const baseURL = "https://jsonplaceholder.typicode.com/todos";
function Todo(){
    const[tododata,setTodo] = useState([]);  
    useEffect(() => {
    axios.get(baseURL).then((res) => setTodo(res.data)).catch((err) => console.error(err) )     
    })

return <>
<div className="">
    <div className="row">
      <div className="col-12"> <Typography variant="h4" component="div" gutterBottom>
       Todo
      </Typography></div>             
         <TodoProfile data={tododata}/>
                
    </div>
</div>
 </>
}

export default Todo;