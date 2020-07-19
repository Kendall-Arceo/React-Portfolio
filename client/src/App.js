import React, { Fragment } from "react";
import LandingPage from './Pages/LandingPage'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {purple, red,} from "@material-ui/core/colors";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import "./App.css";


function App (){
  const theme = createMuiTheme({
    palette: {
      primary: {
        main:purple[800],
      },
      secondary: {
        main: red[900],
      },
      
    },
  });  


  return (
  
  <ThemeProvider theme = {theme}>
    <App>
      <Fragment> 
        <Router>

          

          <Switch>
            <Route exact path = {"/"}>
              <LandingPage components = {LandingPage} />
            </Route>
          </Switch>
        

        </Router>

        

      </Fragment>
    </App>
  </ThemeProvider>
    
  
  )
  
}

export default App;
