import React from 'react'

const ConfigurationContext = React.createContext({
  isRegistered: true,
  Name: '',
  topic: '',
  errMsg: '',
  showErrMsg: () => {},
  onRegister: () => {},
  onRegisterDisplayName: () => {},
  onRegisterDisplayTopic: () => {},
})

export default ConfigurationContext
