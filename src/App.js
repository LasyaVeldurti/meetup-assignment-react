import {Switch, Route, Redirect} from 'react-router-dom'

import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'

import Home from './components/Home'

import Register from './components/Register'

import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {isRegistered: false, Name: '', topic: '', errMsg: ''}

  showErrMsg = () => {
    this.setState({errMsg: 'Please enter your name'})
  }

  onRegister = () => {
    this.setState({isRegistered: true})
  }

  onRegisterDisplayName = value => {
    this.setState({Name: value})
  }

  onRegisterDisplayTopic = value => {
    this.setState({topic: value})
  }

  render() {
    const {isRegistered, Name, errMsg, topic} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          isRegistered,
          Name,
          topic,
          errMsg,
          showErrMsg: this.showErrMsg,
          onRegister: this.onRegister,
          onRegisterDisplayName: this.onRegisterDisplayName,
          onRegisterDisplayTopic: this.onRegisterDisplayTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
