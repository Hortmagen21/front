import 'react-native-gesture-handler';
import React from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }
   AuthScreen(){
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return(<div className="App">
      <div className="login">
        <div className="container" ref={ref => (this.container = ref)}>
          {isLogginActive && (
            <Login containerRef={ref => (this.current = ref)} />
          )}
          {!isLogginActive && (
            <Register containerRef={ref => (this.current = ref)} />
          )}
        </div>
        <RightSide
          current={current}
          currentActive={currentActive}
          containerRef={ref => (this.rightSide = ref)}
          onClick={this.changeState.bind(this)}
        />
      </div>
    </div>);
  }
  componentDidMount() {
    this.rightSide.classList.add("right");
  }
  componentWillUnmount(){
    const { isLogginActive } = this.state;
    if (isLogginActive){
        this.rightSide.classList.remove("right");
    }
  else{
    this.rightSide.classList.remove("left");
  }
  }
  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return(<div className="App">
      <div className="login">
        <div className="container" ref={ref => (this.container = ref)}>
          {isLogginActive && (
            <Login containerRef={ref => (this.current = ref)} />
          )}
          {!isLogginActive && (
            <Register containerRef={ref => (this.current = ref)} />
          )}
        </div>
        <RightSide
          current={current}
          currentActive={currentActive}
          containerRef={ref => (this.rightSide = ref)}
          onClick={this.changeState.bind(this)}
        />
      </div>
    </div>);
  }
}
class RightSide extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div
        className="right-side"
        ref={this.props.containerRef}
        onClick={this.props.onClick}
      >
        <div className="inner-container">
          <div className="text">{this.props.current}</div>
        </div>
      </div>
    );
  }

}


export default App;
