import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Rgisterrouter  from './Rgisterrouter';
import Loginrouter from './Loginrouter';
import Routerp from './Routerp';
import Privatrouter_Login from './Privatrouter_Login';

                                   // ROUTER THI KRELU//
function App(){
      return(
         <>
   
      <Router> 
         <Routes> 
            <Route path='/' element={<Rgisterrouter/>}></Route>
            <Route path='/Loginrouter' element={<Loginrouter/> }></Route>
            <Route path='/Routerp' element={<Privatrouter_Login><Routerp/></Privatrouter_Login>}></Route>
         </Routes>
      </Router>
         </>    
      )
   }
   export default App;



                       // CONDITION RENDERING THI KRELU//

// function App() {
//          const [isLogin,setIsLogin]=React.useState(true)
//          //const [issubmit,setIssubmit]=React.useState(true)
    
//          //   const checkAdd = () =>{
//          //         setIssubmit(false)
//          //       }
//          const checkLogin =()=>{
//             // setIsLogin(false) alg alg function bnae n krva mate short tric mate noget ! use thay 
//             setIsLogin (!isLogin)
//          }
//       return (
//           <>
//            { isLogin? <Rgisterrouter checkLogin={checkLogin}/> : <Loginrouter checkLogin={checkLogin} />}:
//           {/* {issubmit? <Expence_Tracker_Add checkAdd={checkAdd}/>:<Expence_Tracker_Submit/>}  */}

//            </>
//       );
//     }
//     export default App;

