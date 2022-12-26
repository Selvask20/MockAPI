import React from "react";
import './Class.css'
class cat extends React.Component{
    render(){
        let arr=['play fighting',' miya miya','people are like me']
        return(
            <div id='ss'>
            <div className="class">
                <img  src="https://static.toiimg.com/thumb/msid-88404212,imgsize-58262,width-400,resizemode-4/88404212.jpg" alt="car"></img><br /><br/>
                </div> 
                 <div className="clas">
              <ol>
              {arr.map((ee,index)=>(<li key={index}>{ee}</li>))}
              </ol>
           </div></div>
        )
    }
}
export default cat;