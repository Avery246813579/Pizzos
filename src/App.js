import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{display: "flex", height: "100vh", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <img src={require("./IMG_20230401_003232_01.jpg")} style={{width: "90vh"}}/>

      <div style={{marginTop: 64}}>
        Coming Soon
      </div>
    </div>
  );
}

export default App;
