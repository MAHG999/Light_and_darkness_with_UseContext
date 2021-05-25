
import './App.css';


import ThemeProvider from './context/ThemeProviders';

import Header from './components/Header';

function App() {
  
  return (
    <ThemeProvider>
    <div className="App">
       
        <Header/>
      
    </div>
    </ThemeProvider>
  );
}

export default App;
