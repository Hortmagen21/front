import React from "react";
import axios from "axios";
const main_url='https://sleepy-ocean-25130.herokuapp.com';
const side_url=' http://127.0.0.1:8000';
export class Register extends React.Component{

  constructor(props){
    super(props);
    this.state={
      username:"",
      password:"",
      email:""
    };
    this.updateInputValue = this.updateInputValue.bind(this);
  }
  updateInputValue(event){
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  register(){
    var bodyFormData = new FormData();
    bodyFormData.append('username', this.state.username);
    bodyFormData.append('password', this.state.password);
    bodyFormData.append('email', this.state.email);
    axios({
  method: "post",
  url: side_url+"/acc_base/registration",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
})
  .then(function (response) {
    //handle success
    console.log(response);
  })
  .catch(function (response) {
    //handle error
    console.log(response);
  });
  }
  render(){
    return<div className="base-container" ref={this.props.containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
        </div>
        <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.updateInputValue} value={this.state.username}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" onChange={this.updateInputValue} value={this.state.email}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.updateInputValue} value={this.state.password}/>
            </div>
        </div>

      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={this.register.bind(this)}>Register</button>
      </div>
    </div>
  }
}
