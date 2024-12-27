import React, { useState, useEffect } from 'react';
import { Outlet, Link ,useParams} from "react-router-dom";
import './App.css';

function Video({ video }) {
  function ComponentA() {
   let k=video.link
  let j=k.replaceAll("/","+")
  console.log(j)
    return (
      <div className="App">
     
    
        <Link to={`play/${j}`}>play</Link>
        
      </div>
    );
  }
  return (
    <div className="video-item">
      <video className="video-thumbnail" controls>
        <source src={video.link} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-info">
        <h3 className="video-title">{video.name}</h3>
    <ComponentA/>
      </div>
    </div>
  );
}


function Garage() {
  const [vids, setVids] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3001/api/data')
    .then((response) => response.json())
    .then((result) => {
      if (Array.isArray(result.response)) {
        setVids(result.response); // Assuming result.response is an array of objects with name and link
      } else {
        console.error('Unexpected API response format:', result);
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);
  
  return (
    <div className="videos-grid">
      {vids.map((video, index) => (
        <Video key={index} video={video} />
      ))}
    </div>
  );
}
function App() {
  return (
    <div>
      <header>
        <a href="./upload.html">Upload Video</a>
        <h1>Yubtub</h1>
      </header>
      <h2>Random Videos</h2>
      <Garage />
    </div>
  );
}
export default App;
