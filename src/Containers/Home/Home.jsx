import React from 'react'
import { connect } from 'react-redux';


const Home = (props) => {
    console.log(props.credentials.token)
    const myStyleHome = {
        color: "white",
        position:"relative",
        top:"5em",
        left:"19em",
    }
    return (
        <div className="body">
        <h1 style={myStyleHome}>Home</h1>
        </div>
        
        
    )
}

export default connect((state) => ({
  credentials: state.credentials,
}))(Home);








