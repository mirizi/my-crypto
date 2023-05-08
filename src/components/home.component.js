import React, { Component } from 'react'
import logo from '.\crypto_image_jpg'

export default class home extends Component {
  render() {
    return (
        <div class="jumbotron text-center">,
        <h1>this is my home</h1>
        <p>wellcome!!</p>
        <img src= {logo} class="img-circle" alt="crypto image" width="304" height="236"/> 
      </div>
    )
  }
}
