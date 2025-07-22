import './App.css'
import {LogiNext} from './components/LogiNext';
import { Toaster } from "react-hot-toast";
function App() {

  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
      <LogiNext/>
    </>
  )
}

export default App
