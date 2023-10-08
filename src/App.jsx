import './App.css'
import Header from './components/Header';
import Graph from './sections/Graph';
import Information from './sections/Information';

function App() {

  return (
    <>
    <div className=' flex items-start w-full justify-center flex-col p-1'>
      <Header/>
      <Graph/>
      <Information/>
    </div>
      
    </>
  )
}

export default App
