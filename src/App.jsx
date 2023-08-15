
import './App.css'

import data from './assets/data.json'
import Accounts from './components/Accounts'
import Header from './components/Header'

function App() {
  

  return (
    <>
     {data.map((elem)=> {
      console.log(elem)
     })}

     <Header/>
     <Accounts/>

    </>
  )
}

export default App
