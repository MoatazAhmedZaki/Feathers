import React, { Component } from 'react'
import SocialLogin from 'react-social-login'


export default class SocialButton extends Component {
    render() {
        return (
            <button onClick={this.props.triggerLogin} {...this.props}>
            { this.props.children }
          </button>
        )
    }
}
