
import './App.css'
// import HookFrom from './components/HookFrom/HookFrom'
// import RefForm from './components/RefFrom/RefForm'
// import ReusableFrom from './components/ReusableFrom/ReusableFrom'
// import SimpleFrom from './components/SimpleFrom/SimpleFrom'
// import StatefulFrom from './components/StatefulFrom/StatefulFrom'

import GrandPa from "./components/GrandPa/GrandPa"

function App() {
 
  const handleFrom=data=>{
   console.log(data)
}

  return (
    <>
      <GrandPa></GrandPa>
      <h1>Vite + React</h1>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StatefulFrom></StatefulFrom> */}
      {/* <RefForm></RefForm> */}
      {/* <HookFrom></HookFrom> */}

      {/* <ReusableFrom fromtitle={'sign up'} handleFrom={handleFrom}>
        <div>
          <h2>sign up</h2>
          <p>please sign up </p>
        </div>
      </ReusableFrom>
      <ReusableFrom fromtitle={'update profile'} handleFrom={handleFrom} submitText={'update'}>
        <div>
          <h2>update profile</h2>
          <p>always update your profile</p>
        </div>
      </ReusableFrom> */}
    </>
  )
}

export default App
