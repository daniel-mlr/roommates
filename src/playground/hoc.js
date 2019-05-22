// hoc.js

// higher order component: A component that renders another component
// goal: to reuse code
//       render hijacking
//       prop manipulation
//       abstract state

import React from 'react'
import reactDOM from 'react-dom'

/* eslint-disable react/prop-types */
const Info = (props) => (
  <div>
    <h3>Info</h3>
    <p>This info is: {props.info}</p> 
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => ( // eslint-disable-line
    <div>
      {
        props.isAdmin && 
          <p>This is private info. Please don&apos;t share!</p>
      }
      <WrappedComponent { ...props }/>
    </div>
  )
}


const requireAuthentication = (WrappedComponent) => {
  return (props) => ( // eslint-disable-line
    <div>
      {
        props.isLogged 
          ? <WrappedComponent { ...props } /> 
          : <p>Authentification requise</p>
      }
    </div>
  )
}

// const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)


reactDOM.render(
  <AuthInfo isLogged={true} info="these are the details"/>,
  document.getElementById('app')
)
