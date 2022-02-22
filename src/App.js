import React from "react";
import { Box } from "./components/Box";
import './styles/global.css';

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180
const stepsMin = 0;
const stepsMax = 50000;

function App() {
    return (
      <div class="container-fluid">
        <div class="row">

        <Box icon="directions_walk" color="black" value= "3000" unit="Steps"/>
        <Box icon="local_drink" color="#3A85FF" value= "1.5" unit="L"/>
        <Box icon="favorite" color="red" value= "120" unit="bpm"/>
        <Box icon="wb_sunny" color="yellow" value= "-10" unit="°C"/>
       
      
        <p>Heart : {heartMin}</p>
        <p>Tempearture : {tempMin}</p>
        <p>Steps : {stepsMin}</p>

        </div>
      </div>
    );
}
export default App;
