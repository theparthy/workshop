import React from 'react'
import Paper from 'material-ui/Paper'
import logo from '../logo.svg'

const NoContactSelected = ({loading, error}) => <Paper style={{
  width: '800px',
  height: '450px',
  marginTop: '50px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <h1>{loading ? 'Please Wait' : 'Please select a contact'}</h1>
  {loading ? <img src={logo} className="App-logo" alt="logo"/> : null}
  {loading ? <h1>Loading...</h1> : null}
</Paper>
export default NoContactSelected
