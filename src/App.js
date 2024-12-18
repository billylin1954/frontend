import './App.css';


  let vids=["./uploads/0001-0030.mp4","/uploads/My video - Date(1) (online-video-cutter.com) (1).mp4","./uploads/7 Days Stranded In A Cave.mp4","./uploads/How to make your country a superpower.mp4","./uploads/lies I believed as a kid.mp4",];
  
  function Car(props) {
    return <h2><video width="500" controls >
    <source src={props.brand} type="video/mp4"></source>
   <br></br>
  </video> </h2>;
  }
  
  function Garage() {
    
    return (
      <>
        
        
          {vids.map((car) => <Car brand={car} />)}
        
      </>
    );
  }
  
function App() {
  return (
    <div>
      <a href="./upload.html">upload video</a>
      <h1>Yubtub</h1>
      <h2>Random Videos</h2>
      <br/>
     <Garage/>
    </div>
  );
}

export default App;
