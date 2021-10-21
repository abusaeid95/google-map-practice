import { useRef, useState } from 'react';
import './App.css';
import Directional from './Componets/DirectionalMaps/Directional';

function App() {
  const [origin, setOrigin]= useState('');
  const [destination, setDestination]=useState('');
  const originRef = useRef('')
  const destinationRef = useRef('')
  const handleDirection =(e)=>{
    setOrigin(originRef.current.value)
    setDestination(destinationRef.current.value)
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleDirection}>
        <input type="text" name="" id="" placeholder="From"/>
        <br />
        <input type="text" name="" id="" placeholder="Destination" />
        <br />
        <input type="submit" value="Get Direction" />
      </form>
      <Directional origin={origin} destination={destination}></Directional>
    </div>
  );
}

export default App;
