import React, { Fragment } from "react";
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import "./App.css";


function App (){
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });


  return (
  
  <ThemeProvider theme = {darkTheme}>

    <Fragment> 
      <Router>

        <div>

          <Switch>
            <Route exact path = {"/"}>

            </Route>
          </Switch>
        </div>

      </Router>

      <Header/>

      <Footer/>

    </Fragment>
  </ThemeProvider>
    
  
  )
  
}

export default App;
