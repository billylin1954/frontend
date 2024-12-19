import './App.css';


  let vids=["./uploads/0001-0030.mp4","./uploads/0001-0250.mp4","./uploads/3.mp4","./uploads/2.mp4","./uploads/5.mp4"];
  
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
