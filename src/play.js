    import React, { useState, useEffect } from 'react';
import { Outlet, Link,useParams } from "react-router-dom";
import './App.css';

function Video({ location }) {
    const routeParams = useParams();
    let  video =useParams()
    video=routeParams.vid.replaceAll("+","/")
    console.log(routeParams.vid)
    console.log(video)
  return(
<div>

    <video width="2000" height="500" controls >    
          <source src={video} type="video/mp4" />
           
          Your browser does not support the video tag.
        </video>
        <br/>
        
</div>

  );
}
function Play() {
  return (
    <div>
     <Video/>
    </div>
  );
}

export default Play;
