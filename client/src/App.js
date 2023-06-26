import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landingpage from './screeens/Landingpage/Landingpage';
import Loginpage from './screeens/Loginpage/Loginpage';
import Registerpage from './screeens/Registerpage/Registerpage';
import SingleNote from './screeens/SingleNote'
import { BrowserRouter,Routes,Route} from "react-router-dom"

// import {  BrowserRouter, Route} from "react-router-dom"
import Mynotes from './screeens/Mynotes/Mynotes';
import Createnote from './screeens/CreateNote/Createnote';
import { useState } from 'react';


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
const App = ()=>{
const [search,setSearch] = useState("");

    
return(
    <BrowserRouter>
     <Header setSearch={setSearch}/>
        <main>
            <Routes>
              <Route path="/" element={<Landingpage/>} exact />
              <Route path="/login" element={<Loginpage/>}  />
              <Route path="/register" element={<Registerpage/>} />
              <Route path="/createnote" element={<Createnote/>}  />
              <Route path="/note/:id" element={<SingleNote/>}  />
              <Route path='/Mynotes' element = {<Mynotes  />} />
              
            </Routes>
            
        </main>
     <Footer />
    </BrowserRouter>)
};


// const App = ()=>(

//   <BrowserRouter>
//    <Header />
//       <main>
          
//             <Route path="/" component={Landingpage} exact />
//             <Route path="/login" component={Loginpage}  />
//             <Route path="/register" component={Registerpage}  />
//             <Route path='/Mynotes' component = {Mynotes} />
            
          
          
//       </main>
//    <Footer />
//   </BrowserRouter>


export default App;