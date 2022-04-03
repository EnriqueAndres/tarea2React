import React from "react";
import Header from "./components/Header";
import Prueba from "./components/body";
import ApiInfo from "./components/ApiInfo";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './index.css'




export default function App() {
  return (
    <Router>
          <div>
            <Header/>
              <Switch>
                <Route exact path="/" component={Prueba}/>
                <Route exact path="/ApiInfo" component={ApiInfo}/>
              </Switch>
              {/* <Prueba/> */}
          </div>
      

   </Router>

 



  )
}

