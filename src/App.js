import React, {useState, useEffect} from 'react'
import Help from './Components/Help'
import AOE from './Components/AOE'
import Footer from './Components/Footer'
import Prices from './Components/Prices'
import ClipLoader from "react-spinners/ClipLoader";
import About from './Components/About'
import Navbar from "./Components/Navbar";
import Home from './Components/Home'

function App() {

  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    })

  return (

    <div>
        {
            loading ?
            <div className='loader bg-zinc-200'>
              <ClipLoader color={"#40EAFF"} loading={loading} size={30} />
            </div>
            
            :
      <div className='loading bg-zinc-200'>
      <Navbar />
      <Home />
      <About />
      <Help />
      <AOE />
      <Prices />
      <Footer />
      </div>
      
        }
    </div>
  );
}

export default App;
