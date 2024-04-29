
import './App.css';
import { Header, Footer, MainComposant } from './components'

function App() {
  return (
    <div className='Container' >
      <div className="App">      
          <Header/>
          <MainComposant/>     
          <Footer/> 
      </div>
    </div>
  );
}

export default App;
