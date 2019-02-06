import React from 'react'
import { withRouter } from 'react-router-dom'

class UserNavBar extends React.Component {
    logOut = e => {
        e.preventDefault()
        localStorage.clear()
        this.props.history.push('/login')
    }
    render() {
        return (
            <nav>
                <div className="nav-img-container">
                     <img alt="guidr" src={require('../../assets/logo_white.png')} />
                </div>
                
                <button onClick={this.logOut}>Log Out</button>
                
            </nav>
          )
    }

}

export default withRouter(UserNavBar)