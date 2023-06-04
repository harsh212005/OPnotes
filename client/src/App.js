import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landingpage from './screeens/Landingpage/Landingpage';

import {BrowserRouter, Route, Routes} from "react-router-dom"
import Mynotes from './screeens/Mynotes/Mynotes';


// function App() { 
//   return (
//     <div className="App">
//       <Header />
//       <main >
//       {/* style={{minHeight: "93vh"}} */}
//       <Landingpage></Landingpage>
//       </main> 

//       <Footer />
//     </div>
//   );
// };
const App = ()=>(

    <BrowserRouter>
     <Header />
        <main>
            <Routes>
              <Route path="/" element={<Landingpage/>} exact />
              <Route path='/Mynotes' element = {<Mynotes/>} />
            </Routes>
            
        </main>
     <Footer />
    </BrowserRouter>
);

export default App;