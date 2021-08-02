import React from 'react'
import { connect } from 'react-redux';

const Home = (props) => {
    console.log(props.credentials.token)
    return (
        <div>
            Esto es Home
        </div>
    )
}

export default connect((state) => ({
  credentials: state.credentials,
}))(Home);








