
import './App.css';
function Videos(props){
  //let films=['./videos/0001-0250.mp4','./videos/0001-0030.mp4']
  
  return(
    <video width="250" height="250" controls>
      <source src="/videos/0001-0250.mp4" type="video/mp4"/>
      <source src="/videos/0001-0250.webm" type="video/webm"/>
    </video>
  );
}
function App() {
  
  return (
    <div>
      <h1>yubtub</h1>
      <br></br>
      <h1>random videos</h1>  
      <Videos/>
    </div>

  );
}

export default App;
