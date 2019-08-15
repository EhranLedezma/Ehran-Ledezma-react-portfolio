import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt, faEdit } from "@fortawesome/free-solid-svg-icons"


import PortfolioContainer from "./portfolio/PortfolioContainer";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import order from "./pages/order";
import PortfolioDetail from "./portfolio/Portfolio-Detail";
import PortfolioManager from "./pages/Portfolio-Manager";
import Auth from "./pages/auth";
import NoMatch from "./pages/No-Match";

library.add(faTrash, faSignOutAlt, faEdit)


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }
  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }
  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }
  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
      withCredentials: true 
    })
      .then(response => {
      const loggedIn = response.data.logged_in
      const loggedInStatus = this.state.loggedInStatus

      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn
      } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        })
      } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        })
    }
  })
    .catch(error => {
      console.log("Error", error)
    })
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  authorizedPages() {
    return [  <Route key="portfolio-manager" path="/portfolio-manager" component={PortfolioManager} />]
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer 
            loggedInStatus={this.state.loggedInStatus}
            handleLogout={this.handleLogout}
            />

            <Switch>
              <Route exact path="/" component={Home} />

              <Route 
                path="/auth" 
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin = {this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin = {this.handleUnsuccessfulLogin}
                    />
                )
                }
                 />

              <Route path="/about-me" component={About} />
              <Route path="/Contact" component={Contact} />
              { this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
              <Route path="/order" component={order} />
              <Route path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
