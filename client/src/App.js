import './App.css';
import { grabApi } from './services';
import {useEffect, useState} from 'react'
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Form from './component/Form';
import Songs from './component/Songs';
import Song from './component/Song';

function App() {
    const [jpegmafia, setJpegmafia] = useState([])
    const [toggle, setToggle] = useState(false)
    
    useEffect(() => {
      const getJpegmafia = async () => {
        const response = await grabApi()
        setJpegmafia(response.data)
      }
      getJpegmafia()
    }, [toggle])
 
  return (
    <div className="App">
      <h1>JPEGMAFIA Song Title Generator</h1>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Songs jpegmafia={jpegmafia} />} />
        {/* <Route
          path='/new'
          element={<Form setToggle={setToggle} />} /> */}
          <Route
          path='/songs/:id'
          element={<Song jpegmafia={jpegmafia} />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
